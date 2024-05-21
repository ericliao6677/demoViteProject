<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <aside>
    <div style="display: flex; flex-direction: column">
      <RouterLink to="/ref">1. Ref</RouterLink>
      <RouterLink to="/attribute">2. Attribute</RouterLink>
      <RouterLink to="/v-on">3. v-on</RouterLink>
      <RouterLink to="/v-model">4. v-model</RouterLink>
      <RouterLink to="/v-if">5. v-if</RouterLink>
      <RouterLink to="/v-for">6. v-for</RouterLink>
      <RouterLink to="/refAttributeView">7. Ref AttributeView</RouterLink>
      <RouterLink to="/watchView">8. watch</RouterLink>
    </div>
  </aside>

  <div class="content">
    <RouterView />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 20px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.content {
  margin: 20px;
}

/* .view {
  margin: 20px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
} */
/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
