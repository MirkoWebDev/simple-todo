import { initStore } from '../hooks/hook-store';


const configureStore = () => {
    const actions = {
        TOGGLE_COMPLETED: (curState, productId) => {
            const prodIndex = curState.list.findIndex(
                p => p.id === productId
            );
            const newFavStatus = !curState.list[prodIndex].completed;
            const updatedProducts = [...curState.list];
            updatedProducts[prodIndex] = {
                ...curState.list[prodIndex],
                completed: newFavStatus
            };
            return { list: updatedProducts }
        },
        ADD_ACTIVITY:(curState, activityData) => {
            const newId = '5';
            const newElement = {
                id: newId,
                title: activityData.title,
                duration: activityData.duration,
                completed: false
            };

            const newList = [...curState.list];
            newList.push(newElement);
            return {list:newList}
        }
    }

    initStore(actions, {
        list: [
            {
                id: '1',
                title: 'Study React',
                duration: 'today',
                completed: false
            },
            {
                id: '2',
                title: 'Send Resume',
                duration: 'today',
                completed: false
            },
            {
                id: '3',
                title: 'Buy More Coffee',
                duration: 'today',
                completed: false
            },
            {
                id: '4',
                title: 'Destroy My Enemies',
                duration: 'today',
                completed: false
            }
        ]
    });
}

export default configureStore;