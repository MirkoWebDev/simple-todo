import { initStore } from '../hooks/hook-store';

const configureModal = () => {


    const actions = {
        TOGGLE_MODAL: (curState) => {
            const newState = !curState.modalVisible;
            return { modalVisible: newState }
        }
    }

    initStore(actions, { modalVisible:false});

}

export default configureModal;


