<script setup lang="ts">
import useStore from "./store"
const {account} = useStore()
console.log('account',account.UserInfo);



</script>

<template>
    <div style="color: blue; font-size: 26px;">New Project</div>
</template>

<style scoped lang='less'>

</style>
