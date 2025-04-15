<!-- src/components/Navbar.vue -->
<template>
    <nav class="navbar navbar-light bg-white px-4 py-3">
      <a class="navbar-brand d-flex align-items-center" href="#">
        <img src="@/assets/logo.png" alt="Logo" width="40" height="40" class="me-2" />
        <span style="font-weight: 700; font-size: 24px;">Quizard</span>
      </a>
      <div>
        <button class="btn btn-outline-secondary me-2">Log in</button>
        <button class="btn btn-purple2">Sign up</button>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'navbar'
  }
  </script>
