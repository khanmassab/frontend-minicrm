<template>
  <v-sheet width="300" height="100%" class="m-auto d-flex align-center">
    <v-form @submit="onSubmit" @reset="onReset"  fast-fail class="w-100">

      <v-text-field
        v-model="form.email"
        label="Email"
      ></v-text-field>

      <v-text-field
        v-model="form.password"
        label="Password"
        type="password"
      ></v-text-field>
      <v-sheet class="d-flex justify-space-around m-4">
        <v-btn type="reset" class="mt-2">Reset</v-btn>
        <v-btn type="submit" color="success" class="mt-2">Submit</v-btn>
      </v-sheet>
    </v-form>
  </v-sheet>
</template>

<script>
  import AuthService from '../../Services/Auth/AuthService.js';
  
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
        }
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        AuthService.login('post', 'auth/login', this.form);
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
      }
    }
  }
</script>