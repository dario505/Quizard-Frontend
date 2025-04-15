import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import './assets/global.css';
import router from './routes';

const app = createApp(App)

app.use(router);

app.mount('#app');
