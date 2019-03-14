<template lang="pug">
.full-height.issues
	v-layout(justify-space-between align-center).px-3.py-4
		.headline.font-weight-bold {{ $route.name}}
		v-breadcrumbs(:items='items')
			template(v-slot:item='props')
				v-breadcrumbs-item(:to='props.item.to', :disabled="props.item.disabled") {{ props.item.text }}
	v-card(elevation="0").px-0.mx-3
		v-card-text
			v-layout.mb-3(justify-space-between align-center wrap)
				v-flex.text-xs-left(xs12 sm6)
					v-btn-toggle(v-model="toggle_btn" dark)
						v-btn( value="data_new" color="info")
							span New
							span.badge {{ data_new.length}}
						v-btn( value="data_yes" color="info") Yes
						v-btn( value="data_no" color="info") No
						v-btn( value="data_yours" color="info")
							span Yours
							span.badge {{ data_yours.length}}
					v-spacer
				v-flex(xs12 sm6)
					v-layout(justify-space-between)
						v-flex(align-self-center)
							v-layout(justify-space-between align-center)
								input(type="text", placeholder="Search")
								v-btn.px-0(icon).ma-0
									v-icon search
						v-btn(color="success") New Issue
			v-layout
				v-flex
					v-data-table.elevation-1.px-3.pb-3(:headers='headers', :items='data_all')
						template(v-slot:items='props')
							td.text-xs-left
								a(href="#") {{ props.item.title }}
							td.text-xs-left {{ props.item.date }}
							td.text-xs-left.vote 
								span {{ props.item.votes }}%
								v-progress-linear(color='success', height='20', :value='props.item.votes')
</template>
<script>
export default {
  name: '',
	data(){
		return{
			headers: [
				{ text: 'Title', align: 'left', sortable: true, value: "title", class: 'font-weight-black' },
				{ text: 'Created at', sortable: true, value: "date", class: 'font-weight-black' },
				{ text: 'Votes', sortable: false, class: 'font-weight-black' },
			],
			data_new:[
				{
					title: "Comments for Issues",
					date: "4 months ago",
					votes: 50,
					id: "1"	
				},
				{
					title: "Delegates for issues",
					date: "3 months ago",
					votes: 40,
					id: "2"	
				},
				{
					title: "Votes for website settings",
					date: "1 months ago",
					votes: 90,
					id: "3"	
				},
				{
					title: "Comments for Moqups",
					date: "1 months ago",
					votes: 10,
					id: "4"	
				},
				{
					title: "tese",
					date: "",
					votes: 0,
					id: "5"	
				},
			],
			data_yes:[
				{
					title: "Comments for Issues",
					date: "4 months ago",
					votes: 50,
					id: "1"	
				},
			],
			data_no:[],
			data_yours:[
				{
					title: "Delegates for issues",
					date: "3 months ago",
					votes: 40,
					id: "2"	
				},
			],
			toggle_btn: 'data_new',
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
	computed:{
		data_all(){
			if('data_new' == this.toggle_btn){
				return this.data_new	
			}else if('data_yes' == this.toggle_btn){
				return this.data_yes	
			}else if('data_no' == this.toggle_btn){
				return this.data_no	
			}else{
				return this.data_yours
			}
		}
	},
	methods:{

	}

}
</script>
<style lang="sass" scoped>
.badge
	color: black
	background-color: #FAFAFA
	padding: 0 4px
	marin: 0 2px
	border-radius: 3px
	display: inline-block
.v-btn-toggle .v-btn
	opacity: 0.8
.v-btn
	text-transform: capitalize
	span
		display: inline-block
		margin: 0 5px 0 0
.v-btn--icon:before
	border-radius: unset
.v-btn--icon:before
	background-color: currentColor
a
	text-decoration: none
input
	border: 1px solid grey
	width: 100%;
	padding: 6px;
.theme--light.v-table thead th
	color: red

</style>
