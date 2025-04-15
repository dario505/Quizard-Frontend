<template>
<section class="hero d-flex flex-column flex-md-row align-items-center justify-content-between">
    <div class="col-md-6">
      <h1>Learn smarter,<br>not harder.</h1>
      <p class="my-3">Quizard makes learning easy! Start learning today!</p>
      <router-link 
      to ="/register" 
      class="btn btn-purple2"
      >Sign up for free!</router-link>
    </div>
    <div class="col-md-5">
      <img src="@/assets/img/hero.png" class="img-fluid" alt="Learning Illustration">
    </div>
</section>
</template>


<script>
export default {
  name: 'hero'
}
</script>