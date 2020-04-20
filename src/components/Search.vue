<template>
    <div class="sear">
        <header class="sea-header">
            <span class="el-icon-arrow-left" @click="GotoHome"></span>
            <input type="text" v-model="name" @keyup.enter="add" @input="search" placeholder="输入商家、商品名称">
            <h3>取消</h3>
        </header>
        <main>
            <div class="sea-list" v-show="flag">
                <ul>
                    <li v-for="(item,key) in lists" :key="key" @click="save(item.name)">
                        {{item.name}}
                    </li>
                </ul>
            </div>
            <section v-show="!flag">
                <div class="sea-title">
                    <h3>历史搜索</h3>
                    <span class="el-icon-delete" @click="delAll"></span>
                </div>
                <div class="sea-conts">
                    <ol>
                        <li v-for="(item,key) in lishi" :key="key">
                            {{item.name}}
                        </li>
                    </ol>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
    export default {
        name:'Sea',
        data() {
            return {
                list:null,
                lists:[],
                name:"",
                flag:false,
                lishi: JSON.parse(localStorage.getItem('list'))||[],
            }
        },
        mounted() {
            this.$axios({
                url:'/static/data.json',
                methods:'get'
            }).then(res=>{
                this.list = res.data.list;
            })
        },
        methods: {
            GotoHome() {
                this.$router.go(-1)
            },
            search() {
                this.lists = [];
                if(this.name=='') {
                    return false;
                }else{
                    this.list.forEach((e)=>{
                        if(e.name.indexOf(this.name) >=0) {
                            this.lists.push(e)
                        }
                    })
                }
            },
            add() {
                let obj = {name:this.name};
                let arr = JSON.parse(localStorage.getItem('list')) || [];
                let index = arr.indexOf((e)=>{
                    return e.name == obj.name
                });
                if(index =-1) {
                    arr.push(obj)
                    if(arr.length>6) {
                        arr.splice(0,1)
                    }
                }
                localStorage.setItem('list',JSON.stringify(arr));

                this.$router.push("/detail?name=" + obj.name)
            },
            save(name) {
                let obj = {name:name};
                let arr = JSON.parse(localStorage.getItem('list')) || [];
                let index = arr.indexOf((e)=>{
                    return e.name == obj.name
                });
                if(index =-1) {
                    arr.push(obj)
                }
                localStorage.setItem('list',JSON.stringify(arr));

                this.$router.push("/detail?name=" + obj.name)
            },
            delAll() {
                this.lishi = [];
                localStorage.setItem('list',JSON.stringify(this.lishi))
            }

        },
        watch:{
            lists(val) {
                if(val.length==0) {
                    this.flag = false
                }else {
                    this.flag = true
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

.sea,html,body{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #eee;
}
.sea-header {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 0.01rem solid #eee;
    span {
        font-size: 0.5rem;
    }
    input {
        width: 5rem;
        height: 0.5rem;
        background-color: #eee;
        border: none;
        font-size: 0.25rem;
    }
    h3 {
        font-size: 0.32rem;
    }
}

.sea-list{
    width: 100%;
    ul {
        width: 100%;
        height: 100%;
        li {
            width: 100%;
            height: 0.7rem;
            background-color: #fff;
            border-top: 0.01rem solid #eee;
            border-bottom: 0.01rem solid #eee;
            margin-top: 0.05rem;
            text-align: center;
            line-height: 0.7rem;
        }
    }
}

section {
    width: 100%;
    height: 100%;
    background-color: darkkhaki;
    .sea-title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 0.3rem;
        padding-right: 0.3rem;
        h3 {
            font-size: 0.35rem;
        }
        span {
            font-size: 0.3rem;
        }
    }

}
.sea-conts {
    width: 100%;
    height: 100%;
    ol  {
        height: 100%;
        display: flex;
        // justify-content: space-around;
        flex-wrap: wrap;
        padding: 0.1rem;
        li {
            text-align: center;
            line-height: 0.666rem;
            width: 22%;
            height: 0.6666rem;
            border-radius: 0.05rem;
            border: 1px solid #ccc;
            margin-top: 0.1rem;
            margin-left: 0.2rem;
            font-size: 0.3rem;
            color: #eee;
        }
    }
}
</style>