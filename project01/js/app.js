new Vue ({
    el : '#app',
    data: {
        message: 'Salut les gens',
        link: 'http://jerem.be',
        cls: 'success',
        persons: ['Jérémy', 'Jonathan', 'Yves', 'Nicole', 'Krystelle']
    },
    methods: {
        close: function () {
            this.success = false
            this.message = 'fermé'
        }
    }
})