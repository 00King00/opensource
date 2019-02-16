import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import CronJob from '@/views/CronJob.vue'
import Data from '@/views/Data.vue'
import Issues from '@/views/Issues.vue'
import WebsiteSettings from '@/views/WebsiteSettings.vue'
import WikipediaPages from '@/views/WikipediaPages.vue'
import Moqup from '@/views/Moqup.vue'
import Users from '@/views/Users.vue'
import SupportGroups from '@/views/SupportGroups.vue'


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
			component: Issues
		},
		{
			path: '/website-settings',
			name: 'website-settings',
			component: WebsiteSettings
		},
		{
			path: '/moqup',
			name: 'moqup',
			component: Moqup
		},
		{
			path: '/users',
			name: 'users',
			component: Users
		},
		{
			path: '/wikipedia-pages',
			name: 'wikipedia-pages',
			component: WikipediaPages
		},
		{
			path: '/cron-job',
			name: 'cron-job',
			component: CronJob
		},
		{
			path: '/support-groups',
			name: 'support-groups',
			component: SupportGroups
		}
	]
})
