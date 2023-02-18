<template>
    <div class="p-2">
        <div class="container max-w-4xl mx-auto flex mt-10">
        <div class="w-1/3">
            <img
                class="w-full rounded-lg h-auto shadow-lg"
                width="50"

                :src="profileStore.image"
                alt="Profile Pic"/>

                
        </div>
        <div class="w-full pl-4">
            <div class="flex">
                <div class="w-1/2">
                    <h1 class="text-2xl md:text-4xl text-left text-gray-900">
                            {{ profileStore.firstName }} {{  profileStore.lastName  }}
                    </h1>
                    <span class="text-md text-gray-700 ">
                        <i><b>{{  profileStore.location }}</b></i>
                    </span>
                </div>
                <div class="w-1/2 mt-2" v-if="userStore.id==router.params.id">
                    <RouterLinkButton btnText="Edit Profile" color="green" :url="'/account/edit-profile/'+userStore.id"/>
                </div>
            </div>
            <ProfileInfoSection/>
            <ProfileAboutSection/>
            
        </div>     
       
    </div>
    <SongsSection/>
    <YoutubeVideoSection/>
    <PostsSection/>
    </div>
</template>
<script setup>

    import RouterLinkButton from '@/components/global/RouterLinkButton.vue';
    import ProfileInfoSection from '@/components/partials/profile/ProfileInfoSection.vue';
    import ProfileAboutSection  from '@/components/partials/profile/ProfileAboutSection.vue';
    import SongsSection from '@/components/partials/profile/SongsSection.vue';
    import YoutubeVideoSection from '@/components/partials/profile/YoutubeVideoSection.vue';
    import PostsSection from '@/components/partials/profile/PostsSection.vue';
    import { useRoute } from 'vue-router';
    import { useUserStore } from '@/store/user-store';
    import { useProfileStore } from '@/store/profile-store';
    import { onMounted } from 'vue';
    
    const router=useRoute()
    const userStore = useUserStore()
    const profileStore = useProfileStore()

    onMounted(async()=>{
        await profileStore.fetchProfileById(router.params.id)
    })
</script>