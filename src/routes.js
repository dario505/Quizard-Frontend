import {createRouter, createWebHashHistory} from 'vue-router';
import landingPage from './components/landing-page/LandingPage.vue';
import login from './components/signup-signin/Login.vue';
import register from './components/signup-signin/Register.vue';
import homepage from './components/home-page/Homepage.vue';
import quizDetails from './components/quizzes/QuizDetails.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/', 
            component: landingPage
        },
        {
            path: '/login', 
            component: login
        },
        {
            path: '/register', 
            component: register
        },
        {
            path: '/home', 
            component: homepage
        },
        {
            path:'/quiz/:id',
            name: 'quizDetails',
            component: quizDetails,
            props: true
        },
        {
            path: '/', redirect: '/0'
        }
    ]
    
})

export default router;