<template>
  <div class="right">
    <div class="right-top">
      <span>首页</span>
      <img src="../assets/name.png" alt>
    </div>
    
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Right",
  data() {
    return {
      msg: ""
    };
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.right {
  float: right;
  width: 84%;
  // height: 100%;
  // background:pink;
  .right-top {
    width: 100%;
    height: 70px;
    line-height: 70px;
    background: #eff2f7;
    position: relative;
    img {
      position: absolute;
      top: 15px;
      right: 25px;
    }
    span {
      margin-left: 15px;
      font-size: 14px;
      color: #97a8be;
    }
  }
}

</style>
