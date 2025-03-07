<template>
  <v-toolbar color="#5b00fe">
    <v-btn icon="mdi-menu"></v-btn>
    <v-toolbar-title  color="#27fdfe">Tasks</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon="mdi-magnify"></v-btn>
  </v-toolbar>
  <v-list
    v-model:selected="settingsSelection"
    lines="three"
    select-strategy="leaf"
  >
    <v-list-subheader >Tasks</v-list-subheader>
    <v-list-item
      v-for="(task, index) in taskStore.tasks"
      :key="index"
      :value="index"
      @click="taskStore.toggleDoneTask(index)"
    >
      <template v-slot:prepend="{ }">
        <v-list-item-action start>
          <v-checkbox-btn :model-value="task.done"></v-checkbox-btn>
        </v-list-item-action>
      </template>

      <v-list-item-title>{{ task.title }}</v-list-item-title>
      <v-list-item-subtitle>{{ task.description }}</v-list-item-subtitle>

      <template v-slot:append>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn
              color="#27fdfe"
              icon="mdi-dots-vertical"
              variant="text"
              v-bind="props"
            >
            </v-btn>
          </template>
          <v-list>
            <v-list-item value="1" @click="taskStore.toggleEdit(index)">
              <v-list-item-title >Edit</v-list-item-title>
            </v-list-item>
            <v-list-item value="2" @click="taskStore.toggleDelete(index)">
              <v-list-item-title>Delete</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-list-item>
  </v-list>
  <DialogTaskFields
    :task="taskStore.tasks[taskStore.indexTaskSelected]"
  />

  <DialogDelete/>
</template>

<script setup>
// import { ref } from "vue";
import DialogTaskFields from "./dialogs/DialogTaskFields.vue";
import DialogDelete from "./dialogs/DialogDelete.vue";
import { useTaskStore } from '@/stores/task';
 
const taskStore = useTaskStore();
</script>