import { useState, createContext, useContext } from "react"
import classes from './NotificationContext.module.css';

const Notification = ({notificationData}) => {
  
    return(
      <article className={classes.texto}>
        <p>{notificationData.text}</p>
      </article>
    )
  }


const NotificationContext = createContext()

export const NotificationProvider = ({children}) =>{
const [notificationData, setNotificationData] = useState({
    text: "",
    type: "success"

})

const setNotification = (type, text) =>{
setNotificationData({
    text, type
})

setTimeout(()=>{
    setNotificationData({
        text:"",
        type: "success"
    })
},3000 )

}

    return(
        <NotificationContext.Provider value = {{setNotification}}>
            {notificationData.text && <Notification notificationData= {notificationData} />}
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => useContext(NotificationContext)