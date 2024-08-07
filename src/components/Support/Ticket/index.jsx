import React, { useEffect, useState } from "react";
import { TicketsWrap } from "./Tickets.styles";
import { TicketData } from "../../Constant/Data";
import Button from "../../Button";
import { useAuth } from "../../../Context/AuthContext";
import { serverDomain } from "../../../constant/server-domain";
import axios from "axios";
import { useSearch } from "../../SearchContext/index"; // Import useSearch

const Tickets = ({ title, type, width, name, click = () => {} }) => {
  const { currentUser } = useAuth();
  const { searchTerm } = useSearch(); // Get searchTerm from context

  const [ticketData, setTicketData] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${serverDomain}/userTicket/${currentUser}/get`
        );
        console.log(res);
        setTicketData(res.data.data.activeTicket);
        setFilteredTickets(res.data.data.activeTicket); // Initialize with all tickets
      } catch (error) {
        console.log(error);
      }
    })();
  }, [currentUser]);

  useEffect(() => {
    // Filter tickets based on the search term
    setFilteredTickets(
      ticketData.filter(ticket =>
        ticket.issue.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, ticketData]);

  return (
    <TicketsWrap>
      <h4>{title}</h4>
      <div className="cardHolder">
        {filteredTickets.length > 0 ? (
          filteredTickets.map((value, index) => (
            <div className="ticketCard" key={index}>
              <img src={TicketData[index]?.img || ''} alt="support" />
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
          ))
        ) : (
          <p>No tickets found matching the search criteria.</p>
        )}
      </div>
    </TicketsWrap>
  );
};

export default Tickets;
