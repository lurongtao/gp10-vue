<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <div class="container">
        <nuxt-link
          :to="{ name: 'index' }"
          class="navbar-brand">GP-Nuxt</nuxt-link>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <nuxt-link
              :to="{ name: 'movies-movies' }"
              class="nav-link">Movies</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <keep-alive>
        <nuxt/>
      </keep-alive>
    </div>
  </div>
</template>

<style>
.navbar-brand {
  letter-spacing: 2px;
  font-weight: bold;
}

.navbar-light .navbar-nav .nuxt-link-active,
.navbar-light .navbar-nav .nuxt-link-active:focus {
  color: #000;
}
</style>
