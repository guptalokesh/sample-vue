<template>
  <header class="main-header">
    <router-link :to="{name: 'dashboard'}" class="logo">
      <span data-toggle="tooltip" data-placement="right" :title="name">{{ name }}</span>
    </router-link>
    <nav class="navbar navbar-static-top" role="navigation">
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button" @click="sidebarCollapsed = !sidebarCollapsed">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <div class="header-left">
        <ol class="breadcrumb hide-mobile">
          <template>
            <li v-for="(breadcrumb, index) in breadcrumbList" :key="index" :class="{'dynamic-breadcrumb': breadcrumb.appended}">
              <router-link v-if="index!==breadcrumbList.length-1" :to="{name: breadcrumb.link}">{{ breadcrumb.name }}</router-link>
              <span v-else>{{ breadcrumb.name }}</span>
            </li>
          </template>
        </ol>
      </div>
    </nav>
  </header>
</template>

<script>
//import StorageService from '../services/storage';
import ServerFormError from '../mixins/serverFormError';

export default {
  name: 'TheHeader',
  components: {
  },
  mixins: [ServerFormError],
  props: {
  },
  data() {
    return {
      breadcrumbList: '',
      pageTitle: 'Rev79',
      name: `${process.env.VUE_APP_NAME}`,
      sidebarCollapsed: false,
    };
  },
  watch: {
  },
  computed: {
  },
  created() {
    this.breadcrumbList = this.$route.meta.breadcrumb;
    this.pageTitle = this.$route.meta.pageTitle;
  },
  mounted() {
  },
  beforeDestroy() {

  },
};

</script>
