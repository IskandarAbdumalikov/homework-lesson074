import "./login.scss";
import React, { useEffect, useState } from "react";
import { useGetValue } from "../../hooks/useGetValue";
import { useSignInMutation } from "../../context/api/userApi";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const initialState = {
  UserName: "john32",
  password: "12345678",
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { formData, handleChange } = useGetValue(initialState);
  const [signIn, { data, isLoading, isSuccess, isError, error, success }] =useSignInMutation();
  console.log(data);
  let navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("x-auth-token", data.data.token);
      navigate("/admin/products");
    }
    if (isError) {
      alert(error.data.message);
    }
  }, [isSuccess, isError]);

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(formData);
  };

  return (
    <div className="login container">
      <div className="login__left">
        <h1>Hi dear !!!</h1>
        <button onClick={()=>navigate('/')}>Home</button>
      </div>
      <form className="login__form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          required
          autoFocus
          placeholder="Username"
          value={formData.UserName}
          onChange={handleChange}
          type="text"
          name="UserName"
        />
        <div className="password">
          <input
            required
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            name="password"
          />
          <div className="eyes">
            {showPassword ? (
              <FaEyeSlash onClick={() => setShowPassword(false)} />
            ) : (
              <FaEye onClick={() => setShowPassword(true)} />
            )}
          </div>
        </div>
        <button disabled={isLoading}>Login</button>
      </form>
    </div>
  );
};

export default Login;
