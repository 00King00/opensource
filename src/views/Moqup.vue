<template lang="pug">
.full-height
	router-view
	div(v-if="$route.path == '/moqup'")
		v-layout(justify-space-between align-center).px-3.pt-4
			.headline.font-weight-bold {{ $route.name}}
		v-card(elevation="0").px-0.mx-3
		v-card-text.px-0
			v-layout.mb-3(justify-space-between align-center wrap)
				v-flex.text-xs-right(xs12)
					v-card(elevation="0").mx-3
						v-card-text.py-1
							v-btn.scoped-btn(color="success" to="/moqup/design-edit" outline)
								v-icon add
							v-btn-toggle(v-model="toggle_btn" dark)
								v-btn( value="data_all" color="info")
									span All
									span.badge {{ data_all.length}}
								v-btn( value="data_yes" color="info")
									v-icon star
								v-btn( value="data_yours" color="info")
									span Yours
									span.badge {{ data_yours.length}}
						v-divider
				v-flex(xs12)
					v-data-table.px-3.pb-3.my-data-table-all(:headers='headers', :items='data_selected')
						template(v-slot:items='props')
							td.text-xs-left
								router-link.nav-link(:to="`/moqup/design-view/${props.item.id}`") {{ props.item.title }}
							td.text-xs-left {{ props.item.user }}
							td.text-xs-left {{ props.item.update }}
</template>
<script>
export default {
  name: '',
	data(){
		return{
			headers: [
				{ text: 'Title', align: 'left', sortable: true, value: "title", class: 'font-weight-black' },
				{ text: 'User', sortable: true, value: "user", class: 'font-weight-black' },
				{ text: 'LastUpdate', sortable: true, value: "update", class: 'font-weight-black' },
			],
			data_all:[
				{
					title: "Comments for Issues",
					update: "4 months ago",
					user: 50,
					id: "1"
				},
				{
					title: "Delegates for issues",
					update: "3 months ago",
					user: 40,
					id: "2"
				},
				{
					title: "Votes for website settings",
					update: "1 months ago",
					user: 90,
					id: "3"
				},
				{
					title: "Comments for Moqups",
					update: "1 months ago",
					user: 10,
					id: "4"
				},
				{
					title: "tese",
					update: "",
					user: 0,
					id: "5"
				},
			],
			data_yes:[],
			data_yours:[],
			toggle_btn: 'data_all',

		}
	},
	computed:{
		data_selected(){
			if('data_all' == this.toggle_btn){
				return this.data_all
			}else if('data_yes' == this.toggle_btn){
				return this.data_yes
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
.v-btn.scoped-btn
	min-width: auto
	padding: 0 8px
.badge
	color: black
	background-color: #FAFAFA
	padding: 0 4px
	margin: 0 2px
	border-radius: 3px
	display: inline-block
.v-btn-toggle .v-btn
	opacity: 0.8
	&.v-btn--active
		opacity: 1
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

</style>
