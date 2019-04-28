<template>
  <div class="shoplist">
    <SideBar></SideBar>
    <Right></Right>
    <div class="list">
      <el-table :data="list" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="店铺名称">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="店铺地址">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="店铺介绍">
                <span>{{ props.row.description }}</span>
              </el-form-item>
              <el-form-item label="店铺ID">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="联系电话">
                <span>{{ props.row.phone }}</span>
              </el-form-item>
              <el-form-item label="评分">
                <span>{{ props.row.rating }}</span>
              </el-form-item>
              <el-form-item label="销售量">
                <span>{{ props.row.rating_count }}</span>
              </el-form-item>
              <el-form-item label="分类">
                <span>{{ props.row.category }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="店铺名称" prop="name"></el-table-column>
        <el-table-column label="店铺地址" prop="address"></el-table-column>
        <el-table-column label="店铺介绍" prop="description"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">添加食品</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
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
        <div class="edit" v-if="{edit}">
          <el-form ref="form" :model="form" label-width="80px">
            <h3>修改店铺信息</h3>
            <el-form-item label="店铺名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="详细地址">
              <el-input v-model="form.address"></el-input>
              <div>当前城市：北京</div>
            </el-form-item>
            <el-form-item label="店铺介绍">
              <el-input v-model="form.introduce"></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
              <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="店铺分类">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="商铺图片">
              <img src="" alt="">
            </el-form-item>
            
            <el-form-item>
              <el-button type="primary" @click="onSubmit">确定</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </div>
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
      num: 1,
      total: 0,
      edit: false,
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
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
          `https://elm.cangdu.org/shopping/restaurants?latitude=39.90469&longitude=116.407173&offset=${this
            .num * 20}&limit=20`
        )
        .then(res => {
          console.log(res.data);
          this.list = res.data;
        });
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    onSubmit() {
        console.log('submit!');
      }
  },
  components: {
    SideBar,
    Right
  },
  created() {
    axios.get("https://elm.cangdu.org/shopping/restaurants/count").then(res => {
      this.total = res.data.count;
      console.log(this.total);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.shoplist {
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
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.edit {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%;
  background: rgba(0, 0, 0, 0.1);
  padding-top:100px;
  .el-form{
    width:50%;
    background:white;
    padding:15px;
    padding-top:15px;
  }
}
</style>
