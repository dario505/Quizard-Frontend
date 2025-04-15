<template>
    <section class="testimonials-section">
    <h2 class="section-title mb-5">Learning is better together</h2>
    <div class="container">
      <div class="row g-4">
        <div class="col-md-4">
          <div class="testimonial-card">
            <img src="@/assets/leo.png" alt="Logo" width="200" height="200"/>
            <p>“Finally, a learning app that’s actually fun. The quizzes keep me hooked!”</p>
            <strong>- Leo, college freshman</strong>
          </div>
        </div>
        <div class="col-md-4">
          <div class="testimonial-card">
            <img src="@/assets/emily.png" alt="Logo" width="200" height="200"/>
            <p>“Quizard helped me ace my exams! I love how easy it is to use.”</p>
            <strong>- Emily, university student</strong>
          </div>
        </div>
        <div class="col-md-4">
          <div class="testimonial-card">
            <img src="@/assets/thompson.png" alt="Logo" width="200" height="200"/>
            <p>“I created a whole quiz set for my class in under 10 minutes. Amazing tool!”</p>
            <strong>- Mr. Thompson, high school teacher</strong>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <button class="btn btn-purple">Sign up for free!</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'testemonials'
}
</script>
