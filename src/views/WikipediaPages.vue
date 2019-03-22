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
							v-autocomplete(label="Setup connection", v-model='connectionSetup', :items='connectionItems', clearable, hide-details, hide-selected, solo).mb-3
							v-flex(xs12).my-3
								.text-xs-left.font-weight-bold Wiki Username
								v-text-field(v-model="username" required solo hide-details).my-2
								.text-xs-left Wiki Username cannot be blank.
									a.d-block.mt-3(href="3") Look your username here
							v-flex(xs12)
								.text-xs-left.font-weight-bold Watchlist Token
								v-text-field(v-model="WatchlistToken", required solo hide-details).my-2
								.text-xs-left Watchlist Token cannot be blank.
									a.d-block.mt-3(href="3") Look your token here
			v-card-actions
				v-spacer
				v-btn( @click='dialog = false') Close
				v-btn( color="info", ) Submit
	v-layout(justify-space-between align-center).px-3.py-4
		.headline.font-weight-bold {{ $route.name}}
	v-card(elevation="0").px-0.mx-3
		v-card-text.pa-0
			v-layout(justify-end align-center wrap)
				v-flex(xs12).text-xs-right
					v-btn.scoped-btn( outline color="success"  @click="dialog = true")
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
			connectionSetup: "",
			connectionItems:["	العربية (ar.wikipedia.org)", "Azərbaycanca (az.wikipedia.org)", "Deutsch (de.wikipedia.org)", "English (en.wikipedia.org)", "Español (es.wikipedia.org)", "Euskara (eu.wikipedia.org)"]
			

		}
	},
	methods:{

	}

}
</script>
<style scoped lang="sass">
.v-btn.scoped-btn
	min-width: auto
	padding: 0 8px
	&:hover
		.v-btn__content
			.v-icon
				color: white
		
		border: none
		&:before
			opacity: .8

</style>
