
import DateComponent from "./Components/DateComponent"; 
import TimeComponent from "./Components/TimeComponent";
import WeatherComponent from "./Components/WeatherComponent"
// this is the first component that will render and calls the MainPage Component
const styleSheet={
    parent:{
        display:'flex',
        justifyContent:"space-between"
    },
    weather: {
        

    },

    clock:{
       
    }
}

const App=()=> {
    return(
       <div> 
           <div style = {styleSheet.parent}>
            <div><DateComponent/></div>
            <div><WeatherComponent/></div>
    

            </div> 
            <div><TimeComponent/></div>
        </div>
    )
}


export default App;
