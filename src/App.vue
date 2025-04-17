<template>
  <router-view></router-view> 
</template>

<script>
import landingPage from '@/components/landing-page/LandingPage.vue';
import cardsQuiz from './components/quizzes/CardsQuiz.vue';

export default {
  components: {
    landingPage, cardsQuiz
  }
}
</script>