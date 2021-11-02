const vueApp = new Vue({

    el: "#data",

    data: {

        newTasks: "",

        tasksDeleted: [],

        tasksComplete: [],

        tasks: [

            "Studiare",
            "Fare esercizi",
            "Riposare",
            "Giocare"
        ],

        errore: false,

    },

    methods: {

        taskComplite(i) {

            this.tasksComplete.push(this.tasks[i]);

            this.tasks.splice(i, 1);

        },

        deleteTask(i) {
            /* console.log(i); */

            this.tasksDeleted.push(this.tasks[i]);

            this.tasks.splice(i, 1);


        },

        elimina(i) {

            this.tasksDeleted.splice(i, 1);
        },

        deleteAll() {

            this.tasksDeleted = [];
        },

        ritorna(i) {

            this.tasks.push(this.tasksComplete[i]);

            this.tasksComplete.splice(i, 1);

        },

        addNewTask() {

            /* console.log("Aggiungi task"); */

            if (this.newTasks != '' && this.newTasks.length > 5) {

                this.tasks.push(this.newTasks);

                this.errore = false;
            } else {

                this.errore = true;

            }

            this.newTasks = "";

        }
    }
})