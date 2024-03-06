<script>
export default {
  data() {
    return {
      navLinks: [
        {
          name: "home",
          label: "Home",
        },
        {
          name: "cars",
          label: "Cars",
        },
      ],
    };
  },
};
</script>

<template>
  <header>
    <div class="container py-3">
      <div class="row">

        <div class="col-4">
          <h1>Car Shop</h1>
        </div>

        <div class="col-4 d-flex align-items-center">
          <ul class=" mb-0">

            <li v-for="(link, index) in navLinks">
              <router-link class="link" :to="{ name: link.name }">{{ link.label }}</router-link>
            </li>

            <li>
              About
            </li>

          </ul>
        </div>

        <div class="col-4 d-flex align-items-center">
          <ul>
            <li>
              Login
            </li>

            <li>
              Register
            </li>
          </ul>

        </div>
      </div>
    </div>

  </header>
</template>

<style scoped lang="scss">
header {
  background-color: #610c9f;
  color: white;

  ul {
    list-style: none;
    display: flex;
    margin-bottom: 0;

    li {
      margin: 0px 10px;
      cursor: pointer;
    }
  }
}

.link {
  text-decoration: none;
  cursor: pointer;
  color: white;
}
</style>
