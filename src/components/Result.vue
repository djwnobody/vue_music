<template>
  <div class="result-wrapper">
    <div class="song" v-for="(item,index) in songList" :key="'result' + index">
      <div class="name">
        <span class="iconfont icon-play" @click="toPlay(item)"></span>
        <a @click.prevent="toComment(item)">{{item.name}}</a>
        <span
          class="iconfont icon-editmedia"
          v-if="item.mvid !== 0"
          @click="toMv(item)"
        ></span>
      </div>
      <div class="singer">{{item.artists | formatSinger}}</div>
      <div class="album">{{item.album.name}}</div>
      <div class="time">{{item.duration | formatTime}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        // 音乐列表
        songList: [],
      };
    },
    watch: {
      // 不切换组件，只改变 keyword
      "$route.params.keyword": function () {
        console.log("result的keyword的watch");
        this.requestSongList();
      },
    },
    filters: {
      // 格式化时间
      formatTime(time) {
        if (parseInt(time / 60 / 1000) === 0) {
          return parseInt((time / 1000) % 60) + "秒";
        }
        return (
          parseInt(time / 60 / 1000) +
          "分" +
          parseInt((time / 1000) % 60) +
          "秒"
        );
      },
      // 多个名字，/连接
      formatSinger(arr) {
        let str = "";
        for (let i = 0; i < arr.length; i++) {
          str += arr[i].name;
          str += "/";
        }
        str = str.slice(0, -1);
        return str;
      },
    },
    created() {
      this.requestSongList();
      console.log("result的created");
    },
    methods: {
      async requestSongList() {
        // 由其他路由切换而来，keyword为undefined
        if (!this.$route.params.keyword) {
          this.songList = JSON.parse(localStorage.getItem("songList"));
          return;
        }
        // 第一次打开肯定有 keyword 
        let res = await this.$axios("/search?keywords=" + this.$route.params.keyword);
        this.songList = res.data.result.songs;
        localStorage.setItem("songList", JSON.stringify(this.songList));
      },
      // 跳转到播放页面
      toPlay(song) {
        localStorage.setItem("song", JSON.stringify(song));
        this.$router.push("/play/" + song.id);
      },
      // 跳转到评论页面
      toComment(song) {
        this.$router.push("/comment/" + song.id);
      },
      // 跳转到mv页面
      toMv(song) {
        this.$router.push("/video/" + song.mvid);
      },
    },
}
</script>

<style src="../assets/css/results.css"></style>