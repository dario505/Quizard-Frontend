<template>
<section class="hero d-flex flex-column flex-md-row align-items-center justify-content-between">
    <div class="col-md-6">
      <h1>Learn smarter,<br>not harder.</h1>
      <h3 class="my-3">Quizard makes learning easy! <br>Start learning today!</h3>
      <router-link 
      to ="/register" 
      class="btn btn-purple2"
      >Sign up for free!</router-link>
      <router-link
      to="/home"
      class="continue-btn"
      >Continue as guest</router-link>
    </div>
    <div class="col-md-5">
      <img src="@/assets/img/hero/hero-illustration.png" class="img-fluid img-border" alt="Learning Illustration">
    </div>
</section>
</template>


<script>
export default {
  name: 'hero'
}
</script>