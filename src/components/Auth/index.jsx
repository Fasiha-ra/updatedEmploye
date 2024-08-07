import React, { useState, useEffect } from "react";
import { SignUpWrapper } from "./SignUp.styles";
import Logo from "../../assets/authentication/Logo.png";
import bgImg from "../../assets/authentication/bg-img.png";
import TextField from "../TextField/TextField";
import Button from "../Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { serverDomain } from "../../constant/server-domain";
import { useAuth } from "../../Context/AuthContext";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { setCurrentUser } = useAuth();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error messages

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      const response = await axios.get(`${serverDomain}/user?email=${email}&companyId=1`);
      console.log("res email", response);

      if (response.data.status === true) {
        // User already exists, redirect to dashboard
        localStorage.setItem('isAuthenticated', 'true'); // Assuming authentication is successful
        setCurrentUser(response.data?.id);
        navigate("/dashboard");
      } else {
        // User not found, proceed with sign-up
        navigate("/signUp", { state: { email } });
      }
      
    } catch (e) {
      setError("An error occurred. Please try again.");
      console.log("Error:", e);
    }
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setError(""); // Clear error message when user types
  };

  return (
    <>
      <SignUpWrapper>
        <div className="imgHolder">
          <img src={bgImg} alt="" />
        </div>
        <div className="formHolder">
          <form onSubmit={handleSubmit}>
            <div className="textHolder">
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
              <p>
                Welcome to our Evolve - X platform!<br /> Enhance your skills and broaden your knowledge.
              </p>
            </div>
            <div className="inputHolder">
              <TextField
                parentClass="emailWrapper"
                className="input-field"
                field_Name="email"
                type="email"
                placeholder="Enter Your Official Email-id"
                value={email}
                onChange={handleInputChange}
                bgClr="rgba(255, 255, 255, 0.37)"
              />
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Button width="208px" type="submit">
              Continue
            </Button>
          </form>
        </div>
      </SignUpWrapper>
    </>
  );
};

export default SignUp;
