<template>
  <Card style="width: 25rem; overflow: hidden">
    <template #header>
      <img
        alt="user header"
        src="https://images.unsplash.com/photo-1720048171098-dba33b2c4806?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
      />
    </template>
    <template #title>Advanced Card</template>
    <template #subtitle>Card subtitle</template>
    <template #content>
      <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
        consequuntur error repudiandae numquam deserunt quisquam repellat libero
        asperiores earum nam nobis, culpa ratione quam perferendis esse,
        cupiditate neque quas!
      </p>
    </template>
    <template #footer>
      <div class="flex gap-4 mt-1">
        <Button label="Cancel" severity="secondary" outlined class="w-full" />
        <Button label="Save" class="w-full" />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts"></script>

<style scoped></style>
