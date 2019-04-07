<template>

</template>

<script>
    import axios from 'axios'

    export default {
        data: () => ({
            markdownData: ''
        }),
        mounted() {
            this.getPage();
        },
        methods: {
            getPage: function (cat, page) {
                axios
                // .get(`https://raw.githubusercontent.com/Gaz492/FTB-FAQ/pages/client/tLog.md?t=${Date.now()}`)
                    .get(`/tLog.md`)
                    .then(response => (this.markdownData = response.data))
            }
        }
    }
</script>
