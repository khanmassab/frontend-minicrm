<template>
        <v-table
        fixed-header
            class="w-50 mx-auto"
        >
      <thead>
        <tr>
          <th>
            Company
          </th>
          <th>
            Email
          </th>
          <th>
            Website
          </th>
          <th class="text-center">
            Logo
          </th>
          <th class="text-center">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="company in companies"
          :key="company.id"
        >
          <td>{{ company.name }}</td>
          <td>{{ company.email }}</td>
          <td><a :href="'//' + company.website" v-if=company.website  target="_blank">{{company.website}}</a></td>
          <td><a :href=company.logo v-if=company.logo  target="_blank"><v-img class="my-1"
                    :width="100"
                    aspect-ratio="1/1"
                    cover
                    :src="company.logo"
                    ></v-img></a>
          </td>
          <td>
            <div class="mx-4 d-flex justify-space-between">
                <v-btn @click="viewCompany(company.id)" color="primary" dark v-bind="props" size="small" > View </v-btn>
                <v-btn color="secondary" size="small">Edit</v-btn>
                <v-btn type="button" color="red" size="small">Delete</v-btn> 
            </div>
        </td>
        </tr>
      </tbody>
    </v-table>
  </template>
  <script>
    import Companies from '../../Services/Admin/Companies.js';

    export default {
      data () {
        return {
          companies: ''
        }
      },
      async created() {
        const companies = await Companies.getCompnaies('get', 'company');
        this.companies = companies;
    }
    }
  </script>

<style scoped>
    th{
        text-align: center;
    }
</style>