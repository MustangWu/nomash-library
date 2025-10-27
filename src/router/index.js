import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
const AboutView = () => import('@/views/AboutView.vue')
const FirebaseRegisterView = () => import('@/views/FirebaseRegisterView.vue')
const FirebaseSigninView = () => import('@/views/FirebaseSigninView.vue')
const AddBookView = () => import('@/views/AddBookView.vue')
const LogoutView = () => import('@/views/LogoutView.vue')
const GetAllBookAPI = () => import('@/views/GetAllBookAPI.vue')
const CountBooksView = () => import('@/views/CountBooksView.vue')
const SearchWeatherView = () => import('@/views/SearchWeatherView.vue')

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/fire-register', name: 'FireRegister', component: FirebaseRegisterView },
  { path: '/fire-signin', name: 'FireSignin', component: FirebaseSigninView },
  { path: '/add-book', name: 'AddBook', component: AddBookView },
  { path: '/logout', name: 'Logout', component: LogoutView },
  { path: '/get-all-books', name: 'GetAllBooks', component: GetAllBookAPI },
  { path: '/count-books', name: 'CountBooks', component: CountBooksView },
  { path: '/search-weather', name: 'SearchWeather', component: SearchWeatherView }
]

export default createRouter({ history: createWebHistory(), routes })
