<template lang="pug">
div
	v-layout(justify-space-between align-center).px-3.py-4
			.headline.font-weight-bold {{ $route.name}}
			.v-breadcrumbs.theme--light
				li
					router-link.nav-link( to="/") Home
				li.v-breadcrumbs__divider /
				li
					router-link.nav-link( to='/support-groups') Supourt Groups
				li.v-breadcrumbs__divider /
				li
					a.v-breadcrumbs__item.v-breadcrumbs__item--disabled(disabled="disabled") Create Supourt Group
	v-layout(justify-space-between align-center).px-3.py-4
		v-card(width="100%")
			v-card-text
				v-layout(justify-space-between align-center wrap).px-3.py-4
					v-flex(xs12).text-xs-left
						.subheader Name
					v-flex(xs12).text-xs-left
						v-text-field(solo)
				v-layout(justify-space-between align-center wrap).px-3.py-4
					v-flex(xs12).text-xs-left Languages
					v-flex(xs12).text-xs-left
						v-layout(justify-space-between align-center wrap)
							v-flex(sm3 v-for="n in 30")
								v-checkbox(label='info', color='Afar', value='info', hide-details)
</template>
<script>
export default {
  name: '',
	data(){
		return{
			
		}
	},
	methods:{

	}

}
</script>
<style scoped lang="sass">
a
	text-decoration: none
</style>
