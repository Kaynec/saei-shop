<template>
  <MyCard class="card overflow-x-auto whitespace-nowrap">
    <DataTable
      id="dt-responsive-table"
      :value="discount"
      tableStyle="min-width: 40rem"
    >
      <Column class="!font-[400]" header="شناسه تخفیف" field="id"></Column>
      <Column header="عنوان" field="title"></Column>
      <Column header="موضوع" field="description"></Column>
      <Column header="حداقل میزان سفارش" field="mimimum_amount"></Column>
      <Column header="مهلت استفاده از کد" field="end_time"></Column>
    </DataTable>
  </MyCard>
</template>

<script setup lang="ts">
const discount = ref([
  {
    id: 1,
    title: "تخفیف کالا به مبلغ ۱۰۰۰ تومان",
    description:
      "تخفیف کالا به مبلغ ۱۰۰۰ تومان در مورد هر کالای که به روز رسانی شده است",
    price: 100000,
    discount: 100000,
    mimimum_amount: 100000,
    start_time: "2022-01-01",
    end_time: "2022-01-31",
  },
  {
    id: 1,
    title: "تخفیف کالا به مبلغ ۱۰۰۰ تومان",
    description:
      "تخفیف کالا به مبلغ ۱۰۰۰ تومان در مورد هر کالای که به روز رسانی شده است",
    price: 100000,
    discount: 100000,
    mimimum_amount: 100000,
    start_time: "2022-01-01",
    end_time: "2022-01-31",
  },
  {
    id: 1,
    title: "تخفیف کالا به مبلغ ۱۰۰۰ تومان",
    description:
      "تخفیف کالا به مبلغ ۱۰۰۰ تومان در مورد هر کالای که به روز رسانی شده است",
    price: 100000,
    discount: 100000,
    mimimum_amount: 100000,
    start_time: "2022-01-01",
    end_time: "2022-01-31",
  },
  {
    id: 1,
    title: "تخفیف کالا به مبلغ ۱۰۰۰ تومان",
    description:
      "تخفیف کالا به مبلغ ۱۰۰۰ تومان در مورد هر کالای که به روز رسانی شده است",
    price: 100000,
    discount: 100000,
    mimimum_amount: 100000,
    start_time: "2022-01-01",
    end_time: "2022-01-31",
  },
  {
    id: 1,
    title: "تخفیف کالا به مبلغ ۱۰۰۰ تومان",
    description:
      "تخفیف کالا به مبلغ ۱۰۰۰ تومان در مورد هر کالای که به روز رسانی شده است",
    price: 100000,
    discount: 100000,
    mimimum_amount: 100000,
    start_time: "2022-01-01",
    end_time: "2022-01-31",
  },
  {
    id: 1,
    title: "تخفیف کالا به مبلغ ۱۰۰۰ تومان",
    description:
      "تخفیف کالا به مبلغ ۱۰۰۰ تومان در مورد هر کالای که به روز رسانی شده است",
    price: 100000,
    discount: 100000,
    mimimum_amount: 100000,
    start_time: "2022-01-01",
    end_time: "2022-01-31",
  },
  {
    id: 1,
    title: "تخفیف کالا به مبلغ ۱۰۰۰ تومان",
    description:
      "تخفیف کالا به مبلغ ۱۰۰۰ تومان در مورد هر کالای که به روز رسانی شده است",
    price: 100000,
    discount: 100000,
    mimimum_amount: 100000,
    start_time: "2022-01-01",
    end_time: "2022-01-31",
  },
]);
</script>
