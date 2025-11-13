import { create } from "zustand";
//Global State**

//full pattern of const dutyStore
// const dutyStore = ()=> {
//     //function body
//     return {}
// }

//Short hand pattern of const dutyStore
const dutyStore = ()=> ({
    personnel:[], //empty array
    locations:[],
    assignments:[],
    selectedLocationId:null,
    

//const dutyStore can return values in objects like these
    // personnel:[], //empty array
    polar:"Bear", //string
    // rabbit: ()=>console.log("Moon") //function
})

const useDutyStore = create (dutyStore)

//Short hand pattern of const useDutyStore & const dutyStore
// const useDutyStore = create (()=> ({
//     personnel:[], //empty array
//     polar:"Bear", //string
//     rabbit: ()=>console.log("Moon") //function
// }))

export default useDutyStore;