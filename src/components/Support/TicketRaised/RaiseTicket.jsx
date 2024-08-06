import React, { useState } from "react";
import { TicketRaisedWrap } from "./TicketRaise.styles";
import backArrow from "../../../assets/support/backArrow.png";
import support from "../../../assets/support/support.png";
import product from "../../../assets/support/product.png";
import Button from "../../Button";
import TextField from "../../TextField/TextField";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";
import axios from "axios";
import { serverDomain } from "../../../constant/server-domain";
const RaiseTicket = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [issue, setIssue] = useState("");
  const backPage = () => {
    navigate("/support");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${serverDomain}/userTicket`, {
        userId: Number(currentUser),
        issue: issue,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TicketRaisedWrap>
      <div className="headingHolder">
        <img src={backArrow} alt="arrow" onClick={backPage} />
        <h4>Ticket has been raised</h4>
      </div>
      <div className="card">
        <div className="ticketCard">
          <div className="imgHolder">
            <img src={support} alt="support" />

            <div className="headingWrapper">
              <h4>System Issue</h4>
              <span>02 Apr 2024, 5:60 pm</span>
            </div>
          </div>
          <div className="ticketID">
            <span>Ticket id : #ASDFGHJLB</span>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="ticketCard">
          <div className="imgHolder">
            <img src={product} alt="support" />
            <div className="headingWrapper">
              <h4>System Support</h4>
              <span>02 Apr 2024, 5:60 pm</span>
            </div>
          </div>
        </div>
        <div className="textarea">
          <TextField
            parentClass="TextAreaHold"
            variant="textarea"
            parentClassName="emailWrapper"
            className="input-field"
            placeholder="Please describe your issue here in as much details as possible"
            bgClr="rgba(255, 255, 255, 0.37)"
            onChange={(e) => setIssue(e.target.value)}
            value={issue}
          />
        </div>
        <div className="btnHolder">
          <Button width="186px" 
          onClick={handleSubmit}
          >Send</Button>
        </div>
      </div>
    </TicketRaisedWrap>
  );
};

export default RaiseTicket;
