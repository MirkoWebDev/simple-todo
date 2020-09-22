import {initStore} from '../hooks/hook-store';

const configureDetailStore = () => {

    /*Update, ACTIVITY_DETAIL to only pass and id
    update ActivityDetails component to get details based on taht id
    isnetead of props*/
const actions = {
    ACTIVITY_DETAIL:(curState, activityData) =>{
        const newDetails = {
            id:activityData.id,
            title:activityData.title,
            duration:activityData.duration,
            completed:activityData.completed
        }
        return{activityDetails:newDetails,detailsVisible:true}
    },
    TOGGLE_DETAILS:(curState) => {
        const newState = !curState.detailsVisible;
        return{detailsVisible: newState}
    }
}

initStore(actions, {activityDetails:null,detailsVisible:false});

}

export default configureDetailStore;