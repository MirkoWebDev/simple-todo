import { initStore } from '../hooks/hook-store';
import uuid from 'react-uuid';


const configureStore = () => {
    const actions = {
        TOGGLE_COMPLETED: (curState, productId) => {
            const updatedProducts = [...curState.list];
            const nDate = new Date();
            const prodIndex = curState.list.findIndex(
                p => p.id === productId
            );
            const newCompletedStatus = !curState.list[prodIndex].completed;
            let newCompletedDate = null;
            if(newCompletedStatus){
                newCompletedDate = nDate.getFullYear() + '-' + nDate.getMonth() + '-' + nDate.getDate();
            }
            updatedProducts[prodIndex] = {
                ...curState.list[prodIndex],
                completed: newCompletedStatus,
                completedDate: newCompletedDate
            };
               localSave(updatedProducts);

            return { list: updatedProducts }
        },
        DELETE_ACTIVITY: (curState, elementId) => {
            console.log(elementId);
            const newList = curState.list.filter(
                el => el.id !== elementId
            );

            localSave(newList);


            return { list: newList, activityID:null }
        },
        DELETE_COMPLETED: (curState) => {
            const newList = curState.list.filter(
                el => !el.completed || el.repeat!==null
            );
            localSave(newList);
            return{list:newList}
        },
        ADD_ACTIVITY:(curState, activityData) => {
            const newId = uuid();
            const newElement = {
                id: newId,
                title: activityData.title,
                completed: false,
                completedDate: null,
                repeat: activityData.repeat,
                note:null
            };

            const newList = [...curState.list];
            newList.push(newElement);
            localStorage.setItem('todo',JSON.stringify(newList));
            return {list:newList}
        },
        SET_NAME: (curState, activityData) => {
            const newList = [...curState.list];
            const index = curState.list.findIndex(el => el.id === activityData.id);

            newList[index] = {
                ...curState.list[index],
                title: activityData.title
            }
            
            localSave(newList);


            return { list: newList }
        },
        SET_REPEAT: (curState, activityData) => {
            const newList = [...curState.list];
            const index = curState.list.findIndex(el => el.id === activityData.id);

            newList[index]={
                ...curState.list[index],
                repeat:activityData.repeat
            }
            
            localSave(newList);

            return{list:newList}
        },
        SET_NOTE: (curState, activityData) => {
            const newList = [...curState.list];
            const index = curState.list.findIndex(el => el.id === activityData.id);

            newList[index]={
                ...curState.list[index],
                note:activityData.note
            }

            localSave(newList);

            return{list:newList}
        }
    }

    const localSave = item => {
        localStorage.setItem('todo', JSON.stringify(item));
    }

    const loadedList = localStorage.getItem('todo');

    
    if(loadedList){
        const currDate = new Date();
        const currFullDate = currDate.getFullYear() + '-' + currDate.getMonth() + '-' + currDate.getDate();
        const parsedList = JSON.parse(loadedList);
        for (let le of parsedList){
            if(le.completed){

                if(le.repeat!==null){
                    let dateRepeat = new Date(le.completedDate);
                    dateRepeat.setDate(dateRepeat.getDate() + le.repeat);
                    dateRepeat.setMonth(dateRepeat.getMonth() + 1);
                   const newDateRepeat = dateRepeat.getFullYear() + '-' + dateRepeat.getMonth() + '-' + dateRepeat.getDate();
                    if (newDateRepeat < currFullDate){
                        const index = parsedList.indexOf(le);
                        parsedList[index] = {
                            ...parsedList[index],
                            completed: false,
                            completedDate: null
                        }
                    }
                }
            }
        }
        initStore(actions, {list:parsedList});
    }else{

        initStore(actions, {
            list: [
                {
                    id: uuid(),
                    title: 'Test To Do List',
                    completed: false,
                    completedDate: null,
                    repeat:null,
                    note:null
                },
                {
                    id: uuid(),
                    title: 'Enjoy To Do List',
                    completed: false,
                    completedDate: null,
                    repeat:null,
                    note:null                         
                },
                {
                    id: uuid(),
                    title: 'Buy More Coffee',
                    completed: false,
                    completedDate: null,
                    repeat:null,
                    note:null
                },
                {
                    id: uuid(),
                    title: 'Destroy My Enemies',
                    completed: false,
                    completedDate: null,
                    repeat:null,
                    note:null
                }
            ]
        });
    }
    
}

export default configureStore;