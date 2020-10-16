<template>
<div>
    <b-navbar toggleable="md" type="dark" variant="primary">

        <b-container>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-navbar-brand href="#">Bienvenido {{userMessage}}</b-navbar-brand>
            <b-collapse id="nav-collapse" is-nav>

                <b-navbar-nav>
                    <b-nav-item :to="{name: 'Home'}">Inicio</b-nav-item>
                    <b-nav-item @click="userLogOut">Cerrar Sesión</b-nav-item>
                </b-navbar-nav>

            </b-collapse>

        </b-container>

    </b-navbar>
</div>
</template>

<script>
import {
    AmplifyEventBus
} from 'aws-amplify-vue'
import {
    Auth
} from 'aws-amplify'
import {
    mapMutations
} from 'vuex'

export default {
    name: 'NavbarTemplate',
    data() {
        return {
            userMessage: ''
        }
    },
    methods: {
        ...mapMutations(['userIsAuth']),
        async userLogOut() {
            try {
                await Auth.signOut();
                this.userIsAuth(false);
                this.$router.push('/');
            } catch (error) {
                console.log('error signing out: ', error);
            }
        }
    },
    async mounted() {
        const myUser = await Auth.currentUserInfo();
        console.log(myUser);
        this.userMessage = myUser.username;
    },
}
</script>
