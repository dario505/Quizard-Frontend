<template>
<div class="form-container">
    <h2 class="text-center mb-4">Sign Up</h2>
        <form>
            <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" class="form-control" id="username" required>
            </div>
            <div class="mb-3">
            <label for="email" class="form-label">Email Address</label>
            <input type="email" class="form-control" id="email" required>
            </div>
            <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" required>
            </div>
            <button type="submit" class="btn btn-purple w-100 mt-3">Sign Up</button>
        </form>
    <p class="text-center mt-3">Already have an account? <router-link to="/login">Log in</router-link></p>
    </div>

</template>

<script>
  export default {
    name: 'register'
  }
</script>
