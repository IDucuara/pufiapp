
import {
    POST_FORM,

} from '../const/const'

const initialState = {
    register: []
    
    
}

function reducer(state = initialState, action) {
    switch (
    action.type
    ) {
        case POST_FORM:
            return {
                ...state,
                register: action.payload,
            }

        

        default:
            return state
    }
}

export default reducer;
