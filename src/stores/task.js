import { defineStore } from 'pinia'
import { useAlertStore } from '@/stores/alert'
const alertStore = useAlertStore();

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: [],
        titleTaskCreating: "",
        showDialogDelete: false,
        indexTaskSelected: 0,
        showDialogTaskFields: false
    }),
    actions: {
        addTask() {
            if(this.titleTaskCreating.length < 5 ) return;
            this.tasks.push({
                title: this.titleTaskCreating
            });
            this.titleTaskCreating = "";
            this.saveLocaldata();
            alertStore.notifyAlertCreated();
        },
        deleteTask() {
            this.tasks.splice(this.indexTaskSelected, 1)
            this.toggleDelete();
            this.saveLocaldata();
            alertStore.notifyAlertDeleted();
        },
        updateTask(){
            this.saveLocaldata();
            this.toggleEdit();
            alertStore.notifyAlertUpdated();
        },
        toggleEdit(index) {
            this.showDialogTaskFields = !this.showDialogTaskFields;
            if (index != null) this.indexTaskSelected = index;
        },
        toggleDelete(index) {
            this.showDialogDelete = !this.showDialogDelete;
            if (index != null) this.indexTaskSelected = index;
        },
        saveLocaldata() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
        },
        getTasks(){
            let items = localStorage.getItem('tasks')
            if(items)
                this.tasks = JSON.parse(items);
        },
        toggleDoneTask(index){
            this.tasks[index].done = !this.tasks[index].done;
            this.saveLocaldata();
        }
    }
})