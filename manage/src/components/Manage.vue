<template>
  <div class="manage">
    <Sidebar></Sidebar>
    <Right></Right>
    <Chart></Chart>
  </div>
</template>

<script>
import Sidebar from './Sidebar';
import Right from './Right';
import Chart from './Chart';
import axios from "axios";
export default {
  name: "Manage",
  data() {
    return {
      msg: ""
    };
  },
  components: {
    Sidebar,
    Right,
    Chart
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.manage {
  width: 100%;
  height: 100%;
}
</style>
