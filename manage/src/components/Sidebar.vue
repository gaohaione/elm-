<template>
  <div class="sidebar">
    <el-row class="tac">
      <el-col>
        <h4>
          <i class="el-icon-menu"></i>
          <router-link to="/manage">首页</router-link>
        </h4>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#324057"
          text-color="#bfcbd9"
          active-text-color="#20a0ff"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>数据管理</span>
            </template>
            <el-menu-item-group>
              <router-link to="/userlist">
                <el-menu-item index="1-1">用户列表</el-menu-item>
              </router-link>
              <router-link to='/shoplist'>
                <el-menu-item index="1-2">商家列表</el-menu-item>
              </router-link>
              <router-link to='/foodlist'>
                <el-menu-item index="1-3">食品列表</el-menu-item>
              </router-link>
              <router-link to='/orderlist'>
                <el-menu-item index="1-4">订单列表</el-menu-item>
              </router-link>
              <router-link to='/adminlist'>
                <el-menu-item index="1-5">管理员列表</el-menu-item>
              </router-link>  
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-plus"></i>
              <span>添加数据</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">添加商铺</el-menu-item>
              <el-menu-item index="1-2">添加商品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-star-on"></i>
              <span>图表</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">用户分布</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span>编辑</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">文本编辑</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>设置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">管理员设置</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-warning"></i>
              <span>说明</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">说明</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Sidebar",
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sidebar {
  width: 16%;
  height: 200%;
  float: left;
  background: #324057;
}
a {
  color: #bfcbd9;
  text-decoration: none;
}
h4 {
  padding-left: 53px;
  position: relative;
  width: 100%;
  line-height: 50px;
  color: #bfcbd9;
  height: 50px;
  i {
    position: absolute;
    top: 18px;
    left: 26px;
  }
}
</style>
