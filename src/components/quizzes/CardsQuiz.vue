<template>
  <div class="quiz-card">
          <img src="https://cdn-icons-png.flaticon.com/512/201/201623.png" alt="General Knowledge">
          <div class="rating">★★★★★</div>
          <h5>{{ quiz.title }}</h5>
          <p>{{ quiz.description }}</p>
          <button class="start-btn">Start</button>
  </div>
</template>

<script>

export default{
  name: 'cardsQuiz',
  props: {
    quiz: Object
  }
}
</script>
  