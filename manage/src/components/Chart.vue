<template>
    <div class="state">
      <div class="state1">
        <h1>数据统计</h1>
        <div>
          <ul>
            <li class="li1">当日数据：</li>
            <li>新增用户</li>
            <li>新增订单</li>
            <li>新增管理员</li>
          </ul>
        </div>
        <div class="div2">
          <ul>
            <li class="li2">总数据：</li>
            <li>注册用户</li>
            <li>订单</li>
            <li>管理员</li>
          </ul>
        </div>
      </div>
      <div class="state2">
          <div id="chartmain" style="width:700px; height: 490px;margin-top:50px;margin-left:50px"></div>
      </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Chart",
  data() {
    return {
      msg: ""
    };
  },
  mounted() {
    this.on();
  },
  methods: {
    on() {
      let aaa = this.$echarts.init(document.getElementById("chartmain"));
      aaa.setOption({
        title: {
          text: "走势图"
          // subtext: '纯属虚构'
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["新注册用户", "新增订单", "新增管理员"]
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: "none"
            },
            dataView: { readOnly: false },
            magicType: { type: ["line", "bar"] },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "2019-04-22",
            "2019-0-23",
            "2019-04-24",
            "2019-04-25",
            "2019-04-26",
            "2019-04-27"
          ]
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} °C"
          }
        },
        series: [
          {
            name: "新注册用户",
            type: "line",
            data: [11, 11, 15, 13, 12, 13, 10],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          },
          {
            name: "新增订单",
            type: "line",
            data: [1, -2, 2, 5, 3, 2, 0],
            markPoint: {
              data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }]
            },
            markLine: {
              data: [
                { type: "average", name: "平均值" },
                [
                  {
                    symbol: "none",
                    x: "90%",
                    yAxis: "max"
                  },
                  {
                    symbol: "circle",
                    label: {
                      normal: {
                        position: "start",
                        formatter: "最大值"
                      }
                    },
                    type: "max",
                    name: "最高点"
                  }
                ]
              ]
            }
          },
          {
            name: "新增管理员",
            type: "line",
            data: [1, -2, 2, 5, 3, 2, 0],
            markPoint: {
              data: [{ name: "周最低", value: -1, xAxis: 2, yAxis: -2 }]
            },
            markLine: {
              data: [
                { type: "average", name: "平均值" },
                [
                  {
                    symbol: "none",
                    x: "40%",
                    yAxis: "max"
                  },
                  {
                    symbol: "circle",
                    label: {
                      normal: {
                        position: "start",
                        formatter: "最大值"
                      }
                    },
                    type: "max",
                    name: "最高点"
                  }
                ]
              ]
            }
          }
        ]
      });
    
   }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.state {
    float:right;
    width:84%;
    height:100%;
    // background:pink;
  .state1 {
    h1 {
      width: 100%;
      height: 50px;
      text-align: center;
      margin-top: 20px;
    }
    div {
      width: 100%;
      height: 40px;
      margin-top: 15px;
      ul {
        li {
          float: left;
          width: 180px;
          height: 40px;
          background: #e5e9f2;
          line-height: 40px;
          font-size: 14px;
          margin-left: 20px;
          border-radius: 10px;
          text-align: center;
        }
        .li1 {
          background: orange;
          font-size: 20px;
          color: white;
        }
        .li2 {
          background: #20a0ff;
          font-size: 20px;
          color: white;
        }
      }
    }
  }
}
</style>
