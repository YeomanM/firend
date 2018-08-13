<template>
  <el-row class="container">
    <!-- 主题部分 -->
    <el-col :span="24" class="main">
      <!-- 主体左侧导航部分 -->
      <aside >

        <div>
          <img src="../assets/elogo.png">
        </div>
        <div class="menu-toggle" @click.prevent="collapse">
          <i class="iconfont icon-menufold" v-show="collapsed"></i>
          <i class="iconfont icon-menuunfold" v-show="!collapsed"></i>
        </div>

        <el-menu
          router
          :collapse="!collapsed"
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">

          <template
            v-for="(item,index) in rights" >
            <el-submenu
              v-if="item.children.length"
              :key="item.parent.rightUrl"
              :index="index+''">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{ item.parent.rightName }}</span>
              </template>
              <el-menu-item v-for="(term,i) in item.children" :index="term.rightUrl" :key="term.rightUrl" :v-link="term.rightUrl">
                <span>{{ term.rightName }}</span>
              </el-menu-item>
            </el-submenu>
            <el-menu-item v-if="!item.children.length" :index="item.parent.rightUrl" :key="item.parent.rightUrl" :v-link="item.parent.rightUrl">
              <i class="el-icon-location"></i>
              <span>{{ item.parent.rightName }}</span>
            </el-menu-item>
          </template>

        </el-menu>


      </aside>


      <el-col :span="24">
        <nav-bar></nav-bar>
        <tags-view></tags-view>

        <router-view></router-view>
      </el-col>
      <!--右侧内容区-->

    </el-col>
  </el-row>
</template>



<script>

  import NavBar from '@/components/NavBar/NavBar'
  import TagsView from "./TagsView/TagsView";

    export default {
      name: "Home",
      components: {
        TagsView,
        NavBar
      },
        data() {
            return {
              collapsed: true,
              defaultActiveIndex: "/main",
              rights : [],
              visited : []
            }
        },
        methods:{
          handleSelect(name,url){
            TagsView.methods.addViewTags();
          },
          jumpTo(url){
            console.log(url);
          },
          collapse: function () {
            this.collapsed = !this.collapsed;
          },
          closeTag(tag) {
            this.visited.splice(this.visited.indexOf(tag), 1);
          }
        },
      mounted() {

          let that = this;
          this.$api.getRight().then(function (res) {
            that.loading = false;
            var result = eval(res.data);
            that.rights = result.data;
          });
      }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;

    .topbar-wrap {
      height: 50px;
      line-height: 50px;
      /*background: #373d41;*/
      padding: 0px;

      .topbar-btn {
        color: #fff;
      }
      /*.topbar-btn:hover {*/
      /*background-color: #4A5064;*/
      /*}*/
      .topbar-logo {
        float: left;
        width: 59px;
        line-height: 26px;
      }
    }
    .main {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      position: absolute;
      top: 0px;
      bottom: 0px;
      overflow: hidden;
    }

    aside {
      background: #545c64;
      &::-webkit-scrollbar {
        display: none;
      }

      &.showSidebar {
        overflow-x: hidden;
        overflow-y: auto;
      }

      .el-menu {
        border-radius: 0px;
        border-right: 0px;
      }

      .el-submenu .el-menu-item {
        min-width: 60px;
      }
      .el-menu {
        width: 180px;
      }
      .el-menu--collapse {
        width: 60px;
      }


      .el-menu-item:hover, .el-submenu .el-menu-item:hover, .el-submenu__title:hover {
        background-color: #7ed2df;
      }


      .el-menu > .el-menu-item span,.el-submenu__title > span{
        margin-right: 100%;
      }

      /*.el-submenu  > ul > li {*/
        /*margin-right: 100%;*/
      /*}*/
    }

    img {
      width: 60px;
    }

    .topbar-logo span {
      line-height: 50px;
    }

    #myTab {
      position: sticky;
      border-bottom: 1px solid rgba(156, 171, 173, 0.68);
      width: 100%;
      float: left;
      height: 42px;

    }

    .menu-toggle {
      background: #4A5064;
      text-align: center;
      color: white;
      height: 26px;
      line-height: 30px;
    }

    .outer-div {
      border-bottom: 1px solid #d8dce5;
      height: 40px;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
      /*overflow: hidden;*/
      overflow-y: hidden;
    }
    .el-tag {
      float: left;
      margin: 5px;
      border-radius: 0px;
    }

    .el-tag:first-child{
      margin-left: 10px;
    }


    .scroll-wrapper >>> a{
      color: red;
    }

  }
</style>

