<template lang="pug">
.full-height
	v-dialog(v-model='dialog',  max-width='800px')
		v-card
			v-toolbar(dark color="primary")
				v-toolbar-title Setup your connection to wikipedia.org
			v-card-text
				v-container(grid-list-md)
					v-form
						v-layout(wrap)
							v-flex(xs12 align-content-start)
								div.text-sm-left Please fill out the following fields to login:
							v-flex(xs12)
								v-text-field(v-model="username" required)
							v-flex(xs12)
								span
								v-text-field(v-model="WatchlistToken", required)
							v-flex(xs12)
								v-checkbox(v-model="checkbox" label="Remember Me")
			v-card-actions
				v-spacer
				v-btn(color='blue darken-1', flat, @click='dialog = false') Close
				v-btn(color='blue darken-1', flat, ) Submit
	v-layout(justify-space-between align-center).px-3.py-4
		.headline.font-weight-bold {{ $route.name}}
	v-card(elevation="0").px-0.mx-3
		v-card-text.pa-0
			v-layout(justify-end align-center wrap)
				v-flex(xs12).text-xs-right
					v-btn( outline color="success"  @click="dialog = true")
						v-icon add
</template>
<script>
export default {
  name: '',
	data(){
		return{
			dialog: false,
			username: "",
			WatchlistToken: "",

		}
	},
	methods:{

	}

}
</script>
<style scoped lang="sass">
.v-btn
	min-width: auto
	padding: 0 8px
	&:hover
		.v-btn__content .v-icon
			color: white
		border: none
		&:before
			opacity: .8

</style>
