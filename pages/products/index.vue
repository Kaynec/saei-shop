<template>
  <DataView
    layout="grid"
    :value="products"
    class="p-4 py-16"
    paginator
    :rows="20"
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

    <template #grid="slotProps">
      <div class="flex flex-wrap -ml-4 -mt-4">
        <div
          v-for="(item, index) in slotProps.items"
          class="basis-1/2 md:basis-1/3 lg:basis-1/4 2xl:basis-1/6 pt-4 pl-4"
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
                    <div class="text-lg font-medium mt-1">{{ item.name }}</div>
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
                  <span class="text-2xl font-semibold">${{ item.price }}</span>
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
</template>

<script setup>
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
const getSeverity = (product) => {
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
</script>

<style scoped>
:deep(.p-paginator) {
  margin-top: 4rem;
  background: transparent;
}
</style>
