<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div class="container">
        <router-link class="navbar-brand" to="/">{{ appName }}</router-link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Left Side Of Navbar -->
          <div class="left mr-auto">
            <ul class="navbar-nav" v-if="authenticated">
              <li class="nav-item">
                <router-link class="nav-link" to="/companies">Companies</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/employees">Employees</router-link>
              </li>
            </ul>
          </div>

          <ul class="navbar-nav ml-auto" v-if="!authenticated">
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
          </ul>

          <ul class="navbar-nav ml-auto" v-if="authenticated">
            <li class="nav-item">
              <button class="nav-link" @click="logout">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="py-4" style="height: 100vh">
      <router-view></router-view>
    </main>
</template>

<script>
import AuthService from './Services/Auth/AuthService.js';
export default {
  name: 'App',
  data() {
    return {
      appName: 'XCRM',
      authenticated: AuthService.isAuthenticated(),
      username: localStorage.getItem('username') || 'Guest'
    };
  },
  methods: {
    logout() {
      this.authenticated = false;
      AuthService.logout();
      window.location.href = '/login';
    }
  }
};

</script>

<style scoped>
/* Add your custom styles here */
</style>
