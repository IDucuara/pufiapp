
import {
    GET_ALL_ILLUSTRATIONS,
    FILTER_BY_CATEGORY,

} from '../actions/index'

const initialState = {
    allIllustrations: []
    
}

function reducer(state = initialState, action) {
    switch (
    action.type
    ) {
        case GET_ALL_ILLUSTRATIONS:
            return {
                ...state,
                allIllustrations: action.payload,
            }

        case FILTER_BY_CATEGORY:
            return {
                ...state,
                allIllustrations:
                    action.payload === 'All' ? state.allIllustrations : state.allIllustrations.filter((i) =>
                        i.category.includes(action.payload)
                    )
            }

        default:
            return state
    }
}

export default reducer;
