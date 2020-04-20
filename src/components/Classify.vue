<template>
    <div class="xjt_classify">
        <main>
            <router-view></router-view>
        </main>
        
    </div>
</template>

<script>
    export default {
        name:'Classify',
        data() {
            return {
                
            }
        },
    }
</script>

<style lang="scss" scoped>

.xjt_classify ,html,body{
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
  main {
      flex: 1;
      overflow: hidden;;
  }
}
</style>