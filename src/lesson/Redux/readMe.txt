

Redux is different than react.
It is designed for state management.
It is state management library.

const store = Redux.createStore(reducer);

const reducer = () =>{ }
or
const reducer = () => []
or 
const reducer = () => ""

const reducer = (state=[], action) => {
    if(action.type === 'what_to_do') {
        return action.payload.run_function()
    } 
    else if(action.type === 'do_something') {
        // not so perfect
        return action.payload.run_function()
        return state;
        

        // more correct way
        return [...state, action.payload]
    }

    return state;
}

store.getState() // what is inside the store

const action = {
    type : "what_to_do',
    payload : "where_to_do'
}

store.dispatch(action);

const actionTwo = {
    type : 'do_something',
    payload : 'perform_on_this'
}

store.dispatch(actionTwo)


Store is a central place where we keep our state.
Store always need to pass reducer.


Reducer is a way to interact with store
Reducer can return anything



Action is nothing more just obj
2 things are imp in Action
1) type : what is method you want to do
2) payload : where to do


