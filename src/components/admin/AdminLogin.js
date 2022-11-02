  import React, { useState, useCallback, useEffect } from "react";

import axios from "axios";

function AdminLogin(props) {
  const [_cookie, set_cookie] = useState(false);
  const [username, setUserNameValue] = useState("");
  const [password, setPasswordValue] = useState("");
  const [userNameError, setuserNameError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [active, setActive] = useState(false);
  const toggleActive = useCallback(() => setActive((active) => !active), []);
  // const toastMarkup = active ? (
  //   <Toast content="Invalid User or Password" error onDismiss={toggleActive} />
  // ) : null;

  useEffect(() => {}, [props]);
  const [activeToggle, setActiveToggle] = useState(false); //Error Toast Polaris
  const [toggleMesssage, setToggleMesssage] = useState("");
  const toggleMessageChange = useCallback((value) => setToggleMesssage(value), []);
  const toggleActive_ = useCallback(() => setActiveToggle((activeToggle) => !activeToggle), []);
  // const toastValidationError = activeToggle ? (
  //   <Toast
  //     content={toggleMesssage}
  //     error
  //     onDismiss={toggleActive_}
  //     duration={4500}
  //   />
  // ) : null;

  const onChangeName = async (newValue) => {
    setUserNameValue(newValue);
    setuserNameError();
  };
  const onChangePassword = async (newValue) => {
    console.log(newValue.target.value);
    setPasswordValue(newValue.target.value);
    setpasswordError();
  };
  const ValidateUser = () => {
    if (password == "" || password == null) {
      // setpasswordError('password is required');
      setActiveToggle(true);
      setToggleMesssage("password is required");
    }
    if (username == "" || username == null) {
      //setuserNameError('User name is required');
      setActiveToggle(true);
      setToggleMesssage("User name is required");
    }

    if (username != "" && username != null && password != "" && password != null) {
      axios
        .post("https://backend.gauravsinghviventures.com/admin/AuthenticateUser", {
          username: username,
          password: password,
        })
        .then((res) => {
          if (res.data.message == "Auth successful") {
            localStorage.setItem("gsv-token", res.data.token);
            window.location = "/admin";
          } else {
            console.log("auth failed");
            setActive(true);
          }
        })
        .catch((error) => {
          setActive(true);
          console.log(error);
        });
    }
  };

  var handleKeyPress = (event) => {
    console.log(event.key);
    if (event.key === "Enter") {
      console.log("enter press here! ");
      ValidateUser();
    }
  };
  return (
    <div>
      <div className='login__div'>
        <div className='bg__layer'>
          <h1 className='display-4'>GSV Admin Login</h1>
          <div className='card'>
            <div className='card-body'>
              <div className='login__input'>
                <span className='fa fa-user'></span>
                <input
                  type='text'
                  className='username__input'
                  value={username}
                  placeholder='Username'
                  onChange={(event) => onChangeName(event.target.value)}
                  error={userNameError}
                  autoComplete={false}
                />
              </div>
              <div className='login__input'>
                <span className='fa fa-lock'></span>
                <input
                  className='password__input'
                  label='Password'
                  value={password}
                  onChange={(event) => onChangePassword(event)}
                  error={passwordError}
                  type='password'
                  placeholder='Password'
                  onKeyPress={(event) => handleKeyPress(event)}
                />
              </div>
              <button type='submit' className='login__btn' onClick={ValidateUser}>
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
