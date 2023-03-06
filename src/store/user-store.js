import axios from 'axios';
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    id: 0,
    token: null,
    firstName: null,
    lastName: null,
    email: null,
    location: null,
    image: null,
    description: null,
  }),
  actions: {
     setUserDetails(res){
        const {data} = res.data;
        console.log(data)
        this.$state.id= data.user.id
        this.$state.token= data.token
        this.$state.firstName= data.user.first_name
        this.$state.lastName= data.user.last_name
        this.$state.email= data.user.email
        // this.$state.location= res.data.user.location
        // this.$state.description= res.data.user.description
        // // console.log("dd"+res.data.user.image);
        // if(res.data.user.image){

        //   this.$state.image= process.env.VUE_APP_API_URL+'images/users/' + res.data.user.image
        // }
        // else{
        //   this.$state.image= process.env.VUE_APP_URL+'DefaultUserAvatar.png'
        // }
       
    },

    userImage(image) {
      return process.env.VUE_APP_API_URL + 'images/users/' + image
    },

    async fetchUser(){

        let res= await axios.get('api/v1/profile/')

        const {data} = res.data;
        this.$state.id= data.user.id
        this.$state.firstName= data.user.first_name
        this.$state.lastName= data.user.last_name
        this.$state.email= data.user.email
        // this.$state.location= res.data.user.location
        // this.$state.description= res.data.user.description
        // // this.$state.image= res.data.user.image
        // if(res.data.user.image){

        //   this.$state.image= process.env.VUE_APP_API_URL+'images/users/' + res.data.user.image
        // }
        // else{
        //   this.$state.image= process.env.VUE_APP_URL +'DefaultUserAvatar.png'
        // }
    },

    clearUser(){
        this.$state.id= null
        this.$state.token= null
        this.$state.firstName= null
        this.$state.lastName= null
        this.$state.email= null
        // this.$state.location= null
        // this.$state.description= null
        // this.$state.image= null
    }
  },
  persist:true
})