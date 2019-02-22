<template lang='pug'>
nav
	v-layout(row, wrap justify-center)
		v-dialog(v-model='login_dialog',  max-width='800px')
			v-card
				v-toolbar(dark color="primary")
					v-toolbar-title Login
				v-card-text
					v-container(grid-list-md)
						v-form
							v-layout(wrap)
								v-flex(xs12 align-content-start)
									div.text-sm-left Please fill out the following fields to login:
								v-flex(xs12)
									v-text-field(label='Email*', v-model="email" required)
								v-flex(xs12)
									span
									v-text-field(label='Password*', v-model="password" type='password', required)
								v-flex(xs12)
									v-checkbox(v-model="checkbox" label="Remember Me")
				v-card-actions
					v-spacer
					v-btn(color='blue darken-1', flat, @click='login_dialog = false') Close
					v-btn(color='blue darken-1', flat, @click='onSubmit') Submit
		v-dialog(v-model='signup_dialog',  max-width='800px')
			v-card
				v-toolbar(dark color="primary")
					v-toolbar-title Login
				v-card-text
					v-container(grid-list-md)
						v-form
							v-layout(wrap)
								v-flex(xs12)
									div.text-sm-left Please fill out the following fields to signup:
								v-flex(xs12)
									v-text-field(label='Email*', v-model="email" required)
								v-flex(xs12)
									span
									v-text-field(label='Password*', v-model="password" type='password', required)
				v-card-actions
					v-spacer
					v-btn(color='blue darken-1', flat, @click='signup_dialog = false') Close
					v-btn(color='blue darken-1', flat, @click='onSubmit') Submit
	v-navigation-drawer(v-model='drawer', :mini-variant='mini',  mobile-break-point="960" dark  app)
		v-list.pa-1
			v-list-tile( avatar to='/')
				v-list-tile-avatar OSW
		v-divider(light)
		v-list.pt-0(dense)
			v-list-group(v-for='(item, index) in side_bar_menu_1', :key='`side_bar_menu_1${index}`',
			:to='item.path' v-model='item.active',  :prepend-icon="item.icon"  )
				v-list-tile(slot='activator')
					v-list-tile-content
						v-list-tile-title {{ item.title }}
				v-list-tile(v-for='subItem in item.child_list', :key='subItem.subTitle' :to='subItem.path' )
					v-list-tile-action.pl-12.pr-3
						v-icon {{subItem.icon}}
					v-list-tile-content
						v-list-tile-title {{ subItem.subTitle }}
		v-list.pt-0(dense)
			v-list-tile(v-for='(item, index) in side_bar_menu', :key='`side_bar_menu_${index}`', :to='item.path')
				v-list-tile-action
					v-icon {{ item.icon }}
				v-list-tile-content
					v-list-tile-title {{ item.title }}
	v-toolbar(app)
		v-toolbar-side-icon.hidden-sm-and-down(v-if="logging" @click.stop='mini = !mini')
		v-toolbar-side-icon.hidden-md-and-up(v-if="logging" @click.stop='onNavShow')
		v-toolbar-title OpenSourceWebsite
		v-spacer
		v-toolbar-items
			v-btn(flat @click='signup_dialog = true') Signup
			v-btn(flat @click='login_dialog = true') Login
		v-menu(offset-y left)
			v-btn(flat depressed slot="activator")
				v-badge(color="transparent" lg)
					span(slot="badge")
						v-icon(color="black" medium) arrow_drop_down
					v-icon  language
			v-list
				v-list-tile(v-for='(item, index) in drop_power_menu', :key='`drop_power_menu_${index}`')
					v-list-tile-title {{ item.title }}
		v-menu(offset-y left)
			v-btn(flat depressed slot="activator")
				v-badge(color="" lg)
					span(slot="badge")
						v-icon(color="black" medium) arrow_drop_down
					v-icon  power_settings_new
			v-list
				v-list-tile(v-for='(item, index) in country_menu', :key='`country_menu_${index}`')
					v-list-tile-title {{ item.title }}
</template>

<script>
export default {
name: 'AppHeader',
data(){
	return {
		logging: true,
		login_dialog: false,
		signup_dialog:false,
		email: "",
		password:"",
		checkbox: false,
		drawer: true,
		mini: false,
		side_bar_menu_1:[	{ title: 'Data', icon: 'edit', path: '/data', active: true,
			child_list:[
				{subTitle:"Country", icon: "call_split", path: '/data/country'},
				{subTitle:"Currency", icon: "money", path: '/data/currency'},
				{subTitle:"Language", icon: "g_translate", path: '/data/language'}
			]},],
		side_bar_menu: [
			{ title: 'Issues', icon: 'edit', path: '/issue'},
			{ title: 'Website settings', icon: 'bug_report', path: '/website-settings'},
			{ title: 'Moqups', icon: 'edit', path: '/moqup'},
			{ title: 'Users', icon: 'supervised_user_circle', path: '/users'},
			{ title: 'Wikipedia Watchlists', icon: 'library_books', path: '/wikipedia-pages'},
			{ title: 'Cron Job Log', icon: 'list', path: '/cron-job'},
			{ title: 'Support groups', icon: 'contact_support', path: '/support-groups'},
		],
		drop_power_menu: [
			{ title: 'Click Me' },
			{ title: 'Click Me' },
			{ title: 'Click Me' },
			{ title: 'Click Me 2' }
		],
		country_menu:[
			{ title: 'country_menu' },
			{ title: 'country_menu' },
			{ title: 'country_menu' },
			{ title: 'country_menu 2' }
		]

	}
},
methods:{
	onSubmit(){
	},
	onNavShow(){
		this.mini= false
		this.drawer = !this.drawer
	}
}

}
</script>
<style scoped lang="sass">
/* .sidebar.flex
	//flex: initial */
.v-badge__badge
	top: -4px
.v-btn
	min-width: 60px
.header
	height: 100%
.pl-12
	padding-left: 12px

</style>
