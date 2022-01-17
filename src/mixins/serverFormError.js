import Errors from '../error';

export default {
  data() {
    return {
      errors: new Errors(),
      commonError: '',
    };
  },
  methods: {
    clearErrors() {
      this.errors = new Errors();
    },
    clearFieldError(fieldName) {
      this.errors.clear(fieldName);
    },
  },
};
