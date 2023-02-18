import axios from 'axios'
import { defineStore } from 'pinia'

export const useVideoStore = defineStore('video', {
  state: () => ({
    videos: null,
  }),
  actions: {
    async fetchVideosByUserId(userId) {
        let res = await axios.get('api/youtube/' + userId)
        this.$state.videos = res.data.video_by_user

        // console.log("vstore"+res.data.video_by_user);
    },

    clearVideos() {
        this.$state.videos = null
    }
  },
  persist: true
})