import React, { useState, useEffect, useReducer, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { useImmerReducer } from 'use-immer'    // Allows modifying of state data directly
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Axios from "axios";
import { CSSTransition } from "react-transition-group";
// Axios.defaults.baseURL = process.env.BACKENDURL || "";


// Contexts
import StateContext from "./context/StateContext"
import DispatchContext from "./context/DispatchContext"


// Pages
import Login from "./pages/Login"


// Components
import LoadingDotsIcon from "./components/LoadingIcon";
import FlashMessages from "./components/FlashMessages";




function App() {
  let username, token, userData;
  userData = localStorage.getItem("userData")

  if (userData) {
    userData = JSON.parse(userData)
    username = userData.username
    token = userData.token
  } else {
    username = '', token = ''
  }

  const initialState = {
    loggedIn: Boolean(localStorage.getItem("userData")),
    flashMessages: [],
    user: { token, username }
  }

  function mainReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.loggedIn = true
        draft.user = action.userData
        break;

      case "logout":
        draft.loggedIn = false
        break

      case "flashMessage":
        draft.flashMessages.push(action.value)
        break

      default:
        break;
    }
  }

  const [state, dispatch] = useImmerReducer(mainReducer, initialState)

  // adding userdata in local storage whenever they log in our out 
  useEffect(() => {
    if (state.loggedIn) {
      localStorage.setItem("userData", JSON.stringify(state.user))
    } else {
      localStorage.removeItem("userData")
    }

  }, [state.loggedIn])


  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <FlashMessages messages={state.flashMessages} />

          <Suspense fallback={<LoadingDotsIcon />}>
            <Routes>
              <Route path="/" element=""></Route>
              <Route path="/login" element={<Login />}></Route>
            </Routes>
          </Suspense>

        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default App