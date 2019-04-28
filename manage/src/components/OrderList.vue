<template>
  <div class="orderlist">
    <SideBar></SideBar>
    <Right></Right>
    <div class="list">
      <el-table :data="list.slice((currpage-1)*pagesize,currpage*pagesize)" border style="width: 95%">
        <!-- <el-table-column prop="id" label="#" width="180"></el-table-column> -->
        <el-table-column prop="address_id" label="订单ID" width="180"></el-table-column>
        <el-table-column prop="total_amount" label="总价格" width="180"></el-table-column>
        <el-table-column prop="status_bar.title" label="订单状态"></el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-size="pagesize"
          layout="total, prev, pager, next,sizes,next,jumper"
          :total="1000"
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
  name: "AhopList",
  data() {
    return {
      msg: "",
      list: [],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      pagesize: 20, //每页条数
      currpage: 1 //默认开始页面
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currpage = val;
      //   this.currpage+=20;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
  components: {
    SideBar,
    Right
  },
  created() {
    axios
      .get(
        "https://elm.cangdu.org/bos/orders?offset=0&limit=20&restaurant_id=undefined"
      )
      .then(res => {
        console.log(res.data);
        this.list = res.data;
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.orderlist {
  width: 100%;
  height: 100%;
}
.list {
  width: 84%;
  float: right;
  .el-table {
    margin-top: 20px;
    tr {
      background-color: #eef1f6;
    }
  }
}
</style>
