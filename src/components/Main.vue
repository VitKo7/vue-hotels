<template>
  <div class="main__container">
    <div class="hotels__container">
      <MainNavigation />
      <HotelsList />
    </div>

    <div class="map__container">
      <Map />
    </div>
  </div>
</template>

<script>
import MainNavigation from './MainNavigation';
import HotelsList from './HotelsList';
import Map from './Map';

export default {
  name: 'Main',
  components: {
    MainNavigation,
    HotelsList,
    Map,
  },
};
</script>

<style lang="scss" scoped>
.main__container {
  display: flex;
  justify-content: flex-end;
}
.hotels__container {
  width: 754px;
  margin: 0 10px 0 138px;
  padding: 5px 10px 0 10px;

  /* border: 1px solid red; */
  /* background: lightyellow; */
}
</style>
