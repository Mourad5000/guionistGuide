import Vue from 'vue';
import VueRouter from 'vue-router';

// components
import Characters from '../views/Characters.vue'
import CharacterQuotes from '../views/CharacterQuotes.vue'
import RequestsList from '../views/RequestsList.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    name: 'Characters',
    component: Characters,
  },
  {
    path:'/backRequests',
    component:RequestsList
  },
  {
    path:'/:id',
    component:CharacterQuotes
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
