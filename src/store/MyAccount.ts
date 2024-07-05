import {defineStore} from'pinia'
import { ref } from 'vue';
export  default   defineStore('MyDate',()=>{
    const AccountStatus =ref("失踪")
    return {
        AccountStatus
    }
})