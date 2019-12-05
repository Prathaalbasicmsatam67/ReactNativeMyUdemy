import React from "react"


import { createStore } from "redux"

import { Provider } from "react-redux"
import EmpApp from "./src/lesson/ReduxEmpApp/EmpApp"


const initialState = {
    1: {
        empid: 1,
        empName: "Employee 1",
        empSalary: 10000.0
    },
    2: {
        empid: 2,
        empName: "Employee 2",
        empSalary: 20000.0
    },
    3: {
        empid: 3,
        empName: "Employee 3",
        empSalary: 30000.0
    },
    4: {
        empid: 4,
        empName: "Employee 4",
        empSalary: 40000.0
    }
}

const reducer = (state = initialState, action) => {

    let initialSalary;
    let increment;
    let newSalary;
    let employeeObject;

    if (action.id) {
        initialSalary = state[action.id].empSalary;
        increment = (initialSalary / 100) * 20

    }

    switch (action.type) {

        case "GOOD_PERFORMANCE":
            newSalary = initialSalary + increment
            employeeObject = state[action.id];
            employeeObject.empSalary = newSalary
            // return new state
            return Object.assign({}, state);

        case "BAD_PERFORMANCE":
            newSalary = initialSalary - increment
            employeeObject = state[action.id];
            employeeObject.empSalary = newSalary
            // return new state
            return Object.assign({}, state);

    }

    return state;
}


const store = createStore(reducer)

export default class App extends React.Component {

    render() {

        return (
            <Provider store={store}>
                <EmpApp />
            </Provider>);
    }


}