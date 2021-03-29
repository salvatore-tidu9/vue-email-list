var app = new Vue({

    el: "#root",

    data: {

        emailList: []
    },

    mounted() {

        for (let index = 0; index < 10; index++) {

            axios

            .get("https://flynn.boolean.careers/exercises/api/random/mail")

            .then((result) => {

                this.email = result.data.response;

                this.emailList.push(this.email);

            })

        }

    }

});
        



Vue.config.devtools = true;