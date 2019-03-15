<template lang="pug">
div
	v-layout(justify-space-between align-center).px-3.py-4
		.headline.font-weight-bold View website setting: {{ fetchData.name}}
	v-layout(justify-space-between align-center wrap).px-3
		v-flex(xs12)
			v-card(elevation="1")
				v-card-text.text-xs-right
					v-btn(color='success') New value
		v-flex(xs12)
			v-data-table.elevation-4.full-width(:headers='headers', :items='data_mockup', hide-actions, :rows-per-page-items='[5, 15, 20, 25]')
				template(v-slot:items='props')
					td.text-xs-left
						v-icon.d-inline-block(color="yellow" ) {{props.item.icon}}
					td.text-xs-left {{ props.item.value }}
					td.text-xs-left.vote 
						span {{ props.item.votes }}%
						v-progress-linear(color='success', height='20', :value='props.item.votes')
					td.text-xs-left
						.badge.px-2(v-if="!props.item.vote") Your vote
						v-btn.mx-0(v-if="props.item.vote") Vote
</template>
<script>
export default {
  name: '',
	data(){
		return{
			data:[
				{
					name: "days_count_to_calculate_active_rating",
					value: "31",
					last_update: "a month ago",
					id: "1"
				},
				{
					name: "issue_text_field_max_value",
					value: "10000",
					last_update: "a month ago",
					id: "2"
				},
				{
					name: "moqup_quantity_value_per_one_rating",
					value: "3",
					last_update: "3 months ago",
					id: "3"
				},
				{
					name: "support_group_quantity_value_per_one_rating",
					value: "1",
					last_update: "3 months ago",
					id: "4"
				},
				{
					name: "support_group_member_quantity_value_per_one_rating",
					value: "1",
					last_update: "3 months ago",
					id: "5"
				},
				{
					name: "issue_quantity_value_per_one_rating",
					value: "3",
					last_update: "3 months ago",
					id: "6"
				},
				{
					name: "moqup_html_field_max_value",
					value: "100000",
					last_update: "3 months ago",
					id: "7"
				},
				{
					name: "moqup_css_field_max_value",
					value: "10000",
					last_update: "3 months ago",
					id: "8"
				},
				{
					name: "website_setting_min_vote_percent_to_apply_change",
					value: "70",
					last_update: "3 months ago",
					id: "9"
				},
			],
			fetchData: [],
			headers: [
				{ text: '', sortable: false, align: 'left',  },
				{ text: 'Value', sortable: false, class: 'font-weight-black' },
				{ text: 'Vote', sortable: false, class: 'font-weight-black' },
				{ text: '', sortable: false,   },
			],
			data_mockup:[
				{
					icon: "star_rate",
					value: 31,
					votes: 99,
					vote: false
				},
				{
					icon: "",
					value: 31,
					votes: 0,
					vote: true
				}
			]

		}
		
	},
	computed:{
		
	},
	created(){
		this.data.some((item)=>{ 
			if(item.id == this.$route.params.id){
				return this.fetchData = item
			}
		})
		console.log(this.fetchData);
		
	},
	methods:{

	}

}
</script>
<style scoped lang="sass">
.v-btn
	text-transform: capitalize
.v-icon
    max-width: 25px
.badge
	color: #fff
	background-color: #007bff
	display: inline-block
	border-radius: 3px
</style>
