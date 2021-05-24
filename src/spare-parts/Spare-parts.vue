<template>
  <li><a href="/" target="_blank" rel="noopener">XXX</a></li>
</template>

<style lang="scss" scoped>
#app {
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.btn {
  display: inline-block;
  font-size: 24px;
  background: #ff662d;
  color: #fff;
  cursor: pointer;
  min-width: 220px;
  border: 1px solid transparent;
  padding: 8px 15px;

  &--outlined {
    background: none;
    border: 1px solid #ff662d;
    color: #ff662d;
  }

  /* @import "~materialize-css/dist/css/materialize.min.css"; */
}
</style>
