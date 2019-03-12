<template lang="pug">
.full-height
	v-card
		v-card-text
			v-layout(justify-space-between align-center)
				.headline.font-weight-bold {{ $route.name}}
				v-breadcrumbs(:items='items')
					template(v-slot:item='props')
						v-breadcrumbs-item(:to='props.item.to', :disabled="props.item.disabled") {{ props.item.text }}
			v-layout(justify-space-between align-center)
				v-flex.text-xs-left()
					v-btn-toggle(v-model="toggle_btn")
						v-btn( value="New"  ) New
						v-btn( value="Yes" ) Yes
						v-btn( value="No" ) No
						v-btn( value="Yours" ) Yours
					v-spacer
				v-flex
					v-layout(justify-space-between)
						v-flex
							v-layout(justify-space-between align-center)
								v-text-field(label='Solo', single-line, solo append-icon="search")
								v-btn.px-0(icon).ma-0
									v-icon search
						v-btn(color="success") New Issue


</template>
<script>
export default {
  name: '',
	data(){
		return{
			toggle_btn: 'New',
			items: [
				{
				text: 'Home',
				disabled: false,
				to: '/'
				},
				{
				text: 'Issues',
				disabled:true,
				},
			]

		}
	},
	methods:{

	}

}
</script>
<style scoped lang="sass">
.v-btn--icon:before
	border-radius: unset
.v-btn--icon:before
	background-color: currentColor
</style>
