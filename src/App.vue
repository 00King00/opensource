<template lang="pug">
	v-app
		v-content
			v-container(fluid)
				app-header
				
</template>
<script>
import AppHeader from '@/components/AppHeader'
export default{
	data(){
		return{
			
		}
	},
	components:{
		AppHeader
	}
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
