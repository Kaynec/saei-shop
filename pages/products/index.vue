<template>
  <main class="p-4 py-16 grid grid-cols-12 gap-4">
    <div class="col-span-3 rounded">
      <MyCard class="flex flex-col gap-3 col-span-4 lg:col-span-1">
        <div class="flex-center">
          <span>فیلترها</span>
        </div>
        <InputText
          v-model="search"
          placeholder="جست جو محصول"
          class="z-3"
          style="border-radius: 0.5rem; color: #fff"
        >
          <Icon name="mdi-search" class="text-blue-9"></Icon>
        </InputText>

        <List class="rounded-24px bg-dark pa-lg text-text-primary">
          <Divider />
          <Accordion :value="['0']" multiple>
            <AccordionPanel value="0">
              <AccordionHeader>دسته بندی</AccordionHeader>
              <AccordionContent>
                <div class="flex flex-col gap-2">
                  <div class="flex items-center gap-2">
                    <Checkbox inputId="ingredient1" value="irani" />
                    <label for="ingredient1"> ایرانی </label>
                  </div>
                  <div class="flex items-center gap-2">
                    <Checkbox inputId="ingredient1" value="irani" />
                    <label for="ingredient1"> آمریکایی </label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionPanel>

            <AccordionPanel value="1">
              <AccordionHeader>برند</AccordionHeader>
              <AccordionContent>
                <div class="flex flex-col gap-2">
                  <div class="flex items-center gap-2">
                    <Checkbox inputId="ingredient1" value="irani" />
                    <label for="ingredient1"> ایرانی </label>
                  </div>
                  <div class="flex items-center gap-2">
                    <Checkbox inputId="ingredient1" value="irani" />
                    <label for="ingredient1"> آمریکایی </label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="3">
              <AccordionHeader>قیمت</AccordionHeader>
              <AccordionContent>
                <div class="flex flex-col gap-4">
                  <div class="flex justify-between">
                    <span> از </span>
                    <span class="flex-center gap-2">
                      {{ priceRange?.[0] }}
                      <Tooman />
                    </span>
                  </div>
                  <div class="flex justify-between">
                    <span> تا </span>
                    <span class="flex-center gap-2">
                      {{ priceRange?.[1] }}
                      <Tooman />
                    </span>
                  </div>
                </div>
                <div class="relative py-4">
                  <span class="absolute left-0 -bottom-4">گران‌ترین</span>
                  <Slider v-model="priceRange" range />

                  <span class="absolute right-0 -bottom-4">ارزان‌ترین</span>
                </div>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>

          <div class="flex flex-col my-lg">
            <div class="flex justify-between p-2">
              <label>فقط کالاهای موجود</label>
              <ToggleSwitch
                v-model="availableToggle"
                onLabel="فقط کالاهای موجود"
                offLabel=""
              />
            </div>
          </div>
        </List>
      </MyCard>
    </div>
    <DataView
      layout="grid"
      :value="products"
      class="col-span-9"
      paginator
      :rows="20"
      data-key="products"
    >
      <template
        #paginatorcontainer="{
          first,
          last,
          page,
          pageCount,
          prevPageCallback,
          nextPageCallback,
          lastPageCallback,
          firstPageCallback,
          totalRecords,
        }"
      >
        <MyPaginator
          :first="first"
          :last="last"
          :page="page"
          :pageCount="pageCount"
          :totalRecords="totalRecords"
          :prevPageCallback="prevPageCallback"
          :nextPageCallback="nextPageCallback"
          :lastPageCallback="lastPageCallback"
          :firstPageCallback="firstPageCallback"
        />
      </template>

      <template #header>
        <section class="flex gap-2 !text-lg !text-grey-500">
          <MyButton color="bg-transparent" class="flex-center gap-2">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" rx="5" fill="#F5F5F5" />
              <path
                d="M31 34V23"
                stroke="#575757"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M31 19V14"
                stroke="#575757"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M24 34V29"
                stroke="#575757"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M24 25V14"
                stroke="#575757"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17 34V23"
                stroke="#575757"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17 19V14"
                stroke="#575757"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 23H19"
                stroke="#575757"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M29 23H33"
                stroke="#575757"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 25H26"
                stroke="#575757"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span class="text-lg"> مرتب سازی : </span>
          </MyButton>
          <MyButton @click="changeSort('score')" color="bg-transparent">
            <span
              :class="activeSort == 'score' ? 'text-orange-300' : ''"
              class="text-lg"
            >
              محبوب‌ترین
            </span>
          </MyButton>
          <MyButton @click="changeSort('high_price')" color="bg-transparent">
            <span
              :class="activeSort == 'high_price' ? 'text-orange-300' : ''"
              class="text-lg"
            >
              گران‌ترین
            </span>
          </MyButton>
          <MyButton @click="changeSort('low_price')" color="bg-transparent">
            <span
              :class="activeSort == 'low_price' ? 'text-orange-300' : ''"
              class="text-lg"
            >
              ارزان‌ترین
            </span>
          </MyButton>
          <MyButton @click="changeSort('newsest')" color="bg-transparent">
            <span
              :class="activeSort == 'newsest' ? 'text-orange-300' : ''"
              class="text-lg"
            >
              جدید‌ترین
            </span>
          </MyButton>
          <MyButton @click="changeSort('most_selled')" color="bg-transparent">
            <span
              :class="activeSort == 'most_selled' ? 'text-orange-300' : ''"
              class="text-lg"
            >
              پرفروش‌ترین
            </span>
          </MyButton>
        </section>
      </template>

      <template #grid="slotProps">
        <div class="flex flex-wrap -ml-3 -mt-3">
          <div
            v-for="(item, index) in slotProps.items"
            class="basis-full md:basis-2/4 xl:basis-1/4 pt-3 pl-3"
          >
            <ProductItem
              :key="index"
              image="https://s3-alpha-sig.figma.com/img/dbb6/728f/22a4a332ae99a982afb0156d548c3492?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UsBqGIsKw15RoEMKEH9yaqXwzMdq6SWXf~yirvuYyEFJmdvr6dlj-fG5rYdbEl0FETwWGNBNsJvNe~yV9dx~O-TCgCeSOI5ahk1viYD2Lb-d1ABZ1QhfeV2c9PkTNb9l1tHnZ12WWhKp9a5i~qRczDvWtoSWIx4Q28momgh0P6Be4SGF9q3Ntn9wnUC9Uw49VbPyFW0b-AYm-QkNiWHR~fDtiRCetqt-BJXbDGOMT1BDIOw-xS4X4W543XdNNn5E4USorX8x1LgCadUp5Z4vIY4iVep3uYGdmLVG5pdU1DtmPb6BgHaxR1nXcY7~RZJnWmbyC4kFBuhfgnFbOcjybA__"
              :score="70"
              name="کتاب راز"
              discount_end_time="2025-01-25T15:30:00Z"
              price="120,000"
              off_price="150,000"
              themeColor="orange"
              class="shadow-xl"
            >
              <div
                class="p-6 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded flex flex-col"
              >
                <div class="bg-surface-50 flex justify-center rounded p-4">
                  <div class="relative mx-auto">
                    <img
                      class="rounded w-full"
                      :src="`https://primefaces.org/cdn/primevue/images/product/${item.image}`"
                      :alt="item.name"
                      style="max-width: 300px"
                    />
                    <div
                      class="absolute bg-black/70 rounded-border"
                      style="left: 4px; top: 4px"
                    >
                      <Tag
                        :value="item.inventoryStatus"
                        :severity="getSeverity(item)"
                      ></Tag>
                    </div>
                  </div>
                </div>
                <div class="pt-6">
                  <div class="flex flex-row justify-between items-start gap-2">
                    <div>
                      <span
                        class="font-medium text-surface-500 dark:text-surface-400 text-sm"
                        >{{ item.category }}</span
                      >
                      <div class="text-lg font-medium mt-1">
                        {{ item.name }}
                      </div>
                    </div>
                    <div class="bg-surface-100 p-1" style="border-radius: 30px">
                      <div
                        class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2"
                        style="
                          border-radius: 30px;
                          box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04),
                            0px 1px 2px 0px rgba(0, 0, 0, 0.06);
                        "
                      >
                        <span class="text-surface-900 font-medium text-sm">{{
                          item.rating
                        }}</span>
                        <i class="pi pi-star-fill text-yellow-500"></i>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col gap-6 mt-6">
                    <span class="text-2xl font-semibold"
                      >${{ item.price }}</span
                    >
                    <div class="flex gap-2">
                      <Button
                        icon="pi pi-shopping-cart"
                        label="Buy Now"
                        :disabled="item.inventoryStatus === 'OUTOFSTOCK'"
                        class="flex-auto whitespace-nowrap"
                      ></Button>
                      <Button icon="pi pi-heart" outlined></Button>
                    </div>
                  </div>
                </div>
              </div>
            </ProductItem>
          </div>
        </div>
      </template>
    </DataView>
  </main>
