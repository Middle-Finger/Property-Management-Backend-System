<template>

    <!-- 路由出口 -->
    <router-view />

</template>

<script setup>
    import * as echarts from "echarts"
    import {provide, Provider} from "vue"
    provide("echarts",echarts)
</script>



<style lang="scss">
   
</style>
