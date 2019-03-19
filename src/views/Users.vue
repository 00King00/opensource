<template lang="pug">
.full-height
	v-layout(align-center)
		v-card(elevation="0" width="100%").px-0.my-5.mx-3
			v-card-text
				v-layout(justify-start wrap)
					v-flex(shrink)
						.teal.lighten-1.d-inline-block.pa-2
							v-icon(size="65" dark) people
					v-flex(grow)
						.pa-2.text-xs-left
							div Registered Users
							.font-weight-bold {{usersCount}}
</template>
</template>
<script>
export default {
  name: '',
	data(){
		return{
			usersCount: 62

		}
	},
	methods:{

	}

}
</script>
<style scoped lang="sass">
.v-card
	border-radius: 5px
</style>
