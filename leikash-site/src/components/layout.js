import React from 'react'
// import { createStore } from "redux"
// import reducer from "../reducers"
// import { Provider } from "react-redux"
// import store from "../store"
import Header from './header'
import Footer from './footer'
import "./layout.css"

// const store = createStore(reducer)
// console.log(store)

const Layout = ( props ) => {
    return (
        <div>
            <Header/>
                { props.children }
            <Footer/>
        </div>
    )
}

/*
const Layout = ( props ) => {
    return (
        <Provider store={store}>
            <Header/>
                { props.children }
            <Footer/>
        </Provider>
    )
}
*/
export default Layout