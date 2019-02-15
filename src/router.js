import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/data',
			name: 'data',
			component: Data
		},
		{
			path: '/issue',
			name: 'issue',
			component: Issue
		},
		{
			path: '/website-settings',
			name: 'website-settings',
			component: Website-settings
		},
		{
			path: '/moqup',
			name: 'moqup',
			component: Moqup
		},
		{
			path: '/user',
			name: 'user',
			component: User
		},
		{
			path: '/wikipedia-pages',
			name: 'wikipedia-pages',
			component: Wikipedia-pages
		},
		{
			path: '/cron-job',
			name: 'cron-job',
			component: Cron-job
		},
		{

			path: '/cron-job',
			name: 'cron-job',
			component: Cron-job
		},
		{
			path: '/cron-job',
			name: 'cron-job',
			component: Cron-job
		},
		{
			path: '/cron-job',
			name: 'cron-job',
			component: Cron-job
		},
	]
})
