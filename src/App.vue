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

                <v-list-group prepend-icon="account_circle" value="true">
                    <template v-slot:activator>
                        <v-list-tile>
                            <v-list-tile-title>Client</v-list-tile-title>
                        </v-list-tile>
                    </template>

                    <v-list>
                        <v-list-tile v-for="item in navData.client" @click="">
                            <v-list-tile-content>
                                <v-list-tile-title>{{item.title}}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
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
            admins: [
                ['Management', 'people_outline'],
                ['Settings', 'settings']
            ],
            drawer: null,
            navData: null
        }),
        mounted() {
            axios
                .get(`https://raw.githubusercontent.com/Gaz492/FTB-FAQ/pages/content.json`)
                .then(response => (this.navData = response.data));
        },
    }
</script>
