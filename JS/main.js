const vueApp = new Vue({

    el: "#data",

    data: {

        newTasks: "",

        tasks: [

            "Studiare",
            "Fare esercizi",
            "Riposare",
            "Giocare"
        ]
    },

    methods: {

        deleteTask(i) {
            /* console.log(i); */

            this.tasks.splice(i, 1)
        },

        addNewTask() {

            /* console.log("Aggiungi task"); */

            this.tasks.push(this.newTasks)

            this.newTasks = ""
        }
    }
})