import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NameIcon from "../../assets/name-icon.png";
import EmailIcon from "../../assets/email-icon.png";
import PasswordIcon from "../../assets/password-icon.png";
import Logo from "../../assets/communityamerica_logo.webp";
import "./Signup.scss";
import { useUserContext } from "../../store/UserContext";

export const Signup: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<any>({});
  const { setUser } = useUserContext();
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
  };

  const validateForm = () => {
    const newErrors: any = {};

    // Validate name
    if (!name.trim()) {
      newErrors.name = "Username is required.";
    }

    // Validate email
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email.";
    }

    // Validate password
    if (!password.trim()) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // returns true if no errors
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const user = {
        name: name,
        email: email,
        password: password,
      };

      // set the value of user using usercontext's setUser method
      setUser(user);

      navigate("/home");
    }
  };
  return (
    <div className="container">
      <div className="login-header">
        <img src={Logo} alt="" height="180px" width="400px" />
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={EmailIcon} alt="" />
          <input
            required
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div className="input">
          <img src={NameIcon} alt="" />
          <input
            required
            type="text"
            placeholder="Username"
            name="name"
            onChange={handleChange}
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>
        <div className="input">
          <img src={PasswordIcon} alt="" />
          <input
            required
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
      </div>
      <div className="signup-submit-container">
        <div className="signup-submit gray" onClick={handleSubmit}>
          Create Account and Login
        </div>
      </div>
    </div>
  );
};
