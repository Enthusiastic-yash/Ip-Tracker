<script setup>
const props = defineProps(['ipInfoData'])
</script>
<template>
       <div class="absolute -bottom-20 lg:-bottom-20  flex flex-row bg-white gap-y-4  gap-x-8 sm:gap-x-12 px-2 sm:px-8 py-8 pb-12  rounded-md" >
           <!-- flex Item #1 -->
           <div class="flex flex-col">
            <h1 class="text-xs mb-2 uppercase text-center">Ip Address</h1>
            <span class="text-lg sm:text-2xl">{{ipInfoData.address}}</span>
           </div>
             <!-- flex Item #2 -->
           <div class="flex flex-col">
            <h1 class="text-xs mb-2 uppercase text-center">Location</h1>
            <span class="text-lg sm:text-2xl">{{ipInfoData.location }}</span>
           </div>
             <!-- flex Item #3 -->
           <div class="flex flex-col">
            <h1 class="text-xs mb-2 uppercase text-center">Time zone</h1>
            <span class="text-lg sm:text-2xl">{{ipInfoData.timezone}}</span>
           </div>
             <!-- flex Item #4 -->
           <div class="flex flex-col">
            <h1 class="text-xs mb-2 uppercase text-center">Isp</h1>
            <span class="text-lg sm:text-2xl">{{ipInfoData.isp}}</span>
           </div>
       </div>
</template>