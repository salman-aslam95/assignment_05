const ourReducer = (state, action) => {
    switch (action) {
        case 'increament':
            return state + 1;
        case 'decreament':
            return state - 1;
        default:
            break;
    }

}
export default ourReducer;
