import React from "react";
import { TicketRaisedWrap } from "./TicketRaise.styles";
import backArrow from "../../../assets/support/backArrow.png";
import support from "../../../assets/support/support.png";
import product from "../../../assets/support/product.png";
import Button from "../../Button";
const TicketRaised = ({ backPage }) => {
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
          <div className="ticketID">
            <span>Resolved</span>
          </div>
        </div>
        <div className="para">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="btnHolder">
          <Button width="186px">Close Ticket</Button>
        </div>
      </div>
    </TicketRaisedWrap>
  );
};

export default TicketRaised;
