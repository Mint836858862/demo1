import useMyAccount from "./MyAccount"
import useMyStore from "./myStore"
export default function useStore(){
    return {
        user: useMyAccount(),
        account:useMyStore()
    }
}