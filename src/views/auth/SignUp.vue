<template>
<div>
    <b-row class="mt-5">
        <b-col cols="4"></b-col>
        <b-col cols="4">
            <b-card header="Nuevo Usuario" header-bg-variant="primary" header-text-variant="white" border-variant="primary">
                <b-card-text>
                    <b-form>

                        <b-form-input id="userNameSignUp" v-model="user" type="text" required placeholder="Usuario" class="mb-3" />
                        <b-form-input id="passwordSignUp" @keyup.enter.prevent="userSignUp" v-model="password" class="mb-3" type="password" required placeholder="Contraseña" />
                        <b-form-input id="emailSignUp" @keyup.enter.prevent="userSignUp" v-model="email" type="email" required placeholder="Correo Electrónico" />

                    </b-form>
                </b-card-text>
                <b-button variant="primary" @click.prevent="userSignUp">Crear cuenta</b-button>
            </b-card>
            <small><a href="/" class="text-align-center">¿Ya tienes cuenta? Ingresa aquí</a></small>
        </b-col>
    </b-row>
</div>
</template>

<script>
import {
    Auth
} from 'aws-amplify'

export default {
    name: 'SignUp',
    data() {
        return {
            user: '',
            password: '',
            email: ''
        }
    },
    methods: {
        async userSignUp() {
            try {
                const user = await Auth.signUp({
                    username: this.user,
                    password: this.password,
                    attributes: {
                        email: this.email,
                    }
                });
                console.log(user);
                this.$router.push('/confirmuser');
            } catch (error) {
                console.log('error signing up:', error);
            }
        }
    },
}
</script>
