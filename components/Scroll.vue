<template>
  <ScrollPanel
    style="width: 100%"
    class="max-h-[clamp(360px,30rem,620px)] pe-4 !overscroll-contain"
    :dt="{
      bar: {
        background: 'grey',
        width: '4px',
      },
    }"
  >
    <slot></slot>
  </ScrollPanel>
</template>
