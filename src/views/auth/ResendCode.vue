<template>
<div>
    <b-row class="mt-5">
        <b-col cols="4"></b-col>
        <b-col cols="4">
            <b-card header="Reenviar código de confirmación" header-bg-variant="primary" header-text-variant="white" border-variant="primary">
                <b-card-text>
                    <b-form>

                        <b-form-input id="userResend" v-model="user" @keyup.enter.prevent="resendCode" type="text" required placeholder="Usuario" class="mb-3" />

                    </b-form>
                </b-card-text>
                <b-button variant="primary" @click.prevent="resendCode">Confirmar</b-button>
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
    name: 'ResendCode',
    data() {
        return {
            user: ''
        }
    },
    methods: {
        async resendCode() {
            try {
                await Auth.resendSignUp(this.user);
                this.$router.push('/confirmuser');
            } catch (err) {
                console.log('error resending code: ', err);
            }
        }
    },
}
</script>
