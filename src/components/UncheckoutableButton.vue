<template>
  <q-btn
    v-show="useUncheckoutableNumbers"
    color="primary"
    label="Can't checkout"
    @click="cannot_checkout()"
  />
</template>

<script>
export default {
  methods: {
    // チェックアウト不可ボタンクリック時処理
    cannot_checkout() {
      this.$store.dispatch("settings/cannotCheckoutButtonAction");
    }
  },
  computed: {
    useUncheckoutableNumbers: {
      get() {
        return this.$store.state.settings.use_uncheckoutable_numbers;
      }
    }
  }
};
</script>
