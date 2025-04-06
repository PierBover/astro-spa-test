import {createRouter, createWebHistory} from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';

export default (app) => {
	if (!import.meta.env.SSR) {

		const router = createRouter({
			history: createWebHistory("/spa"),
			routes: [
				{
					path: '/',
					component: Home
				},
				{
					path: '/about',
					component: About
				}
			]
		});

		app.use(router);
	}
};