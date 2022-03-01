<template>
  <div class="comment-wrapper">
    <div class="items" >
      <div class="item" v-for="(item,index) in commentList" :key="'comment' + index">
        <div class="left">
          <img :src="item.user.avatarUrl" alt="" />
        </div>
        <div class="right">
          <div class="top">
            <span class="user">{{item.user.nickname}}:</span>
            <span class="content"
              >{{item.content}}</span
            >
          </div>
          <div class="bottom">
            <div class="time">{{item.timeStr}}</div>
            <div class="like-wrapper"><span>👍</span>({{item.likedCount}})</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
      return {
        // 评论列表
        commentList:[]
      }
    },
    async created() {
      let id = this.$route.params.id
      if(!id){
        alert('需要id')
        history.back()
        return 
      }
      let res = await this.$axios('/comment/hot?type=0&id=' + id)
      this.commentList = res.data.hotComments
    },
  };
</script>

<style src="../assets/css/comment.css">

</style>