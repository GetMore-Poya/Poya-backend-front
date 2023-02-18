<template>
    <div id="centerCallToAction" class="max-w-5xl">
        <div class="px-4 md:w-3/4 lg:w-2/3 mx-auto text-center">
            <h1 class="text-4xl sm:text-5xl md:text-5xl leading-tight text-center text-gray-100 mb-3">
                <b>Social Network</b>
            </h1>
            <p class="pt-2 text-xml text-center text-gray-300">
                 login or register now and join other like minded people
            </p>
            <p class="py-4 text-xml text-center text-gray-300">
                Testing .................
            </p>
        </div>
        <div class="mt-6"></div>
        <div class="flex justify-between">
            <router-link class="
                w-full 
                mr-1 
                py-2 
                px-4 
                bg-green-600 
                text-white 
                font-semibold 
                text-center 
                rounded-lg 
                shadow-md 
                hover:bg-green-500
                focus:outline-none
                focus:ring-2
                focus:ring-green-400
                focus:ring-opacity-75
                cursor-pointer "
                to="login"
                >
                Login
            </router-link>
            <router-link class="
                w-full 
                mr-1 
                py-2 
                px-4 
                bg-blue-600 
                text-white 
                font-semibold 
                text-center 
                rounded-lg 
                shadow-md 
                hover:bg-blue-500
                focus:outline-none
                focus:ring-2
                focus:ring-blue-400
                focus:ring-opacity-75
                cursor-pointer "
                
                to="register"
                >
                Register
            </router-link>
        </div>        
    </div>
    <div id="videoDarkOverlay"> </div>
    <video autoplay muted loop id="myVideo">
        <source src="../../../public/Concert.mp4" type="video/mp4">
    </video>
</template>
<script setup></script>
<style lang="scss">
    #centerCallToAction{
        width: 100%;
        position: absolute;
        left: 50%;
        top:50%;
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
    }
    #myVideo{
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        position: fixed;
        left: 0;
        right: 0;
        top:0;
        bottom: 0;
        z-index: -2;
    }
    #videoDarkOverlay{
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        position: fixed;
        left: 0;
        right: 0;
        top:0;
        bottom: 0;
        z-index: -1;
        background-color:rgba(0, 0, 0, 0.65);
    }
</style>