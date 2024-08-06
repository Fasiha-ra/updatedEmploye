import React, { useEffect, useState } from "react";
import { TicketsWrap } from "./Tickets.styles";
import { TicketData } from "../../Constant/Data";
import Button from "../../Button";
import { useAuth } from "../../../Context/AuthContext";
import { serverDomain } from "../../../constant/server-domain";
import axios from "axios";
const Tickets = ({ title, type, width, name, click = () => {} }) => {
  const { currentUser } = useAuth();

  const [ticketData, setTicketData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${serverDomain}/userTicket/${currentUser}/get`
        );
        console.log(res);
        setTicketData(res.data.data.activeTicket);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <TicketsWrap>
      <h4>{title}</h4>
      <div className="cardHolder">
        {ticketData?.map((value, index) => (
          <div className="ticketCard" key={index}>
            <img src={TicketData[index].img} alt="support" />
            <div className="heading">
              <h4>{value.issue}</h4>
              <span>
                {new Date(value.createdAt).toDateString()}
                {" - "}
                {new Date(value.createdAt).toLocaleTimeString()}
              </span>
            </div>
            <div className="btnHolder">
              <span>{value.ticketId}</span>
              <Button width={width} type={type} onClick={() => click()}>
                {name}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </TicketsWrap>
  );
};

export default Tickets;
