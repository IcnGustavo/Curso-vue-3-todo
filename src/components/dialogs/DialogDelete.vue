<template>
  <div class="text-center pa-4">
    <v-dialog v-model="taskStore.showDialogDelete" max-width="400" persistent>
      <v-card title="Delete task" text="Do you really want delete this task?">
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn color="#27fdfe" variant="elevated" @click="taskStore.toggleDelete"> No </v-btn>

          <v-btn color="#27fdfe" variant="outlined" @click="taskStore.deleteTask"> Yes </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>
import { useTaskStore } from '@/stores/task';
 
const taskStore = useTaskStore();
</script>