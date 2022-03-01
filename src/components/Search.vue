<template>
  <div id="player">
    <h2 class="title">黑云音乐</h2>
    <div class="search">
      <input type="text" v-model="keyword" @keyup.enter="searchMusic" />
      <button>
        <span class="iconfont icon-search" @click="searchMusic"></span>
      </button>
    </div>
    <div class="tab-wrapper">
      <!-- tab栏 -->
      <!-- <div class="tab-bar">
        <router-link class="bar-item" active-class="active" to="/result"
          >搜索结果</router-link
        >
        <router-link class="bar-item" active-class="active" to="/play"
          >歌曲播放</router-link
        >
        <router-link class="bar-item" active-class="active" to="/video"
          >mv</router-link
        >
        <router-link class="bar-item" active-class="active" to="/comment"
          >歌曲评论</router-link
        >
      </div> -->
      <!-- 对应的内容区域 -->
      <div class="tab-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 搜索音乐
      keyword: "神话",
    };
  },
  methods: {
    // 搜索音乐
    searchMusic() {
      this.$router.push("/result/" + this.keyword);
    },
  },
};
</script>

<style></style>
