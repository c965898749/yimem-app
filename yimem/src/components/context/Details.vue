<template>
  <div class="Details">
    <div style="background: #4DDEB7;">
      <Row style="color: white;height: 50px;font-size: 16px;font-weight: bolder;line-height: 50px" class="code-row-bg">
        <i-col span="4">
          <div @click="home">< 分类</div>
        </i-col>
        <i-col span="4">{{blog.category}}</i-col>
      </Row>
    </div>
    <h2 style="margin: 10px">{{blog.title}}</h2>
    <div style="display: flex;margin-left: 20px;margin-bottom: 15px">
      <div>{{nickname}}</div>
      发布：{{blog.createtime}}
    </div>
    <div style="padding: 10px">
      <div v-html="blog.content"></div>
    </div>
    <Back-top></Back-top>
  </div>
</template>

<script>
  import {Inner} from '@/network/HttpUtill'
  // import '@/assets/css/normalize.css'
  export default {
    name: "Details",
    data() {
      return {
        nickname: "",
        blog: ""
      }
    },
    created() {
      this.getblog()
    }
    , computed: {},
    methods: {
      getblog() {
        let id = this.$route.params.id
        Inner.get("/blog/" + id)
          .then(rel => {
            this.blog = rel.data.data
            let reg=new RegExp('src="/group1/','g')
            let reg2=new RegExp('<img','g')
            let newMsg=rel.data.data.content.replace(reg,'src="http://www.yimem.com/group1/');
             newMsg=newMsg.replace(reg2,'<img style="max-width: 350px;max-height:400px"');
            console.log(newMsg);
            this.blog.content=newMsg
            this.getuser(this.blog.userid)
          }).catch(rej => {
          this.blog = '查询失败'
        })
      },
      home() {
        this.$router.push('/blogpage')
      },
      getuser(bloguserid) {
        Inner.get("/blog/blog/ " + bloguserid,)
          .then(res => {
            this.nickname = res.data.data.nickname
          })
          .catch(rej => {
            this.nickname = "未知"
          })
      },
      contextfomat(value) {

        if (value != null) {

            // value = value.replace(/[src=\"/]/gi, 'src="http://www.yimem.com/group1/')
            value = value.replace("<img", '<img style="max-width: 350px;max-height:350px"')
            console.log(value);
        }
        return value
      }
    },
    filters: {}
  }
</script>

<style scoped>
  /*.Details img{*/
  /*max-height: 100px;;*/
  /*max-width: 100px;*/
  /*}*/
</style>
