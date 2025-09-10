<script setup>
/**
 * Navbar.vue - Navigation Bar Component
 *
 * This Vue component renders a responsive navigation bar with a title and a dropdown menu.
 * The dropdown provides navigation links to different routes using vue-router.
 *
 * @component
 *
 * @example
 * <Navbar />
 */
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="navbar shadow-sm rounded-box bg-base-300">
    <div class="navbar-start">
      <RouterLink to="/" class="btn btn-ghost text-xl">CodeCamp</RouterLink>
    </div>
    <div class="navbar-end">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <i class="material-icons">menu</i>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li><RouterLink to="/lection">Lections</RouterLink></li>
        </ul>
      </div>
    </div>
  </div>
</template>
