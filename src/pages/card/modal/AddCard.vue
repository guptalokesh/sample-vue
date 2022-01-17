<template>
  <div role="dialog" class="modal modal-status fade in" style="display: block;">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header"><h4 class="m-0">Add Card</h4></div>
        <div class="modal-body p-3">
          <div class="weight-100 text-grey mb-1">
            <span class="d-flex flex-start align-items-initial size-12">
              <i aria-hidden="true" class="fa fa-lightbulb-o mr-1 size-14"></i>
              <em>Add all data related to card</em>
            </span>
          </div>
          <div class="form-group">
            <label>Card Holder Name</label>
            <input type="text" v-model="cardHolderName" :maxlength="100" class="form-control auto-expand"/>
            <span v-if="errors.has('name')" class="field-text text-danger">{{ errors.first('name') }}</span>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-default min-width-100 mr-1" @click.prevent="closeModal">Cancel</button>
          <button class="btn btn-primary min-width-100" :disabled="disableSave" @click.prevent="addCard">Save<i
              class="fa fa-circle-o-notch fa-w-16 fa-spin fa-lg ml-1" v-if="disableSave"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import Card from '../../../../services/goals';
import serverFormError from '../../../mixins/serverFormError';

export default {
  name: 'AddCard',
  mixins: [serverFormError],
  // props: {
  //   pageProgramId: String,
  // },
  data() {
    return {
      cardHolderName: '',
      disableSave: false,
    };
  },
  computed: {
  },
  methods: {
    addCard() {
      this.disableSave = true;
      // const data = {
      //   name: this.cardHolderName,
      // };
      // GoalsService.storeOutcome(this.pageProgramId, data)
      //     .then((response) => {
      //       this.$toasted.global.success_toast({ message: this.$i18n.t('OUTCOME_ADDED_SUCCESSFULLY') });
      //       this.disableSave = false;
      //       this.$emit('close-add-outcome', true);
      //     })
      //     .catch((err) => {
      //       this.disableSave = false;
      //       this.setErrors(err);
      //     });
    },
    closeModal() {
      this.$emit('close-add-outcome');
    },
  },
};
</script>

<style scoped>

</style>
