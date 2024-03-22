export function TotalSubscribersReducer(state, action) {
    switch(action.type) {
        case "UPDATE_COUNT":
            const updateCount = action.payload;
            return {...state, count:updateCount};
        
        default: 
            return state;    
    }
    return state;
}