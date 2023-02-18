<template>
    <div v-if="post" class="container mx-auto max-w-4xl py-6 px-3">
        <div class="text-gray-900 text-xl">Post By ID. {{ post.id }}</div>
        <div class="bg-green-600 w-full h-1"></div>

        <div class="mx-auto">
            <div class="my-4">
                <div class="flex items-center py-2">
                    <img :src="userStore.userImage(post.user.image)"  width="50" class="rounded-full" alt="">
                    <div class="ml-2 font-bold text-2xl">

                        {{ post.user.first_name }} {{ post.user.last_name }}
                    </div>
                
                </div>
                <img class="w-full" :src="postStore.postImage(post.image)" alt="">
                <div class="p-4">
                    <p class="text-3xl font-bold hover:text-gray-700 pb-4">{{ post.title }}</p>
                    <p class="py-2 text-lg"> {{ post.location }}</p>
                    <p class="pb-6"> 
                        {{ post.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { usePostStore } from '@/store/post-store';
import { useUserStore } from '@/store/user-store';
let post =ref(null)
// let errors=ref([])
const userStore=useUserStore()
const postStore =usePostStore()
const router = useRoute()

onMounted( async() =>{
    await getPostById()
})

const getPostById= async() =>{

    try{
        let res = await axios.get('api/posts/' + router.params.id )
        post.value=res.data
        
    }
    catch(err){
        console.log(err)
    }
}

</script>

