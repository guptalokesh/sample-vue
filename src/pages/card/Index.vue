<template>
  <div class="">
    <section class="content-header">
      <div class="row mt-1">
        <div class="col-md-6">
          <button class="btn-no-style space-nowrap d-flex" @click.prevent="showAddCardModal">Add Card </button>
        </div>
    </div>
    </section>
    <add-card v-if="showAddCard" @close-add-outcome="hideAddCardModal"></add-card>
    <div>{{ allCards }}</div>
  </div>

</template>

<script>
import addCard from "./modal/AddCard";
export default {
  name: "List",
  components: {
    addCard
  },
  data (){
    return {
      showAddCard:false
    }
  },
  computed:{
    allCards() {
      return this.$store.getters['cards/getCards'];
    },
  },
  methods:{
    showAddCardModal(){
      this.showAddCard = true;
    },
    hideAddCardModal(){
      this.showAddCard = false;
    }
  },
  created() {
    this.$store.dispatch('cards/fetchCards');
  }
}
</script>

<style scoped>

</style>