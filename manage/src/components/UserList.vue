<template>
  <div class="userlist">
    <SideBar></SideBar>
    <Right></Right>
    <div class="list">
      <el-table :data="list" border style="width: 95%">
        <el-table-column prop="id" label="#" width="180"></el-table-column>
        <el-table-column prop="registe_time" label="注册日期" width="180"></el-table-column>
        <el-table-column prop="username" label="用户姓名" width="180"></el-table-column>
        <el-table-column prop="city" label="注册地址"></el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-size="100"
          background
          layout="total,prev, pager, next"
          :total="total"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "./Sidebar";
import Right from "./Right";
import axios from "axios";
export default {
  name: "UserList",
  data() {
    return {
      msg: "",
      list: [],
      num: 1,
      total: 0,
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.num = val - 1;
      axios
        .get(
          `https://elm.cangdu.org/v1/users/list?offset=${this.num *
            20}&limit=20`
        )
        .then(res => {
          console.log(res.data);
          this.list = res.data;
        });
      
    }
  },
  components: {
    SideBar,
    Right
  },
  created() {
    axios.get("https://elm.cangdu.org/v1/users/count").then(res => {
        this.total = res.data.count;
        console.log(this.total)
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.userlist {
  width: 100%;
  height: 100%;
}
.list {
  width: 84%;
  //   height: 100%;
  //   background: pink;
  float: right;
  .el-table {
    margin-top: 20px;
    tr {
      background-color: #eef1f6;
    }
  }
}
</style>
