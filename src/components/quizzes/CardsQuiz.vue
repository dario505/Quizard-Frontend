<template>
  <div class="quiz-card">
          <img src="https://cdn-icons-png.flaticon.com/512/201/201623.png" alt="General Knowledge">
          <div class="rating">★★★★★</div>
          <h5>{{ quiz.title }}</h5>
          <p>{{ quiz.description }}</p>
          <button class="start-btn" @click="goToQuiz(quiz.id)">Start</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  quiz: Object
});

const router = useRouter();

const goToQuiz = (id) => {
  router.push({ name: 'quizDetails', params: { id } });
};
</script>
  