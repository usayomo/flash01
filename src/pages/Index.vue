<template>
  <q-page class="flex column">
    <!-- Settings -->
    <setting-button class="flex column"></setting-button>

    <div class="row">
      <div class="col-4 text-center">
        <score-board></score-board>

        <!-- チェックアウト不可ボタン -->
        <q-btn
          v-show="useUncheckoutableNumbers"
          color="primary"
          label="Can't checkout"
          @click="cannot_checkout()"
        />
      </div>

      <darts-board class="col-8 text-center board-container"></darts-board>
    </div>
  </q-page>
</template>

<script>
import SettingButton from "../components/SettingButton";
import ScoreBoard from "../components/ScoreBoard";
import DartsBoard from "../components/DartsBoard";

export default {
  components: { SettingButton, ScoreBoard, DartsBoard },
  name: "PageIndex",
  data() {
    return {};
  },
  mounted() {
    // スコア初期化
    this.$store.dispatch("settings/scoreInitAction");
  },
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
