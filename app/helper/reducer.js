const reducer = (initialState , action ) => {
    switch(action.type){
      case 'input' : {
        return {...initialState , searchInput : initialState.searchInput + action.payload }
      }
      default : return initialState;
    }
}
export default reducer;