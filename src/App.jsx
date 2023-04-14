import "./App.css"
import React from "react";

function App() {
  return (
    <>
      <div class="center">
        <h1>Login Form</h1>
            <form>
              <div class="txt">
                <label class="label">Email</label>
              <input type="text" id="mail"></input>
              </div>        
              <div class="txt">
                <label class="label">Password</label>
              <input type="password" id="pwd" ></input>
              </div>
              <input type="submit" value="Log In"></input>
            </form>
        </div>
    </>
  )
}


export default App;
