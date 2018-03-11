new Vue ({
    el : '#app',
    data: {
        message: 'Salut les gens',
        link: 'http://jerem.be',
        success: true,
        persons: ['Jérémy', 'Jonathan', 'Yves', 'Nicole', 'Krystelle'],
        cls: 'success'
    },
    methods: {
        close: function () {
            this.success = false
            this.message = 'fermé'
        },
        style: function () {
            if (this.success) {
                return { background: '#00FF00' }
            } else {
                return { background: '#FF0000' }
            }
        }
    }
})