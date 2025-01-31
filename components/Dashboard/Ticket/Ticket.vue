<template>
  <div>
    <Transition
      enter-active-class="duration-100"
      enter-from-class="opacity-0"
      enter-to-class="opacity-1"
      leave-active-class="duration-100"
      leave-from-class="opacity-1"
      leave-to-class="opacity-0"
    >
      <component
        @change="toggle()"
        :is="currentTicket == 'list' ? TicketList : NewTicket"
      />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import NewTicket from "./NewTicket.vue";
import TicketList from "./TicketList.vue";

const currentTicket = ref<"list" | "new">("list");
function toggle() {
  console.log("XO XO");
  if (currentTicket.value == "list") {
    currentTicket.value = "new";
  } else {
    currentTicket.value = "list";
  }
}
</script>
