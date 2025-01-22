import type {
  UnwrapRefCarouselApi as CarouselApi,
  CarouselEmits,
  CarouselProps,
} from "./interface";
import { createInjectionState } from "@vueuse/core";
import emblaCarouselVue from "embla-carousel-vue";
import { onMounted, onBeforeUnmount, ref, watch } from "vue";

const [useProvideCarousel, useInjectCarousel] = createInjectionState(
  (
    { opts, orientation, plugins, autoplay }: CarouselProps,
    emits: CarouselEmits
  ) => {
    const [emblaNode, emblaApi] = emblaCarouselVue(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
        direction: "rtl",
      },
      plugins
    );

    // Autoplay settings
    const autoplayInterval = ref(3000); // Time in milliseconds
    let autoplayTimer: ReturnType<typeof setInterval> | null = null;

    function scrollPrev() {
      emblaApi.value?.scrollPrev();
    }

    function scrollNext() {
      emblaApi.value?.scrollNext();
    }

    const canScrollNext = ref(false);
    const canScrollPrev = ref(false);

    function onSelect(api: CarouselApi) {
      canScrollNext.value = api?.canScrollNext() || false;
      canScrollPrev.value = api?.canScrollPrev() || false;
      stopAutoplay();
      startAutoplay();
    }

    function startAutoplay() {
      if (autoplayTimer) return; // Prevent multiple intervals
      autoplayTimer = setInterval(() => {
        if (canScrollNext.value) {
          scrollNext();
        }
      }, autoplayInterval.value);
    }

    function stopAutoplay() {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    }

    onMounted(() => {
      if (!emblaApi.value) return;

      emblaApi.value?.on("init", onSelect);
      emblaApi.value?.on("reInit", onSelect);
      emblaApi.value?.on("select", onSelect);

      emits("init-api", emblaApi.value);

      // Start autoplay if the prop is true
      if (autoplay) {
        startAutoplay();
      }
    });

    onBeforeUnmount(() => {
      stopAutoplay(); // Clear the interval when component unmounts
    });

    // Watch for changes to the autoplay prop
    watch(
      () => autoplay,
      (newVal) => {
        if (newVal) {
          startAutoplay();
        } else {
          stopAutoplay();
        }
      }
    );

    return {
      carouselRef: emblaNode,
      carouselApi: emblaApi,
      canScrollPrev,
      canScrollNext,
      scrollPrev,
      scrollNext,
      orientation,
      onSelect,
    };
  }
);

function useCarousel() {
  const carouselState = useInjectCarousel();

  if (!carouselState)
    throw new Error("useCarousel must be used within a <Carousel />");

  return carouselState;
}

export { useCarousel, useProvideCarousel };
