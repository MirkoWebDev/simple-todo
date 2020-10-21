import React from 'react';
import {useStore} from '../../hooks/hook-store';

import classes from './notification.module.css'


const Notification = () => {
    const [state, dispatch] = useStore();


   let notificationClasses = []

   notificationClasses.push(classes.Notification);

   if(state.notificationText){
       notificationClasses.push(classes.Active);
       const timer = setTimeout(() => {
           dispatch('CALL_NOTIFICATION',null);
           clearTimeout(timer);
       },2000)
   }

    return(
        <div className={notificationClasses.join(' ')}>
            <span className="material-icons">error_outline</span>
            <span>{state.notificationText}</span>
        </div>
    )

}

export default Notification;