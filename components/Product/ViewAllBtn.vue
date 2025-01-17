<template>
  <MyButton color="bg-orange-400" class="w-full mt-auto gap-2" unstyled>
    <slot name="title"><span>مشاهده همه</span></slot>
    <span
      class="bg-gray-50 bg-opacity-30 items-center flex justify-center w-6 h-6 rounded-lg"
    >
      <slot name="icon"
        ><Icon name="mdi:arrow-top-left-thin" class="text-xl"
      /></slot>
    </span>
  </MyButton>
</template>
