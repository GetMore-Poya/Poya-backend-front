<template>
    <div id="Register">
        <TopNavigation/>
        <div class="w-full p-6 flex justify-center items-center">
            <div class="w-full max-w-xs">
                <div class="bg-black p-8 shadow rounded mb-6">
                <h1 class="mb-6 text-log text-gray-100">Let's get rock it</h1>
                <div class="mb-4">
                 <TextInput 
                    label="First Name"
                    :labelColor="false"
                    placeholder="john"
                    v-model:input="firstName"
                    inputType="text"
                    :error="errors.first_name ? errors.first_name[0] :'' "
                    />
                </div>
                <div class="mb-4">
                 <TextInput 
                    label="Last Name"
                    :labelColor="false"
                    placeholder="Doe"
                    v-model:input="lastName"
                    inputType="text"
                    :error="errors.last_name ? errors.last_name[0] :'' "
                    />
                </div>
                <div class="mb-4">
                 <TextInput 
                    label="Email"
                    :labelColor="false"
                    placeholder="johndoe@gmail.com"
                    v-model:input="email"
                    inputType="text"
                    :error="errors.email ? errors.email[0] :'' "
                    />
                </div>
                <div class="mb-4">
                 <TextInput 
                    label="Password"
                    :labelColor="false"
                    placeholder="pass123"
                    v-model:input="password"
                    inputType="password"
                    :error="errors.password ? errors.password[0] :'' "
                    />
                </div>
                <div class="mb-4">
                 <TextInput 
                    label="Confirm Password"
                    :labelColor="false"
                    placeholder="pass123"
                    v-model:input="confirmPassword"
                    inputType="password"
                    />
                </div>
                <button class="
                        block
                        w-full
                        bg-green-600
                        text-white
                        rounded-sm
                        py-3
                        text-sm
                        tracking-wide" 
                        type="submit" @click="register">
                Register
                </button>
            </div>
            <p class=" text-center text-md text-gray-900 "> 
                    Already have an account?
                <router-link  to="login" class="text-blue-500 no-underline hover:underline">
                    Login
                </router-link>

                </p>   
            </div>
        </div>
    </div>
</template>

<script setup>
    import axios from 'axios';
    import {ref} from 'vue';
    import TopNavigation from '@/components/structure/TopNavigation.vue';
    import TextInput from '../components/global/TextInput.vue'
    import { useRouter } from 'vue-router';
    import {useUserStore} from '../store/user-store.js'
    import {useProfileStore} from '../store/profile-store.js'
    import {useSongStore} from '../store/song-store.js'
    import {useVideoStore} from '../store/video-store.js'
    import {usePostStore} from '../store/post-store.js'


    const router=useRouter()
    const userStore= useUserStore()
    const profileStore= useProfileStore()
    const songStore= useSongStore()
    const videoStore= useVideoStore()
    const postStore= usePostStore()

        let errors =ref([])

        let firstName =ref(null)
        let lastName   =ref(null)
        let email   =ref(null)
        let password   =ref(null)
        let confirmPassword   =ref(null)

        const register = async () =>{
            errors.value=[]
            try{
                let res = await axios.post('api/register', {
                first_name: firstName.value,
                last_name : lastName.value,
                email : email.value,
                password : password.value,
                password_confirmation : confirmPassword.value,
                

            });
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token 
            userStore.setUserDetails(res)
            await profileStore.fetchProfileById(userStore.id)
            await songStore.fetchSongsByUserId(userStore.id)
            await postStore.fetchPostsByUserId(userStore.id)
            await videoStore.fetchVideosByUserId(userStore.id)

           router.push('/account/profile/'+userStore.id)

            }catch(err){
                errors.value=err.response.data.errors
            }
        }
</script>