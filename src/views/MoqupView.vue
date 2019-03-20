<template lang="pug">
div
	.title.my-3 Params: {{ $route.params.id }}
	v-tabs
		v-tab(v-for='n in 3', :href="`#tab-${n}`") Item {{ n }}
		v-tab-item(v-for='i in 3', :key='i', :value='"tab-" + i')
			v-card(flat)
				v-card-text() text {{i}}
</template>
<script>
export default {
	name: '',
	data(){
		return{
		

		}
	},
	methods:{
	editorInit: function () {
		require('brace/ext/language_tools') //language extension prerequsite...
		require('brace/mode/html')                
		require('brace/mode/javascript')    //language
		require('brace/mode/less')
		require('brace/theme/chrome')
		require('brace/snippets/javascript') //snippet
	},

	},
	components: {
        editor: require('vue2-ace-editor'),
    },

}
</script>
<style scoped lang="sass">

</style>
