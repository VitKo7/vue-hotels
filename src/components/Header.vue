<template>
  <nav class="header-container blue darken-3">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">
        <img
          src="https://storage.googleapis.com/ttb-public-storage/front-static/logo.svg"
          alt="logo"
          class="logo"
        />
        <p class="logo__title">The trip Boutique</p>
      </a>

      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li active-class="active">
          <a href="#">Login</a>
        </li>

        <li active-class="active">
          <a href="#">Register</a>
        </li>

        <li active-class="active">
          <a href="#">Exit</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
nav {
  width: 100vw;
  height: 88px;
  padding: 0 2rem;
  margin-bottom: 48px;

  & .brand-logo {
    position: static;
    display: flex;
    align-items: center;
  }
}

.nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 5.3rem;
  height: 5.3rem;
  margin-right: 15px;
}

.logo__title {
  display: block;
  font-weight: 400;
  white-space: nowrap;
  line-height: 1.3em;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-family: Montserrat, sans-serif;
  font-size: 1.6rem;
  margin: 0;
  padding: 0;
}

@media only screen and (max-width: 992px) {
  nav {
    width: 100%;
    height: 50px;
    padding: 0 1rem;
    margin-bottom: 24px;

    & .brand-logo {
      position: absolute;
    }
  }
  .logo {
    width: 3.5rem;
    height: 3.5rem;
  }

  .logo__title {
    display: none;
  }
}
</style>
