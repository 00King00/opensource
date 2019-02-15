<template lang="pug">
	v-card.text-sm-left
		v-card-text
			p
				| OpenSourceWebsite (OSW) is an open source website for the world's largest online social community. The Website is managed by users. The Website will look like and what functions it will have depends on users' decisions. The Website is updated after each code change. So everyone can influence how the Website works.
			p We want the Web to be even better. We want more people using it for more things. We want it to continue to drive creativity, education and economic growth. And we want to empower people to help shape the Web as they move more of their lives online
		v-card-title.headline.py-0.font-weight-bold Our vision and mission
		v-card-text
			ul.text-sm-left(v-for="(n, index) in 30" :key="index")
				li
					a(href="#") Electronic voting
</template>

<script>
export default {
  name: 'home',
	data(){
		return{
			

		}
	},
	methods:{
		
	}

}
</script>
<style scoped lang="sass">
ul
	padding-left: 40px
</style>
