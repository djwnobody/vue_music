<template>
  <div class="player">
    <div class="left">
      <img class="disc" src="@/assets/img/disc.png" alt="" />
      <img class="cover" :src="coverUrl" alt="" />
    </div>
    <div class="right">
      <div class="title">
        <img src="@/assets/img/tag.png" alt="" /><span>{{song}}</span>
      </div>
      <div class="singer">歌手: <span>{{singer}}</span></div>
      <div class="album">所属专辑: <span>{{album}}</span></div>
      <audio class="audio" controls :src="musicUrl"></audio>
      <ul class="lyric-container">
        <li class="lyric" v-for="(item,index) in lyrics" :key="'lyric' + index">
          {{item}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        // 歌曲名字
        song: "",
        // 歌手
        singer: "",
        // 所属专辑
        album: "",
      // 音乐播放 url
        musicUrl:'',
        // 歌词
        lyrics: [],
        // 封面 url
        coverUrl:''
      };
    },
    async created() {
      let id = this.$route.params.id
      if(!id){
        alert('没有歌曲id')
        history.back()
        return
      }
      let songInfo = JSON.parse(localStorage.getItem("song"));
      console.log(songInfo);
      this.song = songInfo.name;
      this.album = songInfo.album.name;
      this.singer = songInfo.artists[0].name;
      // 音乐播放url
      this.musicUrl = "https://music.163.com/song/media/outer/url?id=" + id
      // 封面url
      let cover = await this.$axios("/album?id=" + songInfo.album.id)
      this.coverUrl = cover.data.album.picUrl
      // 歌词
      let lyric = await this.$axios("/lyric?id="+id)
      this.lyrics = lyric.data.lrc.lyric.split('\n')
      for(let i = 0; i < this.lyrics.length; i++){
        this.lyrics[i] = this.lyrics[i].slice(11)
      }
    },
}
</script>

<style src="../assets/css/player.css" scoped>

</style>