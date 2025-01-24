<template>
  <main class="p-4 py-16 grid grid-cols-12 gap-4 min-h-[65svh] relative">
    <Dialog
      :pt="{
        root: 'p-dialog-maximized',
      }"
      class="block md:hidden w-full"
      modal
      maximizable
      v-model:visible="visible"
    >
      <template #header>
        <div>
          <FilterButton @click="visible = !visible" />
        </div>
      </template>
      <ProductPageFilters v-model="model" />
    </Dialog>

    <Dialog
      class="block md:hidden w-full"
      modal
      maximizable
      v-model:visible="visibleSortBy"
      :pt="{
        root: 'p-dialog-maximized',
      }"
    >
      <template #header>
        <div>
          <SortButton />
        </div>
      </template>
      <ProductPageSortBy
        :CurrentFilterCondition="model.CurrentFilterCondition"
        :changeSort="changeSort"
      />
    </Dialog>

    <div class="hidden md:grid md:col-span-4 xl:col-span-3 rounded">
      <ProductPageFilters v-model="model" />
    </div>
    <DataGrid
      :items="data?.results"
      :total-records="data.count"
      :page="current"
      :page-count="max"
      :limit="limit"
      :first-page-callback="() => (current = 1)"
      :prev-page-callback="() => (current = current - 1)"
      :next-page-callback="() => (current = current + 1)"
      :last-page-callback="() => (current = max)"
      class="col-span-12 md:col-span-8 xl:col-span-9 flex gap-2 flex-w"
    >
      <template #header>
        <div class="flex md:hidden gap-2">
          <FilterButton @click="visible = true" />

          <SortButton @click="visibleSortBy = true" />
        </div>

        <ProductPageSortBy
          class="hidden md:flex"
          :CurrentFilterCondition="model.CurrentFilterCondition"
          :changeSort="changeSort"
        />
      </template>
      <template #grid-item="{ data }">
        <ProductItem
          :slug="data.slug"
          :image="data.main_image"
          :score="data.score"
          :name="data.title"
          :discount_end_time="data.discount_end_time"
          :price="data.price"
          :off_price="data.off_price"
          themeColor="orange"
          class="shadow-xl h-full"
        />
      </template>
    </DataGrid>

    <Message
      class="col-span-12 flex-center"
      severity="error"
      v-if="status === 'error'"
      >خطایی رخ داده است</Message
    >
  </main>
</template>

<script setup lang="tsx">
import type {
  Label,
  Brand,
  CategoryOutPutWithSelected,
  BrandWithSelected,
} from "@/types";
import { PriceTypes, CategoryTypes } from "@/types";

import {
  apiProductBrandListRetrieve,
  apiProductCategoryListRetrieve,
  apiProductGetProductRetrieve,
  type ApiProductGetProductRetrieveParams,
  type CategoryOutPut,
  type ProudctOutPut,
} from "@/api";
import { useDebounceFn } from "@vueuse/core";
import MyButtonSvg from "~/components/Product/MyButtonSvg.vue";
import MyButton from "~/components/MyButton.vue";
import { Icon } from "#components";

useSeoMeta({
  title: "Saei  - Products",
  ogTitle: "Saei  - Products",
  description: "محصولات",
  ogDescription: "محصولات",
});

const router = useRouter();

// const baseCategoryType = ProductTypes.PHYCICAL;

function filterBasedOnPriceOrder() {
  if (model.value.CurrentFilterCondition === "Newset") return PriceTypes.NEWEST;
  if (model.value.CurrentFilterCondition === "MostExpensive")
    return PriceTypes.EXPENSIVE;
  if (model.value.CurrentFilterCondition === "Cheapest")
    return PriceTypes.INEXPENSIVE;
  if (model.value.CurrentFilterCondition === "MostPopular")
    return PriceTypes.FAVOURITE;
}

const filterConditions = {
  All: "همه محصولات",
  Newset: "جدید ترین",
  Cheapest: "ارزان ترین",
  MostExpensive: "گران ترین",
  MostPopular: "پرفروش ترین",
};

function changeSort(sort: keyof typeof filterConditions) {
  model.value.CurrentFilterCondition = sort;
}

const model = useState(
  "model",

  () => ({
    search: "",
    is_exists: false,
    has_discount: Boolean(
      router.currentRoute.value.query.has_discount ?? undefined
    ),
    CurrentFilterCondition: "MostExpensive",
    categories: [] as CategoryOutPutWithSelected[],
    brands: [] as BrandWithSelected[],
  })
);

// IF A ORDER BY PROPERTY HAS BEEN SET , SET THE FILTER CONDITION TO THAT
const order_by = parseInt(
  router.currentRoute.value.query.order_by?.toString() ?? "NaN"
);
if (order_by === PriceTypes.FAVOURITE) {
  model.value.CurrentFilterCondition = filterConditions.MostPopular;
}

