import { toast } from 'react-toastify';
type NotificationType = 'info' | 'success' | 'warning' | 'error' | 'default';
type ToastPosition = 'TOP_LEFT'| 'TOP_RIGHT' | 
'TOP_CENTER' | 
'BOTTOM_LEFT' |
'BOTTOM_RIGHT' |
'BOTTOM_CENTER'
const notification=(type: NotificationType = 'info', message: string, id: string, time: number=3000, position:ToastPosition='TOP_RIGHT')=>{
    return  toast(message, { 
        type,position: toast.POSITION[position], autoClose: time, toastId: id
    });
};

export default notification;