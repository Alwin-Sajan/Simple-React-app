import React from 'react';
import './App.css';

function Login(){
    return (<div className="login-page">
    <div className="login-main">
      <div className="profile">
        <a href="/index.html">
          <h2>Lunar</h2>
        </a>
        <h1>Login Form</h1>
        <br />
        <img
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQMau3jxYdhzxwZicoXzU_PBxgpOZ4JSeCjJVe_20-Jx1xDbcxC"
          alt="Profile picture"
        />
      </div>
      <br />
      <br />
      <Form/>
    </div>
  </div>
  );
}

function Form(){
    return (<form>
        <label htmlFor="Name">Username </label>
        <input type="text" id="Name" placeholder="Enter username" />
        <br />
        <br />
        <label htmlFor="pwd">Password </label>
        <input type="password" id="pwd" placeholder="Enter password" />
        <br />
        <br />
        <button type="submit">Login</button>
        <br />
        <br />
        <input type="checkbox" id="check" />
        <label htmlFor="check">Remember me</label>
        <br />
        <br />
        <a href="#">Forget Password</a>
        <br />
        <br />
        <button type="reset">Cancel</button>
      </form>);
}
export default Login;