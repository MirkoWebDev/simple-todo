import { initStore } from '../hooks/hook-store';
import uuid from 'react-uuid';


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
            localStorage.setItem('todo', JSON.stringify(updatedProducts));

            return { list: updatedProducts }
        },
        DELETE_ACTIVITY: (curState, elementId) => {
            const newList = curState.list.filter(
                el => el.id !== elementId
            );
            localStorage.setItem('todo', JSON.stringify(newList));

            return { list: newList }
        },
        ADD_ACTIVITY:(curState, activityData) => {
            const newId = uuid();
            const newElement = {
                id: newId,
                title: activityData.title,
                duration: activityData.duration,
                completed: false
            };

            const newList = [...curState.list];
            newList.push(newElement);
            localStorage.setItem('todo',JSON.stringify(newList));
            return {list:newList}
        }
    }

    const loadedList = localStorage.getItem('todo');

    if(loadedList){
        console.log(JSON.parse(loadedList));
        initStore(actions, {list:JSON.parse(loadedList)});
    }else{
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
    
}

export default configureStore;