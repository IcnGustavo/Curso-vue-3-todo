<template>
  <v-text-field
    clearable
    label="Add Task"
    :rules="rules"
    v-model="taskStore.titleTaskCreating"
    @keyup.enter="taskStore.addTask"
  ></v-text-field>

  <ListingTasks />
</template>


<script setup>
import { onMounted } from "vue";
import ListingTasks from "@/components/ListingTasks.vue";
import { useTaskStore } from "@/stores/task";

const taskStore = useTaskStore();
const rules = [
  (value) => {
    if (!value || value.length >= 5) return true;
    return "You must enter a Task title with more than 5 characters.";
  },
];

onMounted(() => {
  taskStore.getTasks();
});
</script>
