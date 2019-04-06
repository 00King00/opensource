<template lang="pug">
v-card(flat)
	v-card-text.pb-0
		v-layout(align-center)
			v-icon.mr-3(color="primary" x-large)  power_settings_new
			v-textarea( label='Add a public comment...',  hint='Message cannot be blank.' auto-grow solo)
	v-card-actions.pr-3.pb-3
		v-spacer
		v-btn(v-if="cansel") Cancel
		V-btn(color="success") Comment
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
						.text.font-weight-regular.py-2 {{comment.text}}
						span.show-replies.caption.font-weight-light(v-if="comment.replies.length" @click="showReplies = !showReplies")
							span(v-if="!showReplies") View
							span(v-if="showReplies") Hide
							|  replies ({{ comment.replies.length }})
						v-card(color="#f7f7f7" v-if="showReplies && comment.replies.length" flat)
							v-card-text( v-for="comment in comment.replies" :key="comment.id" )
								v-layout(align-start)
									v-flex(shrink)
										v-icon.mr-3(color="primary" x-large)  power_settings_new
									v-flex()
										.subheading.text-xs-left
											.d-inline-block {{comment.userName}}
											span.caption.font-weight-light.pl-2 {{comment.date}}
											.text.font-weight-regular.py-2 {{comment.text}}
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
			showReplies: false,
		}
	},
	methods:{

	}

}
</script>
<style scoped lang="sass">
.text
	line-height: 1.5
.show-replies
	cursor: pointer
</style>
