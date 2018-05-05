<template>
	<div class="home">
		
			action
		
	</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
//import nav from '@/components/nav'


import { mapGetters } from 'vuex'

export default {
	
	components: {
		
	},
	data() {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				slidesPerView: 1,
				autoplay: 5000,
				paginationClickable: true,
				spaceBetween: 30,
				loop: true
			}
		}
	},
	created() {
        if (this.travelListIndex.length == 0) {
            this.$store.dispatch('getTravelsList')
        }
    },
	computed: {
		...mapGetters([
			'travelListIndex'
		])
	},
	mounted(){
		
    },
	methods: {
		
	}
}
</script>

<style scoped lang="scss">





</style>