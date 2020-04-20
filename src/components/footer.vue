<template>
    <div class="xjt_footer">
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="search">分类</van-tabbar-item>
            <van-tabbar-item icon="friends-o">购物车</van-tabbar-item>
            <van-tabbar-item icon="setting-o">个人</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        name:'Footer',
        data() {
            return {
               active: 0, 
            }
        },
    }
</script>

<style lang="scss" scoped>
.xjt_footer  {
    width: 100%;
    height: 1rem;
    
}
</style>