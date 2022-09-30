import axios from 'axios';

export const  GET_ALL_ILLUSTRATIONS = " GET_ALL_ILLUSTRATIONS"
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY"


export const getAllIllustrations = () => {
    return async function(dispatch) {
        return axios.get('https://docuradb-default-rtdb.firebaseio.com/illustrations/illustrations.json')
        .then(response => dispatch({type:  GET_ALL_ILLUSTRATIONS,payload:response.data}))
        
                     .catch(err => console.error(err))
            }
        
        }


export const filterByCategory = (payload) => {
    return {
        type: FILTER_BY_CATEGORY,
        payload
    }
}



/* export const postIllustration = (infoDelFormulario) => {
    return async function(dispatch){
        return axios.post('http://localhost:3001/pokemons', infoDelFormulario)
        .then(response => dispatch({type: CREATE_POK, payload: response}))
        .catch(err => console.error(err))
    }
} */
