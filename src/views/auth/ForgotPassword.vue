<template>
<div>
    <b-row class="mt-5">
        <b-col cols="4"></b-col>
        <b-col cols="4">
            <b-card header="Olvidé mi contraseña" header-bg-variant="primary" header-text-variant="white" border-variant="primary">
                <b-card-text>
                    <b-form>

                        <b-form-input id="userForgot" v-model="user" @keyup.enter.prevent="forgotPassword" type="text" required placeholder="Ingrese su Usuario" class="mb-3" />

                    </b-form>
                </b-card-text>
                <b-button variant="primary" @click.prevent="forgotPassword">Confirmar</b-button>
            </b-card>
            <small><a href="/" class="text-align-center">¿Ya tienes cuenta? Inicia aquí</a></small>
        </b-col>
    </b-row>
</div>
</template>

<script>
import {
    Auth
} from 'aws-amplify'

export default {
    name: 'ForgotPassword',
    data() {
        return {
            user: ''
        }
    },
    methods: {
        forgotPassword() {
            Auth.forgotPassword(this.user)
                .then(data => {
                    console.log(data)
                    this.$router.push('/newpassword');
                })
                .catch(err => console.log(err));
        }
    },
}
</script>
