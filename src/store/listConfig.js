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

    /* Configuring the list of activites:
    IF there is data saved on the local storage, load that : ELSE load starting list 
    IF any activity is saved as completed check IF completed date is < Current Date IF is, set completed as false, set completed date as null*/

    if(loadedList){
        const currDate = new Date();
        const currFullDate = currDate.getFullYear() + '-' + currDate.getMonth() + '-' + currDate.getDate();
        const parsedList = JSON.parse(loadedList);
        for (let le of parsedList){
            if(le.completed){
                console.log(le.title + ' is Completed check START:');
                if(le.repeat!==0){
                    console.log(le.title + ' has repeat of: ' + le.repeat);
                    let dateRepeat = new Date(le.completedDate);
                    console.log('Set new Repeat Date: '+dateRepeat);
                    dateRepeat.setDate(dateRepeat.getDate() + le.repeat);
                    dateRepeat.setMonth(dateRepeat.getMonth() + 1);
                    console.log('Added repeat day and Ajusted Month: '+dateRepeat);
                   const newDateRepeat = dateRepeat.getFullYear() + '-' + dateRepeat.getMonth() + '-' + dateRepeat.getDate();
                    console.log(le.title +' REPEAT date is: ' + newDateRepeat);
                    console.log(le.title +' FULL date is: ' + currFullDate);
                    if (newDateRepeat < currFullDate){
                        console.log(le.title + ' Set To Reset');
                        const index = parsedList.indexOf(le);
                        parsedList[index] = {
                            ...parsedList[index],
                            completed: false,
                            completedDate: null
                        }
                    }
                }else{
                    console.log(le.title + ' has no repeat');
                    if(le.completedDate < currFullDate){
                        console.log(le.title + ' Set To Reset');
                        console.log(le.title + ' Repeat date is set To ' + le.completedDate);
                        console.log('Current full date is: ' + currFullDate);
                        const index = parsedList.indexOf(le);
                        parsedList[index] = {
                            ...parsedList[index],
                            completed: false,
                            completedDate: null
                        }
                    }
                }
                console.log(le.title + ' CHECK END');
            }
        }
        initStore(actions, {list:parsedList});
    }else{

        /*initialize basic Todo list (array of objects)

        each object in list contains:
        id: unique Id created with UUID,
        title: The name of the to do element,
        completed: The element has been marked as completed?,
        completedDate: when the element has been marked as completed,
        repeat: how often the Todo should be repeated default is everyday
        */
        initStore(actions, {
            list: [
                {
                    id: uuid(),
                    title: 'Study React',
                    completed: false,
                    completedDate: null,
                    repeat:0,
                    note:null
                },
                {
                    id: uuid(),
                    title: 'Send Resume',
                    completed: false,
                    completedDate: null,
                    repeat:0,
                    note:null                         
                },
                {
                    id: uuid(),
                    title: 'Buy More Coffee',
                    completed: false,
                    completedDate: null,
                    repeat:0,
                    note:null
                },
                {
                    id: uuid(),
                    title: 'Destroy My Enemies',
                    completed: false,
                    completedDate: null,
                    repeat:0,
                    note:null
                }
            ]
        });
    }
    
}

export default configureStore;