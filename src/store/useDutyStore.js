import { create } from "zustand";
import { api } from "../lib/api";
//Global State**

//full pattern of const dutyStore
// const dutyStore = ()=> {
//     //function body
//     return {}
// }

// Short hand pattern of const dutyStore
// In Zustand, set = function to set value & store into the state
const dutyStore = (set)=> ({
    personnel:[], //empty array
    locations:[],
    assignments:[],
    selectedLocationId:null,
    
//----------------------------------
//const dutyStore can return values in objects like these
    // personnel:[], //empty array
    // polar:"Bear", //string
    // rabbit: ()=>console.log("Moon") //function
//----------------------------------

    fetchAll: async () => {
        //function body
        try {
            const personnel = await api.get('/personnel');
            // console.log("This is res in Zustand", personnel)
            const locations = await api.get('/locations')
            set({
                personnel:personnel,
                locations:locations                
            })
        } catch (error) {
            console.log(error)
        }
    }
})

const useDutyStore = create (dutyStore)

//----------------------------------
//Short hand pattern of const useDutyStore & const dutyStore
// const useDutyStore = create (()=> ({
//     personnel:[], //empty array
//     polar:"Bear", //string
//     rabbit: ()=>console.log("Moon") //function
// }))
//----------------------------------

export default useDutyStore;