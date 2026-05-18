import "./AdminLogin.css"
import axios from "axios"
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify"
const BACKENDURL = import.meta.env.BACKENDURL;

const Login = ({ setToken }) => {

  console.log(BACKENDURL)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your login logic here
    const { email, password } = formData

    try {

      const { data } = await axios.post(`${BACKENDURL}/api/adminLogin`, { email, password })

      data.success ? toast.success(data.message) : toast.error(data.message)
      console.log(data.token)
      setToken(data.token)
      localStorage.setItem(
        "adminLoginTime",
        Date.now()
      );
    }
    catch (error) {
      toast.error(error.message)

    }




  };
  return (
    <div>
      <ToastContainer />
      <div className="admin-container">
        <div className="wrapper">

          <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="input-field">
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label>Enter your email</label>
            </div>

            <div className="input-field">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <label>Enter your password</label>
            </div>

            <div className="forget">
              {/* <label htmlFor="remember">
                <input
                  type="checkbox"
                  id="remember"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <p>Remember me</p>
              </label> */}
              {/* <a href="#">Forgot password?</a> */}
            </div>

            <button className="admin-login-btn3" type="submit">Log In</button>

            {/* <div className="register">
              <p>Don't have an account? <a href="#">Register</a></p>
            </div> */}
          </form>
        </div>
      </div>
    </div>

  )
}

export default Login
