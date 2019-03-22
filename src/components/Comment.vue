<template lang="pug">
v-card(flat)
	v-card-text.pb-0
		v-layout(align-center)
			v-icon.mr-3(color="primary" x-large)  power_settings_new
			v-textarea( label='Add a public comment...',  hint='Message cannot be blank.' auto-grow solo)
	v-card-actions.pr-3.pb-3
		v-spacer
		v-btn(v-if="cansel") Cancel
		V-btn(color="success" @click="test") Comment
	v-card(color="#f7f7f7")
		v-card-text( v-if="comments.length == 0")
		v-card-text( v-else v-for="comment in comments" :key="comment.id" )
			v-layout(align-start)
				v-flex(shrink)
					v-icon.mr-3(color="primary" x-large)  power_settings_new
				v-flex()
					.subheading.text-xs-left
						.d-inline-block {{comment.userName}}
						span.caption.font-weight-light.pl-2 {{comment.date}}
					| {{comment.replies.length+1}}
</template>
<script>
export default {
	props:{
		cansel:{
			type: Boolean,
			default: false
		},
		comments:{
			type: Array,
			default(){
				return []
			}
		}
	},
	data(){
		return{

		}
	},
	methods:{
		test(){
			console.log(this.comments);
		}
	}

}
</script>
<style scoped lang="sass">

</style>
