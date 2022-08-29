import axios from "axios"

export const ShowUser = () => async (dispatch) =>{
    const {data} = await axios.get("https://fakestoreapi.com/products");
    try{  
        dispatch({
            type:"SHOW",
            payload:data
            }
        )
    }catch(error){
       
    }
}

export const ADD = (val) =>{
    return{
        type:"ADD",
        payload:{val,qty:0}
    }
}