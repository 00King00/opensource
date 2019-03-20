<template lang="pug">
div
	.title.pt-5.pb-2.text-xs-left.px-3 Language
	v-data-table.px-3.pb-3(:headers='headers', :items='data', :rows-per-page-items='[10, 15, 20, 25]')
		template(v-slot:items='props')
			td.text-xs-left {{ props.index+1 }}
			td.text-xs-left {{ props.item.name }}
			td.text-xs-left {{ props.item.code }}
			td.text-xs-left {{ props.item.ascii }}
</template>
<script>
export default {
	name: '',
	data(){
		return{
			headers: [
				{ text: '#', align: 'left', sortable: false, class: 'font-weight-black' },
				{ text: 'Name', sortable: false, class: 'font-weight-black' },
				{ text: 'Code1', sortable: false, class: 'font-weight-black' },
				{ text: 'ASCII)', sortable: false, class: 'font-weight-black' },
			],
			data:[
				{
					name: 'Afaraf',
					code: 'aa',
					ascii: 'Afar',
				},
				{
					name: 'аҧсуа бызшәа, аҧсшәа',
					code: 'ab',
					ascii: 'Abkhaz',
				},
				{
					name: 'avesta',
					code: '	ae',
					ascii: 'Avestan',
				},
				{
					name: 'Afrikaans',
					code: '	af',
					ascii: 'Afrikaans',
				},
				{
					name: 'Akan',
					code: 'ak',
					ascii: 'Akan',
				},
				{
					name: 'አማርኛ',
					code: 'am',
					ascii: 'Amharic',
				},
				{
					name: 'aragonés',
					code: 'an',
					ascii: 'Aragonese',
				},
				{
					name: 'العربية',
					code: 'ar',
					ascii: 'Arabic',
				},
				{
					name: 'অসমীয়া',
					code: '	as',
					ascii: 'Assamese',
				},
				{
					name: 'авар мацӀ, магӀарул мацӀ',
					code: 'av',
					ascii: 'Avaric',
				},
				{
					name: 'aymar aru',
					code: 'ay',
					ascii: 'Aymara',
				},
				{
					name: 'azərbaycan dili',
					code: 'az',
					ascii: 'Azerbaijani',
				},
				{
					name: 'башҡорт теле',
					code: 'ba',
					ascii: 'Bashkir',
				},
				{
					name: 'беларуская мова',
					code: 'be',
					ascii: 'Belarusian',
				},
				{
					name: 'български език',
					code: 'bg',
					ascii: 'Bulgarian',
				},
				{
					name: 'भोजपुरी',
					code: 'bh',
					ascii: 'Bihari',
				},
				{
					name: 'Bislama',
					code: 'bi',
					ascii: 'Bislama',
				},
				{
					name: 'bamanankan',
					code: 'bm',
					ascii: 'Bambara',
				},
				{
					name: 'বাংলা',
					code: 'bn',
					ascii: 'Bengali, Bangla',
				},
			]

		}
	},
	methods:{

	}

}
</script>
<style scoped lang="sass">

</style>
