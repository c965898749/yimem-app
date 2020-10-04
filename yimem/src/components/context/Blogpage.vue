<template>
  <div >
    <div style="background: #4DDEB7;">
      <Row style="color: white;height: 50px;text-align: center;font-size: 16px;font-weight: bolder;line-height: 50px" type="flex" justify="space-between" class="code-row-bg">
        <i-col span="6">YiMEM</i-col>
        <i-col span="12"><i-input icon="ios-clock-outline" v-model="value1" placeholder="请输入..." ></i-input></i-col>
        <i-col span="6"><div  @click="search">查找</div></i-col>
      </Row>
    </div>
    <div style="background:#eee;padding: 5px 0 5px 0;">
      <Card v-for="(val, index) in bloglist" :key="index" >
        <h3 @click="getdetails(val.id)">{{val.title}}</h3>
        <h5 class="textcont" @click="getdetails(val.id)">
         {{val.content | contextfomat}}
        </h5>
        <Row>
        <i-col span="12">{{val.createtime}}</i-col>
        <i-col span="7" >阅读数：{{val.readCount}}</i-col>
        <i-col span="5">评论数：{{val.replayCount}}</i-col>
        <!--<i-col span="3">置顶</i-col>-->
        <!--<i-col span="3">编辑</i-col>-->
        <!--<i-col span="3">删除</i-col>-->
        </Row>
      </Card>
    </div>
    <Back-top :bottom="200"></Back-top>
    <div style="background: white;height: 35px;width: 100%;position: fixed;bottom: 0;left: 0;right: 0">
      <Page simple :current="pagination.pageNo" :total="pagination.total" show-total :page-size="pagination.pageSize" @on-change="changePage" style="text-align: center;position: fixed;bottom: 5px;left: 0;right: 0"></Page>
    </div>
  </div>
</template>

<script>
  import {Inner} from '@/network/HttpUtill'

  export default {
    name: "Blogpage"
    , data() {
      return {
        value1:"",
        bloglist: "",
        pagination: {
          pageSize:15,
          pageNo: 1,
          total: 0
        },
      }
    }
    , created() {
      this.getResList()
    }
    , methods: {
      getdetails(id){
       //console.log(id);
        this.$router.push('/details/'+id)
      },
      search(){
        console.log("查找");
        this.getResList()
      },
      changePage(page) {
        this.pagination.pageNo = page;
       //console.log(page);
        // this.pagination.pageSize = page;
        this.getResList()
      },
      getResList() {
        Inner.get("/blog/queryByUserId", {
          params: {
            userid: 1,
            pageNum: this.pagination.pageNo,
            timeCount: 1,
            stick: 1,
            readCount: "",
            serachblog: this.value1
          }
        })
          .then(res => {
            this.pagination.total = res.data.count

            this.bloglist = res.data.data
           //console.log(this.bloglist );
          })
          .catch(rej => {
           //console.log("服务器异常");
          })
      }
    },
    filters: {
     contextfomat (value) {
        return value.replace(/[^\u4e00-\u9fa5]/gi, "")
      }
    }
  }
</script>

<style scoped>
.textcont{
  white-space:nowrap;
  text-overflow:ellipsis;
  -o-text-overflow:ellipsis;
  overflow: hidden;
}
</style>
