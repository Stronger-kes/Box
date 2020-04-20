<template>
    <div class="xjt_goods">
        <ul>
            <li v-for="(item,index) in list" :key="index" v-if="item.cid!=0">
                <div class="img">
                    <img :src="item.pic" alt="">
                </div>
                <div>
                    <p>
                        {{item.title}}
                    </p>
                    <span>
                         {{item.price}}
                    </span>
                   
                       <van-cell is-link v-model="show" @click="showPopup">收藏</van-cell>
                       <van-popup v-model="show" position="button" :style="{ height: '30%' }" 
                    
                   
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'Goods',
        data() {
            return {
                list:[],
                 show: false,
            }
        },
        mounted () {
             this.$axios.get('/static/list.json').then(res=>{
                console.log(res)
                this.list = res.data.result
            })
        },
        methods: {
            showPopup() {
      this.show = true;
    },
        },
        watch: {
            
        }
    }
</script>

<style lang="scss" scoped>
.xjt_goods {
    width: 100%;
    height: 100%;
    flex: 1;
    overflow: hidden;
}
.xjt_goods {
    ul {
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
        li {
            width: 50%;
            img {
                width: 100%;
            }
            p {
                font-size: 0.3rem;
            }
            span {
                font-size: 0.23rem;
            }
        }
    }
}
</style>