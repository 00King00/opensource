<template lang="pug">
	v-card.text-sm-left
		v-card-text
			p
				| OpenSourceWebsite (OSW) is an open source website for the world's largest online social community. The Website is managed by users. The Website will look like and what functions it will have depends on users' decisions. The Website is updated after each code change. So everyone can influence how the Website works.
			p We want the Web to be even better. We want more people using it for more things. We want it to continue to drive creativity, education and economic growth. And we want to empower people to help shape the Web as they move more of their lives online
		v-card-title.headline.pt-0.pb-2.font-weight-bold Our vision and mission
		v-card-text.py-0
			ul.text-sm-left(v-for="(item, index) in list" :key="`list_${index}`")
				li
					a(href="#") {{item.title}}
		v-card-title.font-weight-bold.px-4 Join to us!
</template>

<script>
export default {
  name: 'home',
	data(){
		return{
			list: [
				{title: "Electronic voting"},
				{title: "E-democracy"},
				{title: "Collaborative e-democracy"},
				{title: "Participatory democracy"},
				{title: "E-government"},
				{title: "Open-source governance"},
				{title: "Open government"},
				{title: "E-participation"},
				{title: "Mass collaboration"},
				{title: "Digital collaboration"},
				{title: "Collective intelligence"},
				{title: "Crowdsourcing"},
				{title: "Data activism"},
				{title: "Participatory monitoring"},
				{title: "Crowdsensing"},
				{title: "Internet activism"},
				{title: "Active citizenship"},
				{title: "Radical transparency"},
				{title: "Reputation system"},
				{title: "Public participation"},
				{title:" Wisdom of the crowd"},
				{title: "Virtual volunteering"},
				{title: "Social collaboration"},
				{title: "Collaborative innovation network"},
				{title: "Crowdcasting"},
				{title: "Open research"},
				{title: "Crowdfixing"},
			]

		}
	},
	methods:{

	}

}
</script>
<style scoped lang="sass">
a
	color: #007bff
	text-decoration: none
	padding: 0 10px
	font-size: 1rem
	&:hover
		color: #0056b3
ul
	padding-left: 40px
</style>
