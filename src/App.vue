<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" fixed app clipped>
            <v-list dense>
                <v-list-group prepend-icon="home" no-action value="true">
                    <template v-slot:activator>
                        <v-list-tile>
                            <v-list-tile-content>
                                <v-list-tile-title>Client</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </template>

                    <v-tooltip right v-for="subItem in navData.client" :key="subItem.title">
                        <template v-slot:activator="{ on }">
                            <v-list-tile @click="" v-on="on">
                                <v-list-tile-content>
                                    <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </template>
                        <span>{{subItem.title}}</span>
                    </v-tooltip>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="indigo" dark app clipped-left>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Application</v-toolbar-title>
        </v-toolbar>
        <v-content>
            <v-container fluid>
                <router-view/>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import axios from 'axios'

    export default {
        data: () => ({
            drawer: null,
            navData: {},
        }),
        mounted() {
            axios
                .get(`https://raw.githubusercontent.com/Gaz492/FTB-FAQ/pages/content.json`)
                .then(response => (this.navData = response.data));
        },
    }
</script>
