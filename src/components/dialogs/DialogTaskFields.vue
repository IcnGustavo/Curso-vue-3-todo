<template>
  <div class="text-center pa-4">
    <v-dialog v-model="taskStore.showDialogTaskFields" min-width="400" max-width="600">
      <v-card
        prepend-icon="mdi-map-marker"
        title="Edit task"
      >
        <v-text-field v-model="props.task.title" label="Title"></v-text-field>
        <v-text-field v-model="props.task.description" label="Description"></v-text-field>
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn color="#27fdfe" variant="elevated" @click="taskStore.updateTask()"> Ok </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>
import {ref} from "vue";
import { useTaskStore } from '@/stores/task';

const taskStore = useTaskStore();

const props = defineProps({
task: Object
});

</script>