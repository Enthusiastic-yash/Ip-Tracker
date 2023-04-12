<script setup>
import ipInfo from "../components/ipInfo.vue"
import {onMounted , ref} from "vue"
import axios from "axios"
import {leaflet, map} from "leaflet"

const queryIp =  ref('');
const ipInfoData = ref(null);
let myMap;
onMounted(() =>{
    myMap = L.map('map').setView([23.25469,77.40289], 5);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(myMap);
})


const getIP =  async() =>{
        try{
          const data =  await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_5NKuppqpLh5BFZAX20VUywGumZ0sz&ipAddress=${queryIp.value}`)
            let result = data.data
           ipInfoData.value = {
            address :  result.ip,
            location : result.location.region,
            timezone : result.location.timezone,
            lat : result.location.lat,
            lng : result.location.lng,
            isp : result.isp
           }
          L.marker([ipInfoData.value.lat, ipInfoData.value.lng]).addTo(myMap);
          myMap.setView([ipInfoData.value.lat, ipInfoData.value.lng], 13);
          queryIp.value = ""
           
        }catch(err){
           alert(new Error('something went wrong 😭'))
       
        }
}



</script>
<template>
   <div class="flex flex-col h-screen max-h-screen">
    <!-- Search Result -->
        <div class="z-20 flex relative justify-center  bg-hero-pattern bg-cover pt-8 px-4 pb-32">
            <!-- Search Input -->
                <div class="w-full max-w-screen-sm">
                    <h1 class="text-white text-center sm:text-2xl text-xl uppercase">Ip Address Tracker</h1>
                        <div class="flex justify-center mt-5 ">
                            <input class="flex-1 py-3 px-2 rounded-tl-md rounded-bl-md outline-none" type="text" v-model="queryIp"
                            placeholder="Search for any Ip address or leave empty to get your Ip address"
                            >
                             <font-awesome-icon icon="fa-solid fa-greater-than" class="bg-black text-white px-5 py-5 rounded-tr-md
                             rounded-br-md cursor-pointer
                             "
                             @click="getIP"
                             />
                        </div>
                </div>
                <!-- Ip Info details -->
                <ipInfo  :ipInfoData="ipInfoData" v-if="ipInfoData != null"/>
        </div>
        <!-- Map -->
        <div id="map" class="h-full z-10"></div>
   </div>
</template>