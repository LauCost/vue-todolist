const vueApp = new Vue({

    el: "#data",

    data: {

        newTasks: "",

        tasks: [

            "Studiare",
            "Fare esercizi",
            "Riposare",
            "Giocare"
        ],

        errore: false
    },

    methods: {

        deleteTask(i) {
            /* console.log(i); */

            this.tasks.splice(i, 1);
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