<template>
  <q-page class="flex column">
    <!-- 縦画面配置 -->
    <div class="orientation-portrait">
      <setting-button class="column"></setting-button>

      <div class="text-center">
        <score-board></score-board>

        <!-- チェックアウト不可ボタン -->
        <uncheckoutable-button></uncheckoutable-button>

        <darts-board class="fixed-bottom text-center"></darts-board>
      </div>
    </div>

    <!-- 横画面配置 -->
    <div class="orientation-landscape">
      <!-- Settings -->
      <setting-button class="column"></setting-button>

      <div class="row">
        <div class="col-4 text-center">
          <score-board></score-board>

          <!-- チェックアウト不可ボタン -->
          <uncheckoutable-button></uncheckoutable-button>
        </div>

        <darts-board class="col-8 text-center"></darts-board>
      </div>
    </div>
  </q-page>
</template>

<script>
import Platform from "quasar";

import SettingButton from "../components/SettingButton";
import ScoreBoard from "../components/ScoreBoard";
import DartsBoard from "../components/DartsBoard";
import UncheckoutableButton from "../components/UncheckoutableButton";

export default {
  components: {
    SettingButton,
    ScoreBoard,
    DartsBoard,
    UncheckoutableButton
  },
  name: "PageIndex"
};
</script>
