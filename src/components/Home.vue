<template>
    <div class="xjt_home">
        <div class="xjt_header">
            <input type="text" placeholder="搜索商品" @click="search()">
        </div>
        <div class="xjt_main">
            <nav id="wrapper">
                <ul>
                    <router-link :to="'/home/goods?id=' + item._id" tag="li" v-for="(item,index) in list" :key="index" v-if="item.pid==0">
                        {{item.title}}
                    </router-link>
                </ul>
            </nav>
            <div class="xjt_px">
                排序
            </div>
            <div class="xjt_cont">
                <Classify></Classify>
                <router-view></router-view>
            </div>  
        </div>
        <div class="xjt_footer">
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import Footer from '../components/footer'
import Classify from '../components/Classify'
import Iscroll from 'iscroll'
    export default {
        components:{Footer,Classify},
        name:'Home',
        data() {
            return {
                list:[]
            }
        },
        mounted() {
            //阻止浏览器的默认行为
               document.addEventListener("touchmove", function (ev) {
                    ev.preventDefault()
                }, { passive: false })
            let iscroll = new Iscroll("#wrapper",{
                scrollX:true,
                scrollY:false
            });


           
            this.$axios.get('/static/fenlei.json').then(res=>{
                console.log(res)
                this.list = res.data.result
            })
        },
        methods: {
            search() {
                this.$router.push('/search')
            }
        },
    }
</script>

<style lang="scss" scoped>
.xjt_home {
    width: 100%;
    height: 100%;
    
}
.xjt_main,html,body{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.xjt_main {
    flex: 1;
    overflow: auto;
}

.xjt_header{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
        width: 80%;
        height: 0.6rem;
        border-radius: 0.3rem;
        border: none;
        background-color: #eee;
        font-size: 0.2rem;
        padding-left: 0.5rem;
    }
}

nav{
    width: 100%;
    height: 0.9rem;
    line-height: 1rem;  
    // overflow: auto;
    ul{
        width: 150%;
        display: flex;
        align-items: center;
        padding-left: .2rem;
        li{
            flex: 1;
            font-size: 0.2rem;
        }
    }
}

.xjt_cont {
    width: 100%;
    height: 100%;
    background-color: #eee;
    flex: 1;
    overflow: hidden;   
}
</style>