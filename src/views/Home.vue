<template>
    <div>
        <vue-showdown :markdown="markdownData"/>
    </div>
</template>
<style>
    img{
        max-width: 80vw;
    }
</style>
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
                    .get(`https://raw.githubusercontent.com/Gaz492/FTB-FAQ/pages/client/tLog.md`)
                    .then(response => (this.markdownData = response.data))
            }
        }
    }
</script>
