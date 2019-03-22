<template lang="pug">
div
	.title.my-3 Params: {{ $route.params.id }}
		v-card.mx-3
		v-card-text
			v-tabs
				v-tabs-slider(color="#17a2b8")
				v-tab(v-for='(item, index) in tabsItem', :href="`#tab-${index+1}`") {{ item }}
				v-tab-item( value='tab-1')
					comment(cansel :comments="comments")
				v-tab-item(value='tab-2')
					v-card(flat)
						v-card-text
							editor(v-model="contentHTML" @init="editorInit" lang="html" theme="chrome" width="100%" height="350")
				v-tab-item(value='tab-3')
					v-card(flat)
						v-card-text
							editor(v-model="contentCSS" @init="editorInit" lang="css" theme="chrome" width="100%" height="350")
</template>
<script>
import Comment from '@/components/Comment.vue'
export default {
	data(){
		return{
			contentView:'',
			contentHTML: '<h1>Jade - node template engine</h1>\n<div class="col" id="container">\n\t<p>You are amazing</p>\n\t<p>Jade is a terse and simpletemplating language with astrong focus on performanceand powerful features.</p>\n</div>',
			contentCSS:'#launch-dialog {\n\tbackground: tomato;\n\tborder-radius: 4px;\n\tcolor: #fff;font-family: Helvetica, Arial, sans-serif;\n\tpadding: 0.5rem 1rem;\n\tposition: static;\n}',
			tabsItem: ["View", "HTML", "CSS"],
			comments:[
				{
					id: "unic1",
					userName: 'Vitaliy Shevchenko',
					date: "a month ago",
					text: "test \nREPLY",
					replies: [{
						userName: 'Vitaliy Shevchenko',
						date: "a month ago",
						text: "test \nREPLY",
					}],
				}
			]
		}
	},
	methods:{
		editorInit: function () {
			require('brace/ext/language_tools')
			require('brace/mode/html')
			require('brace/mode/javascript')
			require('brace/mode/less')
			require('brace/theme/chrome')
			require('brace/snippets/javascript')
		},
	},
	components: {
		editor: require('vue2-ace-editor'),
		Comment
	},

}
</script>
<style scoped lang="sass">

</style>
