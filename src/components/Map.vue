<template>
  <div class="map">
    <div
      class="map__container"
      :class="{
        'map__container--open': this.$store.state.isMapOpen === true,
      }"
    >
      <h6 class="map__title">GMap here</h6>

      <button
        class="map__button"
        :class="{
          'map__button--open': this.$store.state.isMapOpen === true,
        }"
        @click="toggleMap"
      >
        <div>
          {{ this.$store.state.isMapOpen === true ? 'Hide' : 'Show' }}
          the map
        </div>
        <div class="button__arrow">
          <svg
            width="12"
            height="6"
            viewBox="0 0 12 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 7L7 1L13 7" stroke="white" />
          </svg>
          <svg
            width="12"
            height="6"
            viewBox="0 0 12 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 7L7 1L13 7" stroke="white" />
          </svg>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Map',
  components: {},
  computed: {},
  methods: {
    toggleMap: function() {
      this.$store.dispatch('toggleMapOpen');
    },
  },
};
</script>

<style lang="scss" scoped>
.map__container {
  width: 509px;
  height: 824px;
  margin-left: 10px;
  position: relative;
  transition: 0.4s;
  transform: translateX(50%);

  background: #eeeeee;
}

.map__container--open {
  width: 509px;
  height: 824px;
  margin-left: 10px;
  transform: translateX(0%);
  /* position: relative;
  transition: 0.4s; */
}

.map__title {
  padding: 10px;
  text-align: left;
}

.map__button {
  position: absolute;
  width: 199px;
  height: 44px;
  left: 25px;
  top: 105px;
  border: none;
  background: #c7c7c7;
  transform: rotate(-90deg);
  transition: 0.4s;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  cursor: pointer;

  font-family: Helvetica;
  font-size: 15px;
  line-height: 1.6;
  text-transform: uppercase;
  color: #ffffff;
}
.map__button--open {
  left: 54px;
  top: 54px;
  transform: rotate(-0deg);
  transition: 0.4s;
}
.button__arrow {
  transform: rotate(90deg);
  display: flex;
  flex-direction: column;
}

@media only screen and (max-width: 992px) {
  .map__button {
    display: none;
  }
}
</style>
