import { ref, watch } from "vue";
import { type EmblaCarouselType } from "embla-carousel";

type UseAutoplayType = {
  autoplayIsPlaying: Ref<Boolean>;
  toggleAutoplay: () => void;
  onAutoplayButtonClick: (callback: () => void) => void;
};

export const useAutoplay = (emblaApi: EmblaCarouselType): UseAutoplayType => {
  const autoplayIsPlaying = ref(false);

  const onAutoplayButtonClick = (callback: () => void) => {
    const autoplay = emblaApi?.plugins()?.autoplay;

    if (!autoplay) return;

    const resetOrStop: () => void = autoplay.isPlaying
      ? (autoplay.reset as () => void)
      : (autoplay.stop as () => void);

    resetOrStop();
    callback();
  };

  const toggleAutoplay = () => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const playOrStop = (autoplay?.isPlaying as () => boolean)()
      ? (autoplay.stop as () => void)
      : (autoplay.play as () => void);
    playOrStop();
  };

  // Watch for changes in the emblaApi and update the autoplay state accordingly
  watch(
    () => emblaApi,
    (newApi) => {
      if (!newApi) return;

      const autoplay = newApi.plugins()?.autoplay;
      if (!autoplay) return;

      autoplayIsPlaying.value = (autoplay?.isPlaying as () => boolean)();

      (newApi.on as any)("autoplay:play", () => {
        autoplayIsPlaying.value = true;
      });

      (newApi.on as any)("autoplay:stop", () => {
        autoplayIsPlaying.value = false;
      });

      (newApi.on as any)("reInit", () => {
        autoplayIsPlaying.value = (autoplay?.isPlaying as () => boolean)();
      });
    },
    { immediate: true }
  );

  return {
    autoplayIsPlaying,
    toggleAutoplay,
    onAutoplayButtonClick,
  };
};
