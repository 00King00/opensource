<template lang='pug'>
.header
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
	v-layout(row fill-height)
		v-flex(v-if="logging")
			v-navigation-drawer(v-model='drawer', :mini-variant='mini', dark  stateless permanent)
				v-list.pa-1
					v-list-tile( avatar)
						v-list-tile-avatar OSW
				v-list.pt-0(dense)
					v-divider(light)
					v-list-tile(v-for='item in items', :key='item.title', @click='')
						v-list-tile-action
							v-icon {{ item.icon }}
						v-list-tile-content
							v-list-tile-title {{ item.title }}
		v-flex
			v-toolbar
				v-toolbar-side-icon(v-if="logging" @click.stop='mini = !mini')
				v-toolbar-title OpenSourceWebsite
				v-spacer
				v-toolbar-items
					v-btn(flat @click='signup_dialog = true') Signup
					v-btn(flat @click='login_dialog = true') Login
			router-view
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
		items: [
			{ title: 'Data', icon: 'edit' },
			{ title: 'Issues', icon: 'edit' },
			{ title: 'Website settings', icon: 'bug_report' },
			{ title: 'Moqups', icon: 'edit' },
			{ title: 'Users', icon: 'supervised_user_circle' },
			{ title: 'Wikipedia Watchlists', icon: 'library_books' },
			{ title: 'Cron Job Log', icon: 'list' },
			{ title: 'Support groups', icon: 'contact_support' },
		],
		mini: true
	  }
  },
  methods:{
	onSubmit(){
		// const user = {
		// 	email: this.email,
		// 	password: this.password
		// };
	}
  }

}
</script>

<style scoped lang="sass">

</style>
