<template>
<div>
    <b-row class="mt-5">
        <b-col cols="4"></b-col>
        <b-col cols="4">
            <b-card header="Inicio de Sesión" header-bg-variant="primary" header-text-variant="white" border-variant="primary">
                <b-card-text>
                    <b-form>

                        <b-form-input id="userNameLogin" @keyup.enter.prevent="userLogin" v-model="user" type="text" required placeholder="Usuario" class="mb-3" />
                        <b-form-input id="passwordLogin" @keyup.enter.prevent="userLogin" v-model="password" type="password" required placeholder="Contraseña" />

                    </b-form>
                    <small class="text-danger d-block">{{loginFailed}}</small>
                    <small><a href="/forgot">¿Olvidaste tu contraseña?</a></small>
                </b-card-text>
                <b-button variant="primary" @click.prevent="userLogin">Iniciar Sesión</b-button>
            </b-card>
            <small><a href="/signup" class="text-align-center">¿No tienes cuenta? Crea una aqui</a></small>
        </b-col>
    </b-row>
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
    name: 'Login',
    data() {
        return {
            user: '',
            password: '',
            loginFailed: ''
        }
    },
    methods: {
        ...mapMutations(['userIsAuth']),
        async userLogin() {
            try {
                const user = await Auth.signIn(this.user, this.password);
                this.userIsAuth(true);
                this.$router.push('/home');
            } catch (error) {
                console.log('Ha ocurrido un error mientras te logeabas: ', error);
                this.loginFailed = 'Error en usuario o contraseña';
            }
        }
    },
    async mounted() {
        AmplifyEventBus.$on('authState', info => {
            if (info === 'signedIn') {
                this.$router.push('/home');
            } else {
                console.log('No se ha iniciado sesión');
            }
        });
    }
}
</script>
