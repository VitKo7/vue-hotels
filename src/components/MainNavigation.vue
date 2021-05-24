<template>
    <div class="navigation__container">
        <div 
            class="navigation__button" 
            v-bind:class="{ active: isActive('city') }"
            @click="setActive('city')">
            City guide
        </div>

        <div 
            class="navigation__button" 
            v-bind:class="{ active: isActive('favorite') }"
            @click="setActive('favorite')">
            Favorite
        </div>
    </div>
</template>

<script>
    export default {
    name: "MainNavigation",
    data() {
        return { activeItem: this.$store.state.navItem };
  },

    methods: {
        isActive: function (navItem) {
            return this.activeItem === navItem;
        },
        setActive: function (navItem) {
            this.activeItem = navItem;
            this.toggle(navItem);
        },
        toggle: function (navItem) {
            this.$store.dispatch("changeNavItem", navItem);
        },
    },
}
</script>

<style lang="scss" scoped>

.navigation__container {
  width: 100%;
  height: 50px;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
}

.navigation__button {
  font-family: Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #999999;
  cursor: pointer;
  padding: 12px 0 9px 0;
  border-bottom: 3px solid transparent;

  &:first-child {
    margin-right: 98px;
  }

  &:hover {
    color: #333333;
    border-bottom: 3px solid orangered;
  }
}

.active {
  color: #333333;
  border-bottom: 3px solid orangered;
}

</style>