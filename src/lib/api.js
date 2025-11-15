import axios from "axios";

// Axios Custom instance defaults syntax **
// Set config defaults when creating the instance
// const instance = axios.create({
//     baseURL:'https://api.example.com'
// })

// Alter defaults after instance has been created 
// instance.defaults.headers.common['Authorization'] = AUTH
//------------------------------

const API_URL = "http://localhost:3000"

const client = axios.create({
    baseURL:API_URL,
})

// const api = {
    // key:"value", //within {} object, need key:"value",
    // get:()=>{ } //full syntax
    // get(){ } // short hand

    // Get: Need path (url)
    // const data before destructuring data
    // async get(path) {
        //function body
    //     const data = await client.get(path)
    //     return data
    // },

    // Post : Need path (url) & body that is data
    // const data before destructuring data
    // async post(path, body){
        //function body
    //     const data = await client.post(path,body)
    //     return data
    // }
//-----------------------------
// Refer to this code, we declare variable 'res' to get the data already. When we need data inside res, we console.log(res.data). Then, we declare const data which is the same name, data. Thus, we can destruct const data = await await client.get(path) and const data = await client.post(path,body) **
// const fetchAll = async()=> {
//     //function body
//     try {
//       const res = await axios.get('http://localhost:3000/personnel')

//       console.log(res)
//       console.log(res.data) //the result we get here will be kept in useEffect

//     } catch (error) {      
//       console.log(error.response.data) //This is to get the msg "Not Found". Then, we'll display it on Modal
//     }
//   }
//-----------------------------

// Instead of export default api at the bottom, we can export pi here by typing export before const api.
export const api = {
        // const data with destructuring **
        // Get: Need path (url)
        // Get here isn't HTML method. It's a variable name we assign. 
        async get(path) {
            //function body
            const {data} = await client.get(path)
            return data
        },
        
        // Post : Need path (url) & body that is data
        // const data before destructuring data
        // Post here isn't HTML method. It's a variable name we assign.
        async post(path, body){
            //function body
            const {data} = await client.post(path,body)
            return data
        }
    }

    
// console.log(api.key)
// console.log(api.get)




// Other syntax pattern for ref.**
// const fetchAll = async()=> {
//     //function body
//     try {
//       const res = await axios.get('http://localhost:3000/personnel')

//       console.log(res)
//       console.log(res.data) //the result we get here will be kept in useEffect

//     } catch (error) {
//       console.log("Rabbit on the moon", error)
//       //console.log result & AxiosError msg will be displayed when the errors occur.
//       console.log(error.response.data) //This is to get the msg "Not Found". Then, we'll display it on Modal
//     }
//   }

