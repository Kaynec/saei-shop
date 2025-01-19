<template>
  <main class="p-2 lg:p-4">
    <div class="relative items-center flex justify-center min-h-[100svh]">
      <ProgressSpinner v-if="status == 'pending'" />

      <div v-else class="relative grid grid-cols-1 md:grid-cols-6 gap-2">
        <Card
          class="flex items-center col-span-6 lg:col-span-3 xl:col-span-4 bg-white text-center"
        >
          <template #content>
            <div
              v-html="formatMarkdownToHTML(data as string)"
              class="prose break-words max-w-[80vw] !text-center"
            ></div>
          </template>
        </Card>
        <Card
          class="col-span-6 lg:col-span-3 xl:col-span-2 bg-white flex flex-col gap-4 px-4 max-h-max order-first lg:order-last"
        >
          <template #content>
            <div class="w-full space-y-6 px-4 py-3 text-left text-gray-800">
              <div class="mx-auto text-xl font-semibold flex-center gap-2">
                <p class="text-lg font-bold">
                  جدیدترین مقاله <span class="text-orange-400">ساعی</span>
                </p>
              </div>
              <BlogCard
                image="https://s8.uupload.ir/files/marika-vinkmann-gxdlbzikwmc-unsplash_1_49av.png"
                title="لوازم التحریر چیست؟"
                content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، "
                :date="new Date().toLocaleDateString('fa')"
                :onReadMore="() => null"
                :onShare="() => null"
              />

              <div class="mx-auto text-xl font-semibold flex-center gap-2">
                <img src="/newspaper.svg" alt="newspaper logo" />
                <strong>پربازدید ترین مقالات</strong>
              </div>
              <ul class="mt-2 list-disc text-right px-2 pl-6">
                <li>
                  <a
                    class="block hover:bg-gray-200 px-2 py-1 rounded"
                    href="#introduction"
                    >علت شارژ نشدن باتری های موبایل</a
                  >
                </li>
                <li>
                  <a
                    class="block hover:bg-gray-200 px-2 py-1 rounded"
                    href="#getting-started"
                    >زمان شارژ نگه داشتن باتری ها را افزایش دهید</a
                  >
                </li>
                <li>
                  <a
                    class="block hover:bg-gray-200 px-2 py-1 rounded"
                    href="#responsive-design"
                    >خاموش شدن ناگهانی موبایل</a
                  >
                </li>
                <li>
                  <a
                    class="block hover:bg-gray-200 px-2 py-1 rounded"
                    href="#theming-and-customization"
                    >باتری های شارژی چگونه کار می کنند</a
                  >
                </li>
                <li>
                  <a
                    class="block hover:bg-gray-200 px-2 py-1 rounded"
                    href="#sass-maps-in-bootstrap"
                    >علت شارژ نشدن باتری های موبایل</a
                  >
                </li>
                <li>
                  <a
                    class="block hover:bg-gray-200 px-2 py-1 rounded"
                    href="#best-practices"
                    >زمان شارژ نگه داشتن باتری ها را افزایش دهید</a
                  >
                </li>
                <li>
                  <a
                    class="block hover:bg-gray-200 px-2 py-1 rounded"
                    href="#code-samples"
                    >خاموش شدن ناگهانی موبایل</a
                  >
                </li>
                <li>
                  <a
                    class="block hover:bg-gray-200 px-2 py-1 rounded"
                    href="#conclusion"
                    >باتری های شارژی چگونه کار می کنند</a
                  >
                </li>
                <li>
                  <a
                    class="block hover:bg-gray-200 px-2 py-1 rounded"
                    href="#change-theme-color"
                    >علت شارژ نشدن باتری های موبایل</a
                  >
                </li>
                <li>
                  <a
                    class="block hover:bg-gray-200 px-2 py-1 rounded"
                    href="#using-theme-color"
                    >زمان شارژ نگه داشتن باتری ها را افزایش دهید</a
                  >
                </li>
                <li>
                  <a
                    class="block hover:bg-gray-200 px-2 py-1 rounded"
                    href="#number-of-colors"
                    >خاموش شدن ناگهانی موبایل</a
                  >
                </li>
                <li>
                  <a
                    class="block hover:bg-gray-200 px-2 py-1 rounded"
                    href="#customize-theme"
                    >باتری های شارژی چگونه کار می کنند</a
                  >
                </li>
              </ul>
              <div class="mx-auto text-xl font-semibold flex-center gap-2">
                <img src="/newspaper.svg" alt="newspaper logo" />
                <strong>دسته بندی مقالات</strong>
              </div>

              <!-- Blog Tags -->

              <!--  -->

              <div class="flex gap-2 flex-wrap items-center justify-start">
                <Chip
                  v-for="i in [
                    'آموزشی',
                    'انگیزه نامه',
                    'توسعه دهنده',
                    'مهندسی',
                    'ساختار بازار',
                    'برنامه نویس',
                    'توسعه دهنده',
                    'مهندسی',
                    'ساختار بازار',
                  ]"
                  :label="i"
                  class="bg-orange-50 text-orange-400"
                />
              </div>
            </div>
          </template>
        </Card>
      </div>
    </div>
    <!-- <section>
      <ProductList v-bind="orangeCarousel" variant="bordered" />
    </section> -->
  </main>
</template>

<script setup lang="ts">
import MarkDownIt from "markdown-it";
import AnimateOnScroll from "primevue/animateonscroll";
const { data, status } = useFetch("/api/Markdown");

const orangeCarousel = {
  headerImage:
    "https://s8.uupload.ir/files/kisspng-old-magic-book-children-s-literature-magic-book-5b0dc6aa555dc0_1_to0p.png",
  headerText: "کتاب و لوازم التحریر",
  themeColor: "orange" as const,
  opts: {
    align: "start",
  },
  showNuxtImg: true,
  nuxtImgUrl: "https://s8.uupload.ir/files/-children-_lc15.png",
};

function formatMarkdownToHTML(text: string) {
  const md = new MarkDownIt();
  return md.render(text);
}
</script>

<style scoped></style>
