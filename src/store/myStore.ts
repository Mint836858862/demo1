import {defineStore} from'pinia'
import { ref } from 'vue';

export  default  defineStore('MyDates',()=>{
    const UserInfo =ref<number>(0)
    return {
        UserInfo
    }
})