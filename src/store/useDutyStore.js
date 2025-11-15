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
// In Zustand, get = function to get into state in Global State
const dutyStore = (set, get)=> ({
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
            // Declare variable personnel & locations here are recommended when we want to store any returned values
            // const personnel = await api.get("/personnel");
            // console.log("This is res in Zustand", personnel)
            // const locations = await api.get("/locations");
            // const assignments = await api.get("/locationPersonnel");

            //-------------------
            // Promise.all()
            // It's used i/o await api.get() above to allow all functions work simultaneously, no need to wait the 1st function to finish, then go to the next function
            // Syntax: const rabbit = await Promise.all([element1,el2,el3,..])
            const [personnel, locations, assignments] = await Promise.all([
                api.get("/personnel"),
                api.get("/locations"),
                api.get("/locationPersonnel")
            ])
                // console.log('rabbit', rabbit[0])

            set({
                personnel: personnel,
                locations: locations,
                assignments: assignments               
            })
        } catch (error) {
            console.log(error)
        }
    },

    addLocation: async (lat, lng, name) => {
        //function body
        try {

            // await api.post Here, we don't declare variable before await. We can do this way too in case, we don't care about back-end. We'll use our statement instead.
            
            // await api.post('/locations',
            //     {
            //         name:name,
            //         lat:Number(lat),
            //         lng:Number(lng),
            //         maxCapacity:5
            //     }
            // )

            //----------------

            // But it's better to declare variable. Just in case, back-end side wants to send sth to front-end. Thus, we declare const res = await api.post here
            const res = await api.post('/locations',
                {
                    name:name,
                    lat:Number(lat),
                    lng:Number(lng),
                    maxCapacity:5
                }
            )
            await get().fetchAll()

        } catch (error) {
            console.log('Add Location Error', error)
        }
    },

    assignPerson: async (personId, locationId) => {
        //function body
        try {
            console.log(personId, locationId)
            const res = await api.post('/locationPersonnel', {
                personId:personId, 
                locationId:locationId
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