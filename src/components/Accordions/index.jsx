import React, { useState } from "react";
import {
  AccordionWrap,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from "./Accordions.styles";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
const Accordions = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  console.log(items);
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <AccordionWrap>
      {typeof items !== "object" &&
        items.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionHeader onClick={() => handleToggle(index)}>
              {index + 1}. {item.title}
              <span>
                {openIndex === index ? <FaAngleDown /> : <FaAngleRight />}
              </span>
            </AccordionHeader>
            <AccordionContent isOpen={openIndex === index}>
              {item.description}
            </AccordionContent>
          </AccordionItem>
        ))}
    </AccordionWrap>
  );
};

export default Accordions;
