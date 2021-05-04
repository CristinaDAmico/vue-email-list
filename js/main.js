/******************************
        VUE EMAIL LIST
******************************/


const app = new Vue({
    el: '#app',
    data: {
        mails: []
    },
    created() {
        this.getEmails();
    },
    methods: {
        getEmails() {
            // Gen 10 email
            for (let i = 0; i < 10; i++) {
                // Call API
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( result => {
                this.mails.push(result.data.response);
                })
            }
        },
    }
});