<template>
  <li class="hotel-item">
    <div class="img-container">
      <img class="hotel-img" :src="item.images[0].path" />
      <div class="like-img" @click="addToFavorite">
        <svg
          class="heart"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.1695 0.929596C13.237 0.929596 12.3457 1.14337 11.5205 1.56502C10.9588 1.85199 10.4428 2.23327 10 2.68564C9.5572 2.23327 9.0412 1.85199 8.47946 1.56502C7.65423 1.14337 6.76297 0.929596 5.83043 0.929596C2.61555 0.929596 0 3.54514 0 6.76007C0 9.03714 1.2026 11.4556 3.57435 13.9483C5.55464 16.0296 7.97913 17.7645 9.66429 18.8534L10 19.0704L10.3357 18.8534C12.0209 17.7645 14.4454 16.0296 16.4257 13.9483C18.7974 11.4556 20 9.03714 20 6.76007C20 3.54514 17.3845 0.929596 14.1695 0.929596ZM15.5294 13.0955C13.7596 14.9555 11.6038 16.5368 10 17.5951C8.39616 16.5368 6.24037 14.9555 4.4706 13.0955C2.32499 10.8406 1.23711 8.70902 1.23711 6.76007C1.23711 4.22729 3.29769 2.16671 5.83047 2.16671C7.28866 2.16671 8.62817 2.83652 9.50544 4.00436L10 4.66271L10.4946 4.00436C11.3718 2.83652 12.7113 2.16671 14.1695 2.16671C16.7023 2.16671 18.7629 4.22729 18.7629 6.76007C18.7629 8.70902 17.675 10.8406 15.5294 13.0955Z"
          />
        </svg>
      </div>
    </div>

    <div class="text-container">
      <div class="text-header">
        <h2 class="hotel-name">{{ item.name }}</h2>
        <div class="hotel-price-range">
          <p
            v-for="index in 5"
            :key="index"
            :class="{ bold: item.price_range >= index }"
          >
            $
          </p>
        </div>
      </div>

      <div class="hotel-description" v-html="item.description">
        {{ item.description }}
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'HotelsListItem',

  props: {
    item: Object,
  },

  data() {
    return {};
  },

  methods: {
    addToFavorite() {
      const hotel = this.item;
      const exist = this.$store.state.favoriteHotels.find(item => {
        return hotel.id === item.id;
      });

      if (exist) {
        this.showNotifyFail();
      } else {
        this.$store.dispatch('addFavorite', hotel);
        this.showNotifySuccess();
      }
    },
    showNotifySuccess() {
      M.toast({
        html: 'Congrats! Added to favorite.',
        displayLength: 2500,
        classes: 'rounded',
      });
    },
    showNotifyFail() {
      M.toast({
        html: 'Sorry. Already added to favorite',
        displayLength: 2500,
        classes: 'rounded',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.hotel-item {
  width: 100%;
  height: 329px;
  list-style: none;
  background-color: #eeeeee;
  margin-bottom: 25px;
  border-radius: 4px;
}

.img-container {
  position: relative;
  height: 205px;
  margin-bottom: 11px;
}
.hotel-img {
  width: 100%;
  height: 205px;
  object-fit: cover;
}
.like-img {
  position: absolute;
  right: 24px;
  top: 19px;
  height: 20px;
  cursor: pointer;
}
.heart {
  fill: #333333;
}
.heart:hover {
  fill: red;
}

.text-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hotel-name {
  font-family: Helvetica;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.6;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: #333333;
  margin: 0 0 0 10px;
  max-height: 32px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.hotel-price-range {
  margin: 0;
  margin-right: 15px;
  display: flex;
  color: #999999;
}
.hotel-price-range p {
  margin: 0;
  font-family: Helvetica;
  font-style: normal;
  font-size: 16px;
  line-height: 1.6;
  text-transform: uppercase;
}
.bold {
  font-weight: 700;
  color: #333333;
}

.hotel-description {
  font-family: Helvetica;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.6;
  letter-spacing: -0.01em;
  color: #999999;
  margin: 0;
  height: 72px;
  overflow: hidden;
  padding: 5px;
}

@media only screen and (max-width: 992px) {
  .text-container {
    padding: 0 5px;
  }
  .hotel-item {
    margin-bottom: 35px;
  }
}
</style>
