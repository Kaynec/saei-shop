<template>
  <section class="gap-2">
    <MyCard
      class="card overflow-x-auto whitespace-nowrap col-span-full lg:col-span-6"
    >
      <div class="flex justify-between items-center">
        <div class="flex-center">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="5" fill="#FAFAFA" />
            <path
              d="M34 19.4297V25.4297C34 26.9297 33.5 28.1797 32.62 29.0597C31.75 29.9297 30.5 30.4297 29 30.4297V32.5597C29 33.3597 28.11 33.8397 27.45 33.3997L23 30.4297H20.88C20.96 30.1297 21 29.8197 21 29.4997C21 28.4797 20.61 27.5397 19.97 26.8297C19.25 26.0097 18.18 25.4997 17 25.4997C15.88 25.4997 14.86 25.9597 14.13 26.7097C14.04 26.3097 14 25.8797 14 25.4297V19.4297C14 16.4297 16 14.4297 19 14.4297H29C32 14.4297 34 16.4297 34 19.4297Z"
              stroke="#575757"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 29.5C21 29.82 20.96 30.13 20.88 30.43C20.79 30.83 20.63 31.22 20.42 31.56C19.73 32.72 18.46 33.5 17 33.5C15.97 33.5 15.04 33.11 14.34 32.47C14.04 32.21 13.78 31.9 13.58 31.56C13.21 30.96 13 30.25 13 29.5C13 28.42 13.43 27.43 14.13 26.71C14.86 25.96 15.88 25.5 17 25.5C18.18 25.5 19.25 26.01 19.97 26.83C20.61 27.54 21 28.48 21 29.5Z"
              stroke="#575757"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.4897 29.4795H15.5098"
              stroke="#575757"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17 28.0195V31.0095"
              stroke="#575757"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.5 22.5H27.5"
              stroke="#575757"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span> ثبت تیکت جدید </span>
        </div>

        <button @click="$emit('change')">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="5" fill="#FAFAFA" />
            <path
              d="M26.9998 31.9201L20.4798 25.4001C19.7098 24.6301 19.7098 23.3701 20.4798 22.6001L26.9998 16.0801"
              stroke="#575757"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <Divider />

      <div class="grid grid-cols-12 items-start px-8 gap-8">
        <div class="col-span-full lg:col-span-6 space-y-3">
          <p>موضوع تیکتی را که می خواهید ثبت کنید را انتخاب کنید.</p>
          <MyButton
            v-for="i in cardData"
            color="bg-bgColor"
            class="w-full text-sm bg-opacity-50 p-4 flex !justify-start gap-6 lg:max-w-sm rounded-xl shadow"
          >
            <span v-html="i.svg"></span>
            <div class="text-start">
              <p class="font-semibold">{{ i.title }}</p>
              <p>{{ i.text }}</p>
            </div>
          </MyButton>
        </div>
        <form @submit.prevent="" class="col-span-full lg:col-span-6 space-y-4">
          <IftaLabel class="col-span-6 md:col-span-4">
            <InputText class="my-input" variant="outlined" />
            <label>عنوان</label>
          </IftaLabel>
          <IftaLabel class="col-span-6 md:col-span-4">
            <Textarea rows="6" class="my-input" variant="outlined" />
            <label>توضیحات</label>
          </IftaLabel>

          <MyButton color="bg-primary-500" class="w-full text-white">
            ثبت تیکت
          </MyButton>
        </form>
      </div>
    </MyCard>
  </section>
</template>

