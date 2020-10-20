import {initStore} from '../hooks/hook-store';

const configureDetailStore = () => {

    
const actions = {
    ACTIVITY_DETAIL:(curState, activityId) =>{
       let newDetailStatus = true;
        if(curState.activityID === activityId || !activityId){
            newDetailStatus = false;
        }
        return { activityID:activityId,detailsVisible:newDetailStatus}
    }
}

    initStore(actions, { activityID:null,detailsVisible:false});

}

export default configureDetailStore;


