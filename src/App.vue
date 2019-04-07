<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" fixed app clipped>
            <v-list>
                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>Home</v-list-tile-title>
                </v-list-tile>

                <v-list-group prepend-icon="account_circle" value="true" v-for="clientMenu in navData" :key="clientMenu.id">
                    <template v-slot:activator>
                        <v-list-tile>
                            <v-list-tile-title>{{clientMenu.title}}</v-list-tile-title>
                        </v-list-tile>
                    </template>
                    <v-list-group no-action sub-group value="true" v-if="subMenu.items.length > 0" v-for="subMenu in clientMenu.subItems" :key="subMenu.id">
                        <template v-slot:activator>
                            <v-list-tile>
                                <v-list-tile-title>{{subMenu.title}}</v-list-tile-title>
                            </v-list-tile>
                        </template>

                        <v-list-tile v-for="subItems in subMenu.items" :key="subItems.id" @click="selectTopic(`${clientMenu.id}/${subItems.fileName}`)">
                            <v-list-tile-title v-text="subItems.title"></v-list-tile-title>
                        </v-list-tile>
                    </v-list-group>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="indigo" dark app clipped-left>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>FTB FAQ</v-toolbar-title>
        </v-toolbar>
        <v-content>
            <v-container fluid>
                <v-container grid-list-md>
                    <v-layout row wrap>
                        <v-flex xs10 offset-xs1 class="white pa-3">
                            <vue-showdown :markdown="markdownData" :extensions="['imgExt']"/>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-container>
        </v-content>
    </v-app>
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
            drawer: null,
            navData: {},
            markdownData: ''
        }),
        mounted() {
            axios
                .get(`https://gaz492.github.io/FTB-FAQ/content.json`)
                .then(response => (this.navData = response.data));

            this.selectTopic('index')
        },
        methods: {
            selectTopic(page) {
                axios
                    .get(`https://gaz492.github.io/FTB-FAQ/${page}.md?t=${Date.now()}`)
                    .then(response => (this.markdownData = response.data))
                    .catch((err) => {
                        console.log(err)
                    })
            }
        }
    }
</script>