<script setup lang="ts">
const cardData = ref([
  {
    svg: `<svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.6673 29.9997C22.956 29.9997 24.0007 28.955 24.0007 27.6663C24.0007 26.3777 22.956 25.333 21.6673 25.333C20.3787 25.333 19.334 26.3777 19.334 27.6663C19.334 28.955 20.3787 29.9997 21.6673 29.9997Z"
                fill="#575757"
              />
              <path
                d="M10.9993 29.9997C12.288 29.9997 13.3327 28.955 13.3327 27.6663C13.3327 26.3777 12.288 25.333 10.9993 25.333C9.71068 25.333 8.66602 26.3777 8.66602 27.6663C8.66602 28.955 9.71068 29.9997 10.9993 29.9997Z"
                fill="#575757"
              />
              <path
                opacity="0.4"
                d="M6.45268 5.25366L6.18602 8.52032C6.13268 9.14699 6.62602 9.66699 7.25269 9.66699H27.666C28.226 9.66699 28.6927 9.24032 28.7327 8.68032C28.906 6.32032 27.106 4.40033 24.746 4.40033H8.38601C8.25267 3.81366 7.98601 3.25365 7.57267 2.78699C6.91934 2.08032 5.98602 1.66699 5.02602 1.66699H2.66602C2.11935 1.66699 1.66602 2.12033 1.66602 2.66699C1.66602 3.21366 2.11935 3.66699 2.66602 3.66699H4.98602C5.39936 3.66699 5.78602 3.84033 6.06602 4.13367C6.34602 4.44033 6.47934 4.84033 6.45268 5.25366Z"
                fill="#757575"
              />
              <path
                d="M27.3474 11.667H6.89406C6.33406 11.667 5.88072 12.0937 5.82739 12.6403L5.34739 18.4403C5.16072 20.707 6.94739 22.667 9.22739 22.667H24.0541C26.0541 22.667 27.8141 21.027 27.9607 19.027L28.4007 12.8003C28.4541 12.187 27.9741 11.667 27.3474 11.667Z"
                fill="#575757"
              />
            </svg>`,
    title: "فرآیند خرید",
    text: "مشکلات در فرآیند خرید محصولات",
  },
  {
    svg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.3327 29.333H3.66602C3.11935 29.333 2.66602 28.8797 2.66602 28.333C2.66602 27.7863 3.11935 27.333 3.66602 27.333H28.3327C28.8794 27.333 29.3327 27.7863 29.3327 28.333C29.3327 28.8797 28.8794 29.333 28.3327 29.333Z" fill="#292D32"/>
<path opacity="0.4" d="M27.4551 18.2663L17.8151 27.9063C15.9218 29.7996 12.8685 29.7996 10.9885 27.9196L4.8418 21.773L21.3218 5.29297L27.4685 11.4396C29.3485 13.3196 29.3485 16.373 27.4551 18.2663Z" fill="#575757"/>
<path d="M21.3201 5.29355L4.82675 21.7735L3.61342 20.5602C1.73342 18.6802 1.73342 15.6269 3.62675 13.7335L13.2667 4.09355C15.1601 2.20021 18.2134 2.20021 20.0934 4.08021L21.3201 5.29355Z" fill="#757575"/>
<path d="M17.1864 23.4665L15.3864 25.2665C15.0131 25.6398 14.4131 25.6398 14.0398 25.2665C13.6664 24.8932 13.6664 24.2932 14.0398 23.9198L15.8398 22.1198C16.2131 21.7465 16.8131 21.7465 17.1864 22.1198C17.5598 22.4932 17.5598 23.0932 17.1864 23.4665Z" fill="#575757"/>
<path d="M23.0258 17.6267L19.4392 21.2133C19.0658 21.5867 18.4658 21.5867 18.0925 21.2133C17.7192 20.84 17.7192 20.24 18.0925 19.8667L21.6792 16.28C22.0525 15.9067 22.6525 15.9067 23.0258 16.28C23.3858 16.6533 23.3858 17.2533 23.0258 17.6267Z" fill="#292D32"/>
</svg>
`,
    title: "حساب بانکی",
    text: "مشکلات در فرآیند افزودن حساب های بانکی",
  },
  {
    svg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M26.3875 5.62676C22.4408 1.69342 16.0408 1.69342 12.1208 5.62676C9.36085 8.36009 8.53418 12.2934 9.60085 15.7601L3.33418 22.0268C2.89418 22.4801 2.58751 23.3734 2.68085 24.0134L3.08085 26.9201C3.22751 27.8801 4.12085 28.7868 5.08085 28.9201L7.98751 29.3201C8.62751 29.4134 9.52085 29.1201 9.97418 28.6534L11.0675 27.5601C11.3342 27.3068 11.3342 26.8801 11.0675 26.6134L8.48085 24.0268C8.09418 23.6401 8.09418 23.0001 8.48085 22.6134C8.86751 22.2268 9.50751 22.2268 9.89418 22.6134L12.4942 25.2134C12.7475 25.4668 13.1742 25.4668 13.4275 25.2134L16.2542 22.4001C19.7075 23.4801 23.6408 22.6401 26.3875 19.9068C30.3208 15.9734 30.3208 9.56009 26.3875 5.62676ZM19.3342 16.0001C17.4942 16.0001 16.0008 14.5068 16.0008 12.6668C16.0008 10.8268 17.4942 9.33342 19.3342 9.33342C21.1742 9.33342 22.6675 10.8268 22.6675 12.6668C22.6675 14.5068 21.1742 16.0001 19.3342 16.0001Z" fill="#292D32"/>
<path d="M19.3333 15.9997C21.1743 15.9997 22.6667 14.5073 22.6667 12.6663C22.6667 10.8254 21.1743 9.33301 19.3333 9.33301C17.4924 9.33301 16 10.8254 16 12.6663C16 14.5073 17.4924 15.9997 19.3333 15.9997Z" fill="#575757"/>
</svg>
`,
    title: "رمز عبور",
    text: "مشکلات در فرآیند تغیر رمز عبور",
  },
  {
    svg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M24.054 18.0663C23.494 18.613 23.174 19.3997 23.254 20.2397C23.374 21.6797 24.694 22.733 26.134 22.733H28.6673V24.3197C28.6673 27.0797 26.414 29.333 23.654 29.333H8.34732C5.58732 29.333 3.33398 27.0797 3.33398 24.3197V15.3464C3.33398 12.5864 5.58732 10.333 8.34732 10.333H23.654C26.414 10.333 28.6673 12.5864 28.6673 15.3464V17.2664H25.974C25.2273 17.2664 24.5473 17.5597 24.054 18.0663Z" fill="#575757"/>
<path d="M19.8007 5.26585V10.3325H8.34732C5.58732 10.3325 3.33398 12.5859 3.33398 15.3459V10.4525C3.33398 8.86587 4.30732 7.45248 5.78732 6.89248L16.374 2.89248C18.0273 2.27915 19.8007 3.49252 19.8007 5.26585Z" fill="#575757"/>
<path d="M30.081 18.6265V21.3733C30.081 22.1066 29.4944 22.7066 28.7477 22.7332H26.1344C24.6944 22.7332 23.3744 21.6799 23.2544 20.2399C23.1744 19.3999 23.4944 18.6132 24.0544 18.0666C24.5477 17.5599 25.2277 17.2666 25.9744 17.2666H28.7477C29.4944 17.2933 30.081 17.8932 30.081 18.6265Z" fill="#757575"/>
<path d="M18.6673 17H9.33398C8.78732 17 8.33398 16.5467 8.33398 16C8.33398 15.4533 8.78732 15 9.33398 15H18.6673C19.214 15 19.6673 15.4533 19.6673 16C19.6673 16.5467 19.214 17 18.6673 17Z" fill="#575757"/>
</svg>
`,
    title: "پرداخت",
    text: "مشکلات در فرآیند پرداخت هزینه",
  },
  {
    svg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M15.9993 29.3337C23.3631 29.3337 29.3327 23.3641 29.3327 16.0003C29.3327 8.63653 23.3631 2.66699 15.9993 2.66699C8.63555 2.66699 2.66602 8.63653 2.66602 16.0003C2.66602 23.3641 8.63555 29.3337 15.9993 29.3337Z" fill="#292D32"/>
<path d="M15.9993 17.3337C15.2527 17.3337 14.666 16.7337 14.666 16.0003C14.666 15.267 15.266 14.667 15.9993 14.667C16.7327 14.667 17.3327 15.267 17.3327 16.0003C17.3327 16.7337 16.746 17.3337 15.9993 17.3337Z" fill="#575757"/>
<path d="M21.3333 17.3337C20.5867 17.3337 20 16.7337 20 16.0003C20 15.267 20.6 14.667 21.3333 14.667C22.0667 14.667 22.6667 15.267 22.6667 16.0003C22.6667 16.7337 22.08 17.3337 21.3333 17.3337Z" fill="#575757"/>
<path d="M10.6673 17.3337C9.92065 17.3337 9.33398 16.7337 9.33398 16.0003C9.33398 15.267 9.93398 14.667 10.6673 14.667C11.4007 14.667 12.0007 15.267 12.0007 16.0003C12.0007 16.7337 11.414 17.3337 10.6673 17.3337Z" fill="#292D32"/>
</svg>
`,
    title: "موارد دیگر",
    text: "مشکلاتی که در موضوعات بالا نیست",
  },
]);
</script>
