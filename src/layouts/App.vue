<template>
  <div class="wrapper">
    <the-header></the-header>
    <the-sidebar></the-sidebar>
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
    <the-footer></the-footer>
  </div>
</template>
<script>
import TheHeader from '../components/TheHeader.vue';
import TheFooter from '../components/TheFooter.vue';
import TheSidebar from '../components/TheSidebar.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
    TheSidebar,
  },
  data() {
    return {
    };
  },
  created() {
  },
  beforeDestroy() {
  },
  mounted() {
  },
  methods: {

  },
};
</script>
