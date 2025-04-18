<template>
    <div class="row align-items-center" v-if="quiz">
      <div class="col-md-5">
        <img src="https://cdn-icons-png.flaticon.com/512/201/201623.png" style="width: 40%" class="img-fluid rounded-4" alt="General Knowledge" />
      </div>
      <div class="col-md-7">
        <h3 class="fw-bold">{{ quiz.title }}</h3>
        <p class="text-warning mb-0">
          <span class="star">★★★★★</span> <span class="text-muted">(5.0)</span>
        </p>
        <p class="mt-3">{{ quiz.description }}</p>
        <p>{{ quiz.title }}</p>
  
        <div class="d-flex justify-content-between align-items-center mt-4">
          <div class="text-center">
            <div class="info-badge">7+</div>
            <small class="fw-bold">Ages</small>
          </div>
          <div class="text-center">
            <div class="info-badge">{{ quiz.title }}</div>
            <small class="fw-bold">Questions</small>
          </div>
          <div class="text-center">
            <div class="info-badge">{{ quiz.title }}</div>
            <small class="fw-bold">Difficulty</small>
          </div>
          <div>
            <a href="#" class="btn btn-purple px-4 py-2">Start ➞</a>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Učitavanje kviza...</p>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import { ref, onMounted } from 'vue';
  import quizzes from '@/assets/data/quizzes.json';

  
  const route = useRoute();
  const quizId = route.params.id;
  
  const quiz = ref(null);
  
  onMounted(() => {
  quiz.value = quizzes.find(q => String(q.id) === quizId);
});
  </script>
  