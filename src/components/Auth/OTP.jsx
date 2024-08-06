import React from "react";
import Button from "../Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SignUpWrapper } from "./SignUp.styles";
import bgImg from "../../assets/authentication/bg-img.png";
import Logo from "../../assets/authentication/Logo.png";
import OtpInput from "../TextField/otpInput";
const OTP = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const emailVal = location.state?.email || "";
  const handleSubmit=()=>{
    navigate("/UploadProfile", { state: { email: emailVal } });
  }
  return (
    <SignUpWrapper>
      <div className="imgHolder">
        <img src={bgImg} alt="" />
      </div>
      <div className="formHolder">
        <form action="">
          <div className="textHolder">
            <Link href="/">
              <img src={Logo} alt="logo" />
            </Link>
            <p>Please enter OTP send on {emailVal}</p>
          </div>
          <div className="inputHolder">
            <OtpInput />
          </div>
          <p>Don’t receive OTP? <span>Resend</span> </p>
          <Button width="208px" onClick={handleSubmit}>Continue</Button>
        </form>
      </div>
    </SignUpWrapper>
  );
};

export default OTP;
