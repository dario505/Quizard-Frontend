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
</template>
<script>
import cardsQuiz from '@/components/quizzes/CardsQuiz.vue';
import quizzes from '@/assets/data/quizzes.json';
export default{

    name: 'homepage',
    components: {
        cardsQuiz
    },
    data(){
    return{
      quizzes
    };
  }
}
</script>
