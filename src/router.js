import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import CronJob from '@/views/CronJob.vue'
import Data from '@/views/Data.vue'
import Country from '@/views/Country.vue'
import Currency from '@/views/Currency.vue'
import Language from '@/views/Language.vue'
import Issues from '@/views/Issues.vue'
import WebsiteSettings from '@/views/WebsiteSettings.vue'
import WebsiteSettingsView from '@/views/WebsiteSettingsView.vue'
import WikipediaPages from '@/views/WikipediaPages.vue'
import Moqup from '@/views/Moqup.vue'
import Users from '@/views/Users.vue'
import SupportGroups from '@/views/SupportGroups.vue'
import SupportGroupsCreate from '@/views/SupportGroupsCreate.vue'


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
			path: '/data/',
			name: 'data',
			component: Data,
			children: [
				{
					path: 'country',
					component: Country
				},
				{
					path: 'currency',
					component:Currency
				},
				{
					path: 'language',
					component:Language
				}
			]
		},
		{
			path: '/issue',
			name: 'Issues',
			component: Issues
		},
		{
			path: '/website-settings',
			name: 'Website settings',
			component: WebsiteSettings,
			children: [
				{
					path: 'view/:id',
					component: WebsiteSettingsView,
				}
			]
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
			name: 'Cron Job Log',
			component: CronJob
		},
		{
			path: '/support-groups',
			name: 'Support Groups',
			component: SupportGroups,
			children: [
				{
					path: 'create',
					component: SupportGroupsCreate,
					name: 'Create Support Group'
				}
			]
		}
	]
})
