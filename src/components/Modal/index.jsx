import React, { useEffect } from "react";
import { ContentHolder, Head, StyledModal, Closer } from "./Modal.styles";
import { IoIosClose } from "react-icons/io";

const Modal = ({
  children,
  open,
  border,
  setOpen,
  color,
  bg,
  padding,
  width,
  radius,
  desktopRight,
  desktopTop,
  parentClass,
}) => {
  useEffect(() => {
    const disableScroll = () => {
      document.body.style.overflow = "hidden";
    };

    const enableScroll = () => {
      document.body.style.overflow = "auto";
    };

    if (open) {
      disableScroll();
    } else {
      enableScroll();
    }

    return () => {
      enableScroll();
    };
  }, [open]);

  return (
    open && (
      <StyledModal open={open} onClick={() => setOpen(false)}>
        <ContentHolder
          bg={bg}
          padding={padding}
          width={width}
          radius={radius}
          desktopRight={desktopRight}
          desktopTop={desktopTop}
          parentClass={parentClass}
          onClick={(e) => e.stopPropagation()}>
          <Head className="popup-header">
            <Closer className="btn-close" onClick={() => setOpen(false)} $border={border}>
              <IoIosClose size={25} color={color} />
            </Closer>
          </Head>
          {children}
        </ContentHolder>
      </StyledModal>
    )
  );
};

export default Modal;