</template>

<script setup lang="ts">
const products = ref(
  Array(100).map((el) => ({
    key: "index",
    class: "col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-6 p-2",
    image:
      "https://s3-alpha-sig.figma.com/img/dbb6/728f/22a4a332ae99a982afb0156d548c3492?Expires=1737936000&Key-Pair-Id:APKAQ4GOSFWCVNEHN3O4&Signature:UsBqGIsKw15RoEMKEH9yaqXwzMdq6SWXf~yirvuYyEFJmdvr6dlj-fG5rYdbEl0FETwWGNBNsJvNe~yV9dx~O-TCgCeSOI5ahk1viYD2Lb-d1ABZ1QhfeV2c9PkTNb9l1tHnZ12WWhKp9a5i~qRczDvWtoSWIx4Q28momgh0P6Be4SGF9q3Ntn9wnUC9Uw49VbPyFW0b-AYm-QkNiWHR~fDtiRCetqt-BJXbDGOMT1BDIOw-xS4X4W543XdNNn5E4USorX8x1LgCadUp5Z4vIY4iVep3uYGdmLVG5pdU1DtmPb6BgHaxR1nXcY7~RZJnWmbyC4kFBuhfgnFbOcjybA__",
    score: "70",
    name: "کتاب راز",
    discount_end_time: "2025-01-25T15:30:00Z",
    price: "120,000",
    off_price: "150,000",
    themeColor: "yellow",
  }))
);
const getSeverity = (product: Record<string, any>) => {
  switch (product.inventoryStatus) {
    case "INSTOCK":
      return "success";

    case "LOWSTOCK":
      return "warn";

    case "OUTOFSTOCK":
      return "danger";

    default:
      return null;
  }
};

type Sort = "low_price" | "high_price" | "most_selled" | "newsest" | "score";

const activeSort = ref<Sort>("low_price");

function changeSort(sort: Sort) {
  activeSort.value = sort;
}

const search = ref("");

const discountedToggle = ref(false);

const availableToggle = ref(false);

const selectedBrands = ref<string[]>([]);

const selectedTypes = ref<string[]>([]);

const priceRange = ref([0, 100]);
</script>

<style scoped>
:deep(.p-paginator) {
  margin-top: 4rem;
  background: transparent;
}
:deep(.p-dataview-header) {
  background: transparent;
  border: none;
  padding: 0;
  margin: 0 !important;
  transform: translateY(-20%);
}
</style>