/**
 * Computes the filter parameters to pass to the product API based on
 * the filter condition, search terms, and other filters set in the component's
 * reactive model.
 */

function populateFilterTypes() {
  const reactive = {} as ApiProductGetProductRetrieveParams & {
    offset: number;
    categories__in: string;
    labels__in: string;
  };
  const orderByValue = filterBasedOnPriceOrder();
  if (orderByValue) reactive.order_by = orderByValue;
  if (model.value.has_discount) reactive.has_discount = "True";
  if (model.value.is_exists) reactive.is_exists = "True";
  reactive.categories__in = model.value.categories
    .filter((cat) => cat.value)
    .map((el) => el.id)
    .join(",");

  reactive.labels__in = model.value.brands
    .filter((cat) => cat.value)
    .map((el) => el.id)
    .join(",");

  reactive.search = model.value.search;
  // reactive.product_type = baseCategoryType!;
  reactive.offset = current.value * limit.value - limit.value;

  return reactive;
}

const current = ref(1);
const limit = ref(10);
const max = ref(0);
const count = ref(0);

const filterTypes = ref();

// Just Flatlining The Response Into One Array
function recursiveWrapper(labels: CategoryOutPut[]) {
  const result: Label[] = [];
  function recursivelyFindAllChildrenElement(labels: any[]) {
    if (!labels || !labels.length) return;

    labels.forEach((el) => {
      const { children, ...rest } = el;
      result.push(rest);
      recursivelyFindAllChildrenElement(children);
    });
  }
  recursivelyFindAllChildrenElement(labels);
  return result;
}

function setUpBrandAndCategories(cats: CategoryOutPut[], brands: Brand[]) {
  const newBrands =
    brands?.map((el) => ({
      ...el,
      value: false,
    })) ?? [];

  const newCategories = recursiveWrapper(cats ?? []).map((el) => ({
    ...el,
    value: false,
  }));

  const index = cats.findIndex(
    (el) => el.id === +router.currentRoute.value.query.category_id!
  );

  if (index >= 0) {
    newCategories[index].value = true;
  }
  return {
    newBrands,
    newCategories,
  };
}

const {
  data: categoriesAndBrands,
  status: categoriesAndBrandsStatus,
  error: categoriesAndBrandsError,
} = useAsyncData(
  "categoriesAndBrands",
  async () => {
    try {
      // Fetch categories and brands
      const categories = (await apiProductCategoryListRetrieve(
        CategoryTypes.PRODUCT
      )) as unknown as CategoryOutPut[];

      const brands =
        (await apiProductBrandListRetrieve()) as unknown as Brand[];

      return {
        categories,
        brands,
      };
    } catch (error) {
      throw new Error("Failed to fetch categories and brands");
    }
  },
  {
    transform(data) {
      console.log(model.value);
      const { newCategories, newBrands } = setUpBrandAndCategories(
        data.categories,
        data.brands
      );
      model.value.categories = newCategories;
      model.value.brands = newBrands;
      console.log(model.value);

      return data;
    },
  }
);

const {
  data,
  refresh: refreshProducts,
  status,
} = useAsyncData("products", async () => {
  try {
    console.log("XOXO");
    return (await apiProductGetProductRetrieve(filterTypes.value)) as any;
  } catch (error) {
    throw new Error("bob");
  }
});

onMounted(() => {
  limit.value = data.value.limit;
  max.value = Math.ceil(data.value.count / limit.value);
  count.value = data.value.count;
  if (!data.value.count) {
    current.value = 0;
  }
  // setTimeout(() => {
  //   console.log(categoriesAndBrands.value);
  //   categoriesAndBrands.value = [];
  //   console.log(categoriesAndBrands.value);
  // }, 2000);
  // filterTypes.value = populateFilterTypes();

  // // setUpBrandAndCategories();

  // // console.log(limit.value, max.value, count.value);
});

const debounceFn = useDebounceFn(() => {
  refreshProducts();
}, 500);

function watcherComponent() {
  filterTypes.value = populateFilterTypes();
  debounceFn();
}

watch(current, watcherComponent);

watch(
  model,
  () => {
    console.log("WTF MODEL");
    watcherComponent();
  },
  { deep: true }
);

const visible = ref(false);
const visibleSortBy = ref(false);

function FilterButton() {
  return (
    <MyButton color="bg-white" class="flex justify-end flex-1 gap-2">
      <MyButtonSvg />

      <span class="text-sm md:text-lg"> فیلترها : </span>
    </MyButton>
  );
}
function SortButton() {
  return (
    <MyButton color="bg-white" class="flex justify-end flex-1 gap-2">
      <Icon name="mdi:filter-variant" class="text-lg" />

      <span class="text-sm md:text-lg"> مرتب سازی : </span>
    </MyButton>
  );
}
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
