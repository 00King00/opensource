<template lang="pug">
div
	v-layout(justify-space-between align-center).px-3.py-4
			.headline.font-weight-bold {{ $route.name}}
			.v-breadcrumbs.theme--light
				li
					router-link.nav-link( to="/") Home
				li.v-breadcrumbs__divider /
				li
					router-link.nav-link( to='/issue') Issues
				li.v-breadcrumbs__divider /
				li
					a.v-breadcrumbs__item.v-breadcrumbs__item--disabled(disabled="disabled") Create Issue
	v-layout(justify-space-between align-center).px-3
		v-card(width="100%")
			v-card-text
				v-layout(justify-space-between align-center wrap).px-3.pt-4
					v-flex(xs12).text-xs-left
						input.input.mb-3(placeholder="Title..." v-model="title" )
						v-divider
						v-textarea(solo, name='comment', label='Description...', rows="12" v-model="description")
						v-layout.pt-3
							v-btn(color="success") Save
							v-btn Cancel
</template>
<script>
export default {
  name: '',
	data(){
		return{
			title: "",
			description: ""
		}
	},
}
</script>
<style scoped lang="sass">
.input
	width: 100%
	height: 35px
	border: 1px solid #CFD8DC
	padding: 5px 20px
	border-radius: 5px
	outline: none
a
	text-decoration: none
</style>
