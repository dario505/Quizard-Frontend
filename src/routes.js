import {createRouter, createWebHashHistory} from 'vue-router';
import landingPage from './components/landing-page/LandingPage.vue';
import login from './components/signup-signin/Login.vue';
import register from './components/signup-signin/Register.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/', component: landingPage
        },
        {
            path: '/login', component: login
        },
        {
            path: '/register', component: register
        },
        {
            path: '/', redirect: '/0'
        }
    ]
    
})

export default router;