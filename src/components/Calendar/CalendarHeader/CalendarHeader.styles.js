import styled from "styled-components";

export const HeaderWrapper = styled.div`
padding: 0 0 30px;
  display: flex;
  justify-content: space-between;
flex-wrap: wrap;
.calendar{
  position: relative;
}
  .sessionHolder {
    display: flex;
    gap: 20px;
    flex-wrap:wrap;
    @media (min-width: 576px){
      flex-wrap:nowrap
    }
    .react-datepicker {
      position: absolute;
      left: -88%;
      z-index: 1;
    }
    button {
      display: flex;
      align-items: center;
      gap: 10px;
      color: var(--gray-light);
      padding: 10px 20px;
      font-size: 14px;
    }

    .type {
      position: relative;

      .dropdown {
        display: ${({ $toggleDropDown }) =>
          $toggleDropDown ? "flex" : "none"};
        flex-direction: column;
        text-align: center;
        position: absolute;
        top: 100%;
        left: 0;
        border-radius: 20px;
        width: 165px;
        background: var(--white);
        box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
        z-index: 9;
        opacity: ${({ $toggleDropDown }) => ($toggleDropDown ? "1" : "0")};
        transform: translateY(
          ${({ $toggleDropDown }) => ($toggleDropDown ? "0" : "10px")}
        );
        transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

        a {
          padding: 10px 20px;
          font-size: 16px;
          border-bottom: 1px solid var(--gray-50);

          &:hover {
            background-color: var(--gray-50);
          }
        }
      }
    }
  }
`;
