import {initStore} from '../hooks/hook-store';

const configureDetailStore = () => {

    
const actions = {
    ACTIVITY_DETAIL:(curState, activityId) =>{
        return { activityID:activityId}
    },
    TOGGLE_DETAILS:(curState) => {
        const newState = !curState.detailsVisible;
        return{detailsVisible: newState}
    }
}

    initStore(actions, { activityID:null,detailsVisible:false});

}

export default configureDetailStore;


