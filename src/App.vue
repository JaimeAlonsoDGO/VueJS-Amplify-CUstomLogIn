<template>
<div id="app">
    <div v-if="signedIn">
        <nav-bar-template />
    </div>
    <b-container>
        <router-view />
    </b-container>
</div>
</template>

<script>
import {
    AmplifyEventBus
} from 'aws-amplify-vue'
import {
    Auth
} from 'aws-amplify'
import Login from './views/auth/Login.vue'
import NavBarTemplate from './components/Navbar.vue'
import {
    mapState,
    mapMutations
} from 'vuex'

export default {
    name: 'app',
    components: {
        Login,
        NavBarTemplate
    },
    computed: {
        ...mapState(['signedIn'])
    }
}
</script>
