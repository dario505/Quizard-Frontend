<template>
<div class="form-container">
  <h2 class="text-center mb-4">Log In</h2>
  <form>
    <div class="mb-3">
      <label for="email" class="form-label">Email Address</label>
      <input type="email" class="form-control" id="email" required>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" id="password" required>
    </div>
    <button type="submit" class="btn btn-purple w-100 mt-3">Log In</button>
  </form>
  <p class="text-center mt-3">Don’t have an account? <a href="register.html" class="text-link">Sign up</a></p>
</div>

</template>

<script>
  export default {
    name: 'signIn'
  }
</script>
