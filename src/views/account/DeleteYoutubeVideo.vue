<template>
    <div id="DeleteYoutubeVideo" class=" container mx-auto max-w-4xl pt-20 px-6">
        <div class="text-gray-900 text-xl">Delete Youtube Video</div>
        <div class="bg-delete-600 w-full h-1"></div>
        <div class="bg-white rounded px-8 pt-6 pb-8">
            <div v-for="(video, index) in videoStore.videos" :key="video" class="flex flex-wrap">
                <div class="w-1/4 mr-auto mt-2 text-lg p-1 text-gray-900">
                    {{ ++index }} {{ video.title }}
                    <iframe class="w-full h-60" :src="video.url"></iframe>
                </div>
                <div class="w-1/4 ml-auto p-1">
                    <button
                        @click="deletevideo(video)"
                        class="
                            float-right
                            bg-transparent
                            hover:bg-red-500
                            text-gray-900
                            font-simebold
                            hover:text-white
                            py-2
                            px-4
                            border-red-500
                            hover:border-transparent
                            rounded
                        ">
                    Delete Video
                    </button>

                </div>
            </div>
        </div>
      
    </div>
</template>
<script setup>
   import { useVideoStore } from '@/store/video-store';
    import axios from 'axios';
    import Swal from '@/sweetalert2';
    import { useRouter } from 'vue-router';
    import { useUserStore } from '@/store/user-store';

    const videoStore = new useVideoStore();
    const userStore = new useUserStore();
    const router =new useRouter();
    // let errors =ref([])

    const deletevideo = async(video) =>{
        Swal.fire({
            title: '<strong>Are you sure you want to delete this?</strong>',
            text:'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText:'Yes, delete it!',
            confirmButtonColor:'#3085d6',
            cancelButtonColor:'#d33',
        }).then(async (result) => {
            if(result.isConfirmed){
                try
                    {
                        console.log(video.id);
                        await axios.delete('api/youtube/' + video.id)

                        videoStore.fetchVideosByUserId(userStore.id)

                        Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                        )
                        router.push('/account/profile/'+userStore.id)
                    }
                    catch(err){
                        console.log(err);
                        // errors= err.response.data.errors
                    }
            }
        })
       
}
</script>