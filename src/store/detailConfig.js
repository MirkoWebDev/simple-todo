import {initStore} from '../hooks/hook-store';

const configureDetailStore = () => {

    
const actions = {
    ACTIVITY_DETAIL:(curState, activityId) =>{
       let newDetailID = null;
        if(curState.activityID !== activityId){
            newDetailID = activityId;
        }
        return { activityID:newDetailID}
    }
}

    initStore(actions, { activityID:null});

}

export default configureDetailStore;


