<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex xs10 offset-xs1 class="white pa-3">
                <vue-showdown :markdown="markdownData" :extensions="['imgExt']"/>
            </v-flex>
        </v-layout>

    </v-container>
</template>
<style>
    .img-fluid {
        max-width: 100%;
        height: auto;
    }
    img {
        padding-bottom: 20px;
    }
    img {
        vertical-align: middle;
        border-style: none;
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
                // .get(`https://raw.githubusercontent.com/Gaz492/FTB-FAQ/pages/client/tLog.md?t=${Date.now()}`)
                    .get(`/tLog.md`)
                    .then(response => (this.markdownData = response.data))
            }
        }
    }
</script>
