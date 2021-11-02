const vueApp = new Vue({

    el: "#data",

    data: {

        newTasks: "",

        //Array vuoto per le task cancellate
        tasksDeleted: [],

        //Array vuoto per le task completate
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

        //Funzione per assegnare le tasks completate all suo array 
        taskComplite(i) {

            this.tasksComplete.push(this.tasks[i]);

            this.tasks.splice(i, 1);

        },

        //Funzione per assegnare le tasks eliminate all suo array
        deleteTask(i) {
            /* console.log(i); */

            this.tasksDeleted.push(this.tasks[i]);

            this.tasks.splice(i, 1);


        },

        //Funzione per eliminare una task specifica dal cestino
        elimina(i) {

            this.tasksDeleted.splice(i, 1);
        },

        //Funzione per eliminare tutte le task insieme dal cestino
        deleteAll() {

            this.tasksDeleted = [];
        },

        //Funzione per riassegniare la task completata all'array delle tasks da svolgere
        ritorna(i) {

            this.tasks.push(this.tasksComplete[i]);

            this.tasksComplete.splice(i, 1);

        },

        //Funzione che aggiunge una nuova task all'array tasks
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