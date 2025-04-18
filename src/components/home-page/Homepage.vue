<template>
  <section class="quiz-section">
    <div class="container">
        <div class="row g-4">
            <div class="col-md-3" v-for="(quiz, index) in quizzes" :key="index">
              <cardsQuiz :quiz="quiz"></cardsQuiz>
            </div>
        </div>
    </div>
  </section>
  <quiz-details></quiz-details>
</template>
<script>
import cardsQuiz from '@/components/quizzes/CardsQuiz.vue';
import quizzes from '@/assets/data/quizzes.json';
import quizDetails from '../quizzes/QuizDetails.vue';
export default{

    name: 'homepage',
    components: {
        cardsQuiz, quizDetails
    },
    data(){
    return{
      quizzes
    };
  }
}
</script>
