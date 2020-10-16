<template>
<div>
    <b-row class="mt-5">
        <b-col cols="4"></b-col>
        <b-col cols="4">
            <b-card header="Confirmación de cuenta" header-bg-variant="primary" header-text-variant="white" border-variant="primary">
                <b-card-text>
                    <b-form>

                        <b-form-input id="userConfirm" v-model="user" type="text" required placeholder="Usuario" class="mb-3" />
                        <b-form-input id="codeConfirm" @keyup.enter.prevent="confirmUser" v-model="code" type="text" required placeholder="Código" />

                    </b-form>
                    <small><a href="/resendcode">Reenviar código</a></small>
                </b-card-text>
                <b-button variant="primary" @click.prevent="confirmUser">Confirmar</b-button>
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
    name: 'ConfirmSignUp',
    data() {
        return {
            user: '',
            code: ''
        }
    },
    methods: {
        async confirmUser() {
            try {
                await Auth.confirmSignUp(this.user, this.code);
                this.$router.push('/');
            } catch (error) {
                console.log('error confirming sign up', error);
            }
        }
    },
}
</script>
