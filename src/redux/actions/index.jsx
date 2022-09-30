import axios from 'axios';

import {
    POST_FORM,

} from '../const/const'


export const registerForm = (payload) => {
    
    return async function(dispatch) {
        return await axios.post('https://formspree.io/f/mwkzbkye', payload)
        
        .then(response => dispatch({type:  POST_FORM, payload:response.data}))
        console.log(payload)
                     .catch(err => console.error(err))
            }
        
        }






