<template>
  <div class="video">
    <div class="title-wrapper">
      <span class="tag">MV</span>
      <span class="title">{{mvName}}</span>
      <span class="artist">{{artist}}</span>
    </div>
    <video :src="mvUrl" controls></video>
  </div>
</template>

<script>
export default {
  data(){
      return {
        // mv 名字
        mvName:'',
        // 作者名字
        artist:'',
        // mv url
        mvUrl:''
      }
    },
    async created() {
      let mvid = this.$route.params.mvid
      if(!mvid){
        alert('需要mvid')
        history.back()
        return 
      }
      // mv名字和作者
      let res = await this.$axios('/mv/detail?mvid=' + mvid)
      console.log(res);
      this.mvName = res.data.data.name
      this.artist = res.data.data.artistName
      // mv url
      let mvInfo = await this.$axios('/mv/url?id=' + mvid)
      console.log(mvInfo);
      this.mvUrl = mvInfo.data.data.url
    },
}
</script>

<style src="../assets/css/video.css">

</style>