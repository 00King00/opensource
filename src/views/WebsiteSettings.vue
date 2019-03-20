<template lang="pug">
.full-height
	router-view
	.website-settings-page(v-if="$route.path == '/website-settings'")
		v-layout(justify-space-between align-center).px-3.py-4
			.headline.font-weight-bold {{ $route.name}}
			v-breadcrumbs(:items='breadcrumbs')
				template(v-slot:item='props')
					v-breadcrumbs-item(:to='props.item.to', :disabled="props.item.disabled") {{ props.item.text }}
		v-layout()
			v-data-table.px-3.pb-3.full-width(:headers='headers', :items='data', :rows-per-page-items='[10, 15, 20, 25]')
				template(v-slot:items='props')
					td.text-xs-left
						router-link.nav-link(:to="`/website-settings/view/${props.item.id}`") {{ props.item.name}}
					td.text-xs-left {{ props.item.value }}
					td.text-xs-left {{ props.item.last_update }}
</template>
<script>
export default {
  name: '',
	data(){
		return{
			breadcrumbs: [
				{
				text: 'Home',
				disabled: false,
				to: '/'
				},
				{
				text: 'Website settings',
				disabled:true,
				},
			],
			headers: [
				{ text: 'Name', sortable: false, class: 'font-weight-black' },
				{ text: 'Value', sortable: false, class: 'font-weight-black' },
				{ text: 'Last update', sortable: false, class: 'font-weight-black' },
			],
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
			]

		}
	},
	created(){
	},
	methods:{

	}

}
</script>
<style scoped lang="sass">
a
	text-decoration: none
</style>
