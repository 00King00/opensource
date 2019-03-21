<template lang="pug">
v-card.mx-3.mt-4(flat)
	v-card-text
		.headline.text-xs-left Add Moqup
		v-divider.my-2
		v-alert.my-3(:value="true", color="#17a2b8" type="info")
			.title.text-xs-left.mb-2 Important
			.body-2.text-xs-left Use UI elements from AdminLTE 3, Bootstrap 4 and Font Awesome 5 examples.
		input.input
		v-tabs
			v-tabs-slider(color="#17a2b8")
			v-tab(v-for='(item, index) in tabsItem', :href="`#tab-${index+1}`") {{ item }}
			v-tab-item(value='tab-1')
				v-card(flat)
					v-card-text
						editor(v-model="contentHTML" @init="editorInit" lang="html" theme="chrome" width="100%" height="350")
			v-tab-item(value='tab-2')
				v-card(flat)
					v-card-text
						editor(v-model="contentCSS" @init="editorInit" lang="css" theme="chrome" width="100%" height="350")
			v-tab-item( value='tab-3')
				v-card(flat)
					v-card-text(v-html="contentHTML")
</template>
<script>
export default {
	data(){
		return{
			contentHTML: '<h1>Jade - node template engine</h1>\n<div class="col" id="container">\n\t<p>You are amazing</p>\n\t<p>Jade is a terse and simpletemplating language with astrong focus on performanceand powerful features.</p>\n</div>',
			contentCSS:'#launch-dialog {\n\tbackground: tomato;\n\tborder-radius: 4px;\n\tcolor: #fff;font-family: Helvetica, Arial, sans-serif;\n\tpadding: 0.5rem 1rem;\n\tposition: static;\n}',
			tabsItem: [ "HTML", "CSS", "Preview"]

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
	},

}
</script>
<style scoped lang="sass">
.v-alert
	border-radius: 5px
.input
	width: 100%
	height: 35px
	border: 1px solid #CFD8DC
	padding: 5px 20px
	border-radius: 5px
	outline: none
</style>
