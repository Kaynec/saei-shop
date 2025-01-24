<template>
  <div>
    <MyCard class="flex flex-col gap-3">
      <div class="flex-center">
        <span>فیلترها</span>
      </div>
      <InputText
        v-model="model.search"
        placeholder="جست جو محصول"
        class="z-3"
        style="border-radius: 0.5rem"
      >
        <Icon name="mdi-search" class="text-blue-9"></Icon>
      </InputText>

      <Divider />
      <Accordion :value="['0']" multiple>
        <AccordionPanel value="0">
          <AccordionHeader>دسته بندی</AccordionHeader>
          <AccordionContent>
            <div class="flex flex-col gap-2">
              <ClientOnly>
                <div
                  v-for="filter in model.categories"
                  :key="filter.name"
                  class="flex items-center gap-2"
                >
                  <Checkbox
                    :label="filter.name"
                    v-model="filter.value"
                    :value="true"
                    :id="filter.name"
                  />
                  <label :for="filter.name"> {{ filter.name }} </label>
                </div>
              </ClientOnly>
            </div>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel value="1">
          <AccordionHeader>برند</AccordionHeader>
          <AccordionContent>
            <div class="flex flex-col gap-2">
              <ClientOnly>
                <div
                  v-for="brand in model.brands"
                  :key="brand.name"
                  class="flex items-center gap-2"
                >
                  <Checkbox
                    :label="brand.name"
                    v-model="brand.value"
                    :id="brand.name"
                    :value="true"
                  />
                  <label :for="brand.name"> {{ brand.name }} </label>
                </div>
              </ClientOnly>
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
                  <img src="/Tooman.svg" alt="tooman svg" width="22" />
                </span>
              </div>
              <div class="flex justify-between">
                <span> تا </span>
                <span class="flex-center gap-2">
                  {{ priceRange?.[1] }}
                  <img src="/Tooman.svg" alt="tooman svg" width="22" />
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
          <ToggleSwitch v-model="model.is_exists" />
        </div>
      </div>
      <div class="flex flex-col my-lg">
        <div class="flex justify-between p-2">
          <label>فقط کالاهای تخفیف دار</label>
          <ToggleSwitch v-model="model.has_discount" />
        </div>
      </div>
    </MyCard>
  </div>
</template>

<script setup lang="ts">
import type { BrandWithSelected, CategoryOutPutWithSelected } from "~/types";

const priceRange = ref([0, 100]);

const emit = defineEmits(["close"]);

const model = defineModel<{
  search: string;
  is_exists?: boolean;
  has_discount?: boolean;
  categories?: CategoryOutPutWithSelected[];
  brands?: BrandWithSelected[];
  labelName?: string;
}>({ required: true });
</script>
