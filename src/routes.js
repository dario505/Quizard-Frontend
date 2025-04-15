import {createRouter, createWebHashHistory} from 'vue-router';
import landingPage from './components/landing-page/LandingPage.vue';
import signIn from './components/signup-signin/SignIn.vue';
import signUp from './components/signup-signin/SignUp.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/', component: landingPage
        },
        {
            path: '/signin', component: signIn
        },
        {
            path: '/signup', component: signUp
        },
        {
            path: '/', redirect: '/0'
        }
    ]
    
})

export default router;