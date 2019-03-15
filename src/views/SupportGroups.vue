<template lang="pug">
.full-height
	router-view
	div(v-if="$route.path == '/support-groups'")
		v-layout(align-center wrap).px-3.py-4
			v-flex(xs12)
				.headline.font-weight-bold.text-xs-left {{ $route.name}}
			v-flex(xs12)
				v-alert.text-xs-left(color="#17a2b8" :value="true") Support Groups: 0/1. (1 per 1 User Rating)
		v-layout(justify-space-between align-center wrap).px-3
			v-flex(xs12)
				v-card(elevation="1")
					v-card-text.text-xs-right
						v-btn(color='success', to="/support-groups/create") New Support Group
				v-divider
			v-flex(xs12)
				v-card(elevation="1" v-if="data.length==0")
					v-card-text.text-xs-left No results found.
				v-data-table.elevation-4.full-width(v-else :headers='headers', :items='data_mockup', hide-actions, :rows-per-page-items='[5, 15, 20, 25]')
					template(v-slot:items='props')
						
</template>
<script>
export default {
  name: '',
	data(){
		return{
			headers: [
				
			],
			data:[]

		}
	},
	methods:{

	}

}
</script>
<style scoped lang="sass">
.v-alert
	border-radius: 5px
</style>
