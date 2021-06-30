import React, {useState} from 'react'


const styleSheet = {
    fontSize:"30px"
}
export default function DateComponent() {
    const[today, setToday] =useState(new Date())
    const days =["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"]
    console.log(days[today.getDay()])
    const month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    console.log(month[today.getMonth()])
    console.log([today.getDate()])
    setInterval(function() {setToday(new Date())},1000)


    return (
        <h3 style={styleSheet}>
         {days[today.getDay()]} 
         <br></br>
         {month[today.getMonth()]} {[today.getDate()]}
        </h3>

    )
    
}
