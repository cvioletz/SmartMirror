import React, {useState} from 'react'



const styleSheet={
    textAlign:"center",
    fontSize:"45px",
}
export default function TimeComponant() {
    const[today, setToday] =useState(new Date())
    const hours =["12","1","2","3","4","5","6","7","8","9","10","11","12","1","2","3","4","5","6","7","8","9","10","11"]
    console.log(hours[today.getHours()])
    const minutes =["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59"]
    console.log(minutes[today.getMinutes()])
    setInterval(function() {setToday(new Date())},1000)
    
    return (
        <div style={styleSheet}>
            {hours[today.getHours()]}{":"}{[today.getMinutes()]}
        </div>
    )
}
