<template>
  <div class="container">
    <div class="price-filter">
      <div class="price-filter__list">
        <button
          type="button"
          class="price-filter__item"
          v-for="(item, idx) in priceData"
          :key="idx"
          :value="idx + 1"
          :class="{ active: activeClass == item.length }"
          @click="selectFilter"
        >
          {{ item }}
        </button>
      </div>
    </div>

    <div class="hotels-list-container">
      <h2 class="hotels-list-title">Day 1</h2>

      <div v-if="hotelsData.length === 0" class="no-content">
        No content provided
      </div>

      <div v-else>
        <ul
          class="hotels-list"
          :class="{
            'hotels-list-map-open': this.$store.state.isMapOpen === true,
          }"
        >
          <HotelsListItem
            v-for="hotelsItem in hotelsData"
            :key="hotelsItem.id"
            :item="hotelsItem"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Data from '../data/data.json';
import HotelsListItem from './HotelsListItem';

export default {
  name: 'HotelsList',

  components: {
    HotelsListItem,
  },

  data() {
    return {
      priceData: ['$', '$$', '$$$', '$$$$', '$$$$$', ' All'],
      filterValue: null,
      activeClass: null,
    };
  },

  computed: {
    newFilterValue: {
      get: function() {
        return this.filterValue;
      },
      set: function(newValue) {
        return (this.filterValue = newValue);
      },
    },

    hotelsData: function() {
      let hotels;
      const renderData =
        this.$store.state.navItem === 'city'
          ? Data
          : this.$store.state.favoriteHotels;

      if (this.newFilterValue) {
        hotels = renderData.filter(
          hotel => hotel.price_range == this.newFilterValue,
        );
      } else {
        hotels = renderData;
      }

      return hotels;
    },
  },

  methods: {
    selectFilter(event) {
      this.activeClass = event.target.value;

      if (event.target.value == 6) {
        this.newFilterValue = null;
      } else {
        this.newFilterValue = event.target.value;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}
.price-filter {
  width: 100%;
  height: 34px;
  margin-bottom: 8px;

  &__list {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__item:not(:last-child) {
    margin-right: 24px;
  }

  &__item {
    width: 156px;
    height: 34px;
    background: #eeeeee;
    border-radius: 14px;
    text-align: center;
    padding-top: 4px;
    cursor: pointer;
    font-size: 16px;
    line-height: 1.6;
    font-family: Helvetica;
    color: #5a5a5a;
    border: none;
    outline: none;
  }
  &__item:hover {
    font-weight: 700;
    background: #d8d8d8;
  }
}

.active {
  font-weight: 700;
  background: #d8d8d8;
}

.hotels-list-title {
  font-family: Helvetica;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.6;
  margin: 0;
  text-align: left;
  margin-bottom: 8px;
}

.no-content {
  font-family: Helvetica;
  font-weight: 700;
  font-size: 20px;
  color: red;
}

.hotels-list {
  display: grid;
  grid-template-columns: 31% 31% 31%;
  grid-column-gap: 3.5%;
  grid-row-gap: 0;
  padding: 0;
}

.hotels-list-map-open {
  display: flex;
  flex-direction: column;
  grid-template-columns: none;
  grid-gap: 0;
  width: 100%;
}

@media only screen and (max-width: 992px) {
  .hotels-list-title {
    padding: 0 5px;
  }
  .holels-list {
    display: flex;
    flex-direction: column;
    grid-template-columns: none;
    grid-column-gap: 0;
    grid-row-gap: 0;
    width: 100%;
  }

  .price-filter__list {
    justify-content: space-around;
  }
  .price-filter__item {
    font-size: 14px;
    padding-top: 3px;
    width: 15%;
    margin-right: 0;
  }
}
</style>
