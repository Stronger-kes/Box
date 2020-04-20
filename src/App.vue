<template>
  <div id="app">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {

    }
  },
}
</script>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
  list-style: none;
}
#app,html,body{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
main {
  flex: 1;
  overflow:auto;
}
</style>
