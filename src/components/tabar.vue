<template>
	<div class="tabar" v-show="isShowTabbar">
		<div class="tab">
			<div class="tab-item tab_home">
				<router-link to="/home">
					<div class="tab-icon"></div>
					<div class="tab-text">随益</div>
				</router-link>
			</div>
			<div class="tab-item tab_running">
				<router-link to="/action">
					<div class="tab-icon"></div>
					<div class="tab-text">传微行动</div>
				</router-link>
			</div>
			<div class="tab-item tab_travel">
				<router-link to="/mall">
					<div class="tab-icon"></div>
					<div class="tab-text">爱心商城</div>
				</router-link>
			</div>
			<div class="tab-item tab_user">
				<router-link to="/user">
					<div class="tab-icon"></div>
					<div class="tab-text">我的</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {

		}
	},
	computed: {
		isShowTabbar () {
			let routeLength = this.$route.path.split('/').length
			return routeLength > 2 ? false : true
		}
	}
}
</script>

<style scoped lang="scss">
.tabar{
	.tab{
		position: fixed;
		bottom: 0;
		left: 0;
	    display: flex;
	    width: 100%;
	    height: px2rem(120px);
	    line-height: px2rem(120px);
	    background: #fff;
		box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
	    &:after{
			display: block;
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			border-top: 1px solid rgba(7, 17, 27, 0.1);
			content: '';
		}
	    	
			.tab_home{
				text-align:center;
				flex: 1;
			    text-align: center;
				a{
				display: block;
				padding: 10px;
				color: rgb(77, 85, 93);
					&.active{
						text-decoration: none;
						 .tab-icon{
						    width: .7rem;
							height: .7rem;
							background: url(../assets/images/tab_home_active.png) no-repeat;
							background-size:100% 100%; 
						 }
						 .tab-text{
							 color:#2da7e0;
						 }
					}
	            .tab-icon{
					width: .7rem;
					height: .7rem;
					margin: auto; //外面的div高度的一半
					background: url(../assets/images/tab_home.png) no-repeat;
					background-size:100% 100%; 
				}
				.tab-text{
					font-family:PingFangSC-Regular;
					font-size:.16rem;
					color:#757783;
					letter-spacing:1.45px;
					text-align:center;
				}
			  }
			}
			.tab_running{
				flex: 1;
			    text-align: center;
				a{
				display: block;
				padding: 10px;
				color: rgb(77, 85, 93);
					&.active{
					    color:#2da7e0;
						text-decoration: none;
						 .tab-icon{
						    width: .7rem;
							height: .7rem;
							background: url(../assets/images/tab_running_active.png) no-repeat;
							background-size:100% 100%; 
						 }
						 .tab-text{
							 color:#2da7e0;
						 }
					}
	            .tab-icon{
					margin: auto; //外面的div高度的一半
					width: .7rem;
					height: .7rem;
					background: url(../assets/images/tab_running.png) no-repeat;
					background-size:100% 100%; 
				}
				.tab-text{
					font-family:PingFangSC-Regular;
					font-size:.16rem;
					color:#757783;
					letter-spacing:1.45px;
					text-align:center;
				}
				}
			}
			.tab_travel{
				flex: 1;
			    text-align: center;
				a{
				display: block;
				padding: 10px;
				color: rgb(77, 85, 93);
					&.active{
					    color:#2da7e0;
						text-decoration: none;
						 .tab-icon{
						    width: .7rem;
							height: .7rem;
							background: url(../assets/images/tab_travel_active.png) no-repeat;
							background-size:100% 100%; 
						 }
						 .tab-text{
							 color:#2da7e0;
						 }
					}
	            .tab-icon{
					margin: auto; //外面的div高度的一半
					width: .7rem;
					height: .7rem;
					background: url(../assets/images/tab_travel.png) no-repeat;
					background-size:100% 100%; 
				}
				.tab-text{
					font-family:PingFangSC-Regular;
					font-size:.16rem;
					color:#757783;
					letter-spacing:1.45px;
					text-align:center;
				}
				}
			}
			.tab_user{
				flex: 1;
			    text-align: center;
				a{
				display: block;
				padding: 10px;
				color: rgb(77, 85, 93);
					&.active{
					    color:#2da7e0;
						text-decoration: none;
						 .tab-icon{
						    width: .7rem;
							height: .7rem;	
							background: url(../assets/images/tab_user_active.png) no-repeat;
							background-size:100% 100%; 
						 }
						 .tab-text{
							 color:#2da7e0;
						 }
						 
					}
	            .tab-icon{
					margin: auto; //外面的div高度的一半
					width: .7rem;
					height: .7rem;
					background: url(../assets/images/tab_user.png) no-repeat;
					background-size:100% 100%; 
				}
				.tab-text{
					font-family:PingFangSC-Regular;
					font-size:.16rem;
					color:#757783;
					letter-spacing:1.45px;
					text-align:center;
				}
				}
			}
			
	}
}
</style>