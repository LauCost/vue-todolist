const vueApp = new Vue({

    el: "#data",

    data: {

        tasks: [

            "Studiare",
            "Fare esercizi",
            "Riposare",
            "Giocare"
        ]
    },

    methods: {

        deleteTask(i) {
            console.log(i);

            this.tasks.splice(i, 1)
        }
    }
})