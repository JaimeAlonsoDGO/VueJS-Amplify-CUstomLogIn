<template>
<div>
    <b-row class="mt-5">
        <b-col cols="4"></b-col>
        <b-col cols="4">
            <b-card header="Crear nueva contraseña" header-bg-variant="primary" header-text-variant="white" border-variant="primary">
                <b-card-text>
                    <b-form>

                        <b-form-input id="userNewPassword" v-model="user" type="text" required placeholder=" Ingrese su Usuario" class="mb-3" />
                        <b-form-input id="newPassword" @keyup.enter.prevent="createNewPassword" v-model="password" class="mb-3" type="password" required placeholder="Ingrese su nueva contraseña" />
                        <b-form-input id="codeNewPassword" @keyup.enter.prevent="createNewPassword" v-model="code" type="text" required placeholder="Ingrese el código de confirmación" />

                    </b-form>
                </b-card-text>
                <b-button variant="primary" @click.prevent="createNewPassword">Crear nueva contraseña</b-button>
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
    name: 'NewPassword',
    data() {
        return {
            user: '',
            password: '',
            code: ''
        }
    },
    methods: {
        createNewPassword() {
            Auth.forgotPasswordSubmit(this.user, this.code, this.password)
                .then(data => {
                    this.$router.push('/');
                    console.log(data)
                })
                .catch(err => console.log(err));
        }
    },
}
</script>
