import { initStore } from '../hooks/hook-store';

const configureModal = () => {


    const actions = {
        TOGGLE_MODAL: (curState) => {
            const newState = !curState.modalVisible;
            return { modalVisible: newState }
        },
        DELETE_ID: (curState, id) => {
            
            return { deleteID: id }
        }
    }

    initStore(actions, { modalVisible:false, deleteID: null});

}

export default configureModal;


