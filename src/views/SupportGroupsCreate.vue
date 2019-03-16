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
						input.input
				v-layout(justify-space-between align-center wrap).px-3.py-4
					v-flex(xs12).text-xs-left Languages
					v-flex(xs12).text-xs-left
						v-layout(justify-space-between wrap)
							v-flex(xs6 sm4 md3 v-for="n in 30")
								v-checkbox.my-0( :label="`test ${n}`", color='info', :value="`test ${n}`", v-model="select" hide-details)
						v-layout.pt-5
							v-btn(color="success") Save
							v-btn Cancel
</template>
<script>
export default {
  name: '',
	data(){
		return{
			select: null
		}
	},
	computed:{
		test(){
			console.log(this.select);
		}
	}

}
</script>
<style scoped lang="sass">
.input
	width: 280px
	height: 35px
	border: 1px solid grey
	padding: 5px 20px
	border-radius: 5px
a
	text-decoration: none
</style>
