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
                nDate.setDate(nDate.getDate()+updatedProducts[prodIndex].repeat)
                newCompletedDate = nDate.getFullYear() + '-' + nDate.getMonth() + '-' + nDate.getDate();
            }
            updatedProducts[prodIndex] = {
                ...curState.list[prodIndex],
                completed: newCompletedStatus,
                completedDate: newCompletedDate
            };
            localStorage.setItem('todo', JSON.stringify(updatedProducts));

            return { list: updatedProducts }
        },
        DELETE_ACTIVITY: (curState, elementId) => {
            console.log(elementId);
            const newList = curState.list.filter(
                el => el.id !== elementId
            );
            console.log(newList);
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

    /* Configuring the list of activites:
    IF there is data saved on the local storage, load that : ELSE load starting list 
    IF any activity is saved as completed check IF completed date is < Current Date IF is, set completed as false, set completed date as null*/

    if(loadedList){
        const currDate = new Date();
        const currFullDate = currDate.getFullYear() + '-' + currDate.getMonth() + '-' + currDate.getDate();
        const parsedList = JSON.parse(loadedList);
        for (let le of parsedList){
            if(le.completed && le.completedDate < currFullDate){
                const index = parsedList.indexOf(le);
                parsedList[index] = {
                    ...parsedList[index],
                    completed: false,
                    completedDate: null
                }
            }
        }
        console.log(parsedList);
        initStore(actions, {list:parsedList});
    }else{

        /*initialize basic Todo list (array of objects)

        each object in list contains:
        id: unique Id created with UUID,
        title: The name of the to do element,
        completed: The element has been marked as completed?,
        completedDate: when the element has been marked as completed,
        repeat: how often the Todo should be repeated default is everyday,
        plannedFor: for which day the ToDo is needed, default is today
        */
        initStore(actions, {
            list: [
                {
                    id: uuid(),
                    title: 'Study React',
                    completed: false,
                    completedDate: null,
                    repeat:0,
                    plannedFor:null
                },
                {
                    id: uuid(),
                    title: 'Send Resume',
                    completed: false,
                    completedDate: null,
                    repeat:0,
                    plannedFor:null                         
                },
                {
                    id: uuid(),
                    title: 'Buy More Coffee',
                    completed: false,
                    completedDate: null,
                    repeat:6,
                    plannedFor:null
                },
                {
                    id: uuid(),
                    title: 'Destroy My Enemies',
                    completed: false,
                    completedDate: null,
                    repeat:0,
                    plannedFor:null
                }
            ]
        });
    }
    
}

export default configureStore;