<template>
  <div class="col-4 text-center">
    <div class="text-h1">{{ getScore }}</div>
    <div id="darts-left" class="q-pa-md">
      <div class="col">
        <svg
          v-if="get1stDart == '-'"
          width="40%"
          height="40%"
          viewBox="0 0 578 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 50L105 41.3397V58.6603L0 50Z" fill="black" />
          <path
            d="M105 42C105 39.2386 107.239 37 110 37H240C242.761 37 245 39.2386 245 42V58C245 60.7614 242.761 63 240 63H110C107.239 63 105 60.7614 105 58V42Z"
            fill="black"
          />
          <path d="M245 40H435V60H245V40Z" fill="black" />
          <path d="M503 0V50H578L553.989 0H503Z" fill="black" />
          <path d="M503 0V50H428L452.011 0H503Z" fill="black" />
          <path d="M503 100V50H578L560.082 100H503Z" fill="black" />
          <path d="M503 100V50H428L452.011 100H503Z" fill="black" />
        </svg>
        <div v-else class="text-h3">{{ get1stDart }}</div>
      </div>
      <div class="col">
        <svg
          v-if="get2ndDart == '-'"
          width="40%"
          height="40%"
          viewBox="0 0 578 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 50L105 41.3397V58.6603L0 50Z" fill="black" />
          <path
            d="M105 42C105 39.2386 107.239 37 110 37H240C242.761 37 245 39.2386 245 42V58C245 60.7614 242.761 63 240 63H110C107.239 63 105 60.7614 105 58V42Z"
            fill="black"
          />
          <path d="M245 40H435V60H245V40Z" fill="black" />
          <path d="M503 0V50H578L553.989 0H503Z" fill="black" />
          <path d="M503 0V50H428L452.011 0H503Z" fill="black" />
          <path d="M503 100V50H578L560.082 100H503Z" fill="black" />
          <path d="M503 100V50H428L452.011 100H503Z" fill="black" />
        </svg>
        <div v-else class="text-h3">{{ get2ndDart }}</div>
      </div>
      <div class="col">
        <svg
          v-if="get3rdDart == '-'"
          width="40%"
          height="40%"
          viewBox="0 0 578 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 50L105 41.3397V58.6603L0 50Z" fill="black" />
          <path
            d="M105 42C105 39.2386 107.239 37 110 37H240C242.761 37 245 39.2386 245 42V58C245 60.7614 242.761 63 240 63H110C107.239 63 105 60.7614 105 58V42Z"
            fill="black"
          />
          <path d="M245 40H435V60H245V40Z" fill="black" />
          <path d="M503 0V50H578L553.989 0H503Z" fill="black" />
          <path d="M503 0V50H428L452.011 0H503Z" fill="black" />
          <path d="M503 100V50H578L560.082 100H503Z" fill="black" />
          <path d="M503 100V50H428L452.011 100H503Z" fill="black" />
        </svg>
        <div v-else class="text-h3">{{ get3rdDart }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // スコア初期化
    this.$store.dispatch("settings/scoreInitAction");
  },
  computed: {
    getScore() {
      return this.$store.state.settings.score;
    },
    getDartsLeft() {
      return this.$store.state.settings.darts_left;
    },
    get1stDart() {
      return this.$store.state.settings.score_1st_dart;
    },
    get2ndDart() {
      return this.$store.state.settings.score_2nd_dart;
    },
    get3rdDart() {
      return this.$store.state.settings.score_3rd_dart;
    }
  }
};
</script>
