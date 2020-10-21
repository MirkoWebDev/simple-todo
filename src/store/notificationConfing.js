import {initStore} from '../hooks/hook-store';

const configureNotificationStore = () => {

    const actions = {
        CALL_NOTIFICATION:(curState, notification)=>{
            return{notificationText:notification}
        },
        CANCEL_NOTIFICATION:(curState)=>{
            return{notificationText:null}
        }
    };

    initStore(actions,{notificationText:null});
}

export default configureNotificationStore;