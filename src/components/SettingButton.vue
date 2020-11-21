<template>
  <div>
    <q-btn
      label="Settings"
      icon="keyboard_arrow_down"
      color="primary"
      @click="open(position)"
    />

    <q-dialog v-model="dialog" :position="position">
      <q-card style="width: 350px">
        <q-card-section class="row items-center no-wrap">
          <div>
            <q-input
              v-model="minScore"
              label="Min"
              stack-label
              dense
              type="number"
              :error="!isValidMin"
              bottom-slots
              hint="> 0"
              error-message="Please set the value more than 0."
            />
          </div>
          <div>
            <q-input
              v-model="maxScore"
              label="Max"
              stack-label
              dense
              type="number"
              :error="!isValidMax"
              bottom-slots
              hint="<= 180"
              error-message="Please set the value less than 181."
            />
          </div>
        </q-card-section>
        <q-card-section class="items-center">
          <q-btn-toggle
            v-model="bullseyeRuleState"
            spread
            class="my-custom-toggle"
            no-caps
            rounded
            unelevated
            toggle-color="primary"
            color="white"
            text-color="primary"
            :options="[
              { label: 'Fat Bull', value: true },
              { label: 'Separate Bull', value: false }
            ]"
          />
        </q-card-section>
        <q-card-section class="row items-center">
          <q-toggle
            v-model="uncheckoutableNumberState"
            checked-icon="check"
            color="green"
            unchecked-icon="clear"
            label="Use un-checkoutable numbers"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      position: "top"
    };
  },
  methods: {
    open(position) {
      this.position = position;
      this.dialog = true;
    }
  },
  computed: {
    isValidMin() {
      return this.$store.state.settings.min_score > 0;
    },
    isValidMax() {
      return this.$store.state.settings.max_score <= 180;
    },
    uncheckoutableNumberState: {
      get() {
        return this.$store.state.settings.use_uncheckoutable_numbers;
      },
      set(val) {
        this.$store.commit("settings/updateUseUncheckoutableNumbersState", val);
      }
    },
    minScore: {
      get() {
        return this.$store.state.settings.min_score;
      },
      set(val) {
        this.$store.commit("settings/updateMinScore", val);
      }
    },
    maxScore: {
      get() {
        return this.$store.state.settings.max_score;
      },
      set(val) {
        this.$store.commit("settings/updateMaxScore", val);
      }
    },
    bullseyeRuleState: {
      get() {
        return this.$store.state.settings.is_fat_bull;
      },
      set(val) {
        this.$store.commit("settings/updateIsFatBull", val);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.my-custom-toggle {
  border: 1px solid #027be3;
}
</style>
