import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/components/views/homepage/HomePage.vue'

const routes = [
	{
		path: '/',
		name: 'HomePage',
		component: HomePage
	}
]

export default createRouter({
	history: createWebHistory(),
	routes
});
