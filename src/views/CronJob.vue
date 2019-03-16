<template lang="pug">
.full-height
	v-layout(justify-space-between align-center).px-3.py-4
		.headline.font-weight-bold {{ $route.name}}
	v-card(elevation="0").px-0.mx-3
		v-card-text
			v-layout.mb-3(justify-end align-center wrap)
				v-flex(xs12).text-xs-right.pb-3
					v-btn( :outline="all" color="info"  @click="toggle('all')", small) All
					v-btn( :outline="WikipediaParser" color="info" @click="toggle('WikipediaParser')", small) WikipediaParser
				v-flex(xs12)
					v-divider
				v-flex(xs12)
					v-data-table.elevation-1.px-3.pb-3.my-data-table(:headers='headers', :items='data')
						template(v-slot:items='props')
							td.text-xs-left {{ props.item.date }}
							td.text-xs-left {{ props.item.message }}
							td.text-xs-left {{ props.item.name}}
</template>
<script>
export default {
  name: '',
	data(){
		return{
			all: false,
			WikipediaParser: true,
			headers: [
				{ text: 'Created at', sortable: true, value: "date", class: 'font-weight-black' },
				{ text: 'Message', align: 'left', sortable: true, value: "message", class: 'font-weight-black' },
				{ text: 'Name', sortable: false, class: 'font-weight-black' },
			],
			data: [
				{
					date: "15.03.2019 18:31:11",
					message: "No page for parsing.",
					name: "WikinewsParser",
				},
				{
					date: "15.03.2019 18:30:11",
					message: "Running wikinews parser....",
					name: "WikinewsParser",
				},
				{
					date: "15.03.2019 18:29:11",
					message: "Found 0 tokens to update",
					name: "WikinewsParser",
				},
				{
					date: "15.03.2019 18:28:11",
					message: "Found 0 tokens to update.",
					name: "WikinewsParser",
				},
				{
					date: "15.03.2019 18:27:11",
					message: "Running languages parser.",
					name: "WikinewsParser",
				},
				{
					date: "15.03.2019 18:31:11",
					message: "No page for parsing.",
					name: "WikinewsParser",
				},
				{
					date: "15.03.2019 18:30:11",
					message: "Running wikinews parser....",
					name: "WikinewsParser",
				},
				{
					date: "15.03.2019 18:29:11",
					message: "Found 0 tokens to update",
					name: "WikinewsParser",
				},
				{
					date: "15.03.2019 18:28:11",
					message: "Found 0 tokens to update.",
					name: "WikinewsParser",
				},
				{
					date: "15.03.2019 18:27:11",
					message: "Running languages parser.",
					name: "WikinewsParser",
				},
			]

		}
	},
	methods:{
		toggle(val){
			if (val=='all'){ this.all = false; this.WikipediaParser = true}
			else{ this.all = true; this.WikipediaParser = false}
		}
	}

}
</script>
<style scoped lang="sass">

</style>
