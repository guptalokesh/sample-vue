<template>
  <aside class="main-sidebar">
    <section class="sidebar">
      <ul class="sidebar-menu" data-widget="tree">
        <router-link tag="li" :to="{name: 'dashboard'}" active-class="">
          <a><i class="fa fa-home" aria-hidden="true"></i> <span>Home</span></a>
        </router-link>
        <router-link tag="li" :to="{name: 'cards.index'}" active-class="">
          <a><i class="fa fa-home" aria-hidden="true"></i> <span>Cards</span></a>
        </router-link>
        <router-link tag="li" :to="{name: 'cards.create'}" active-class="">
          <a><i class="fa fa-home" aria-hidden="true"></i> <span>Create</span></a>
        </router-link>
      </ul>
    </section>
  </aside>
</template>

<script>

export default {
  name: 'TheSidebar',
  data() {
    return {
      loggedInUser: null,
    };
  },
  created() {
  },
  methods: {
  },
};

</script>
