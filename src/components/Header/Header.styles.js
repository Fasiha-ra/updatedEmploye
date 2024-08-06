import styled, { css } from "styled-components";
export const HeaderWrap = styled.div`
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 576px) {
      padding: 0;
    }
    .logos {
      display: flex;
      align-items: end;
      justify-content: start;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        @media (min-width: 1200px) {
          flex-direction: row;
        }
      }
      .logo {
        width: 130px;
        @media (min-width: 576px) {
          width: 200px;
        }
        @media (min-width: 1200px) {
          width: 270px;
        }
        @media (min-width: 1440px) {
          width: 305px;
        }
      }
      .mainLogo {
        width: 63px;
        height: 22px;
        @media (min-width: 576px) {
          width: 80px;
          height: 29px;
        }
        @media (min-width: 1200px) {
          width: 105px;
        }
      }
    }
  }
  .hamburgerWrapper {
    width: 36px;
    height: 29px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--white);
    border-radius: 82px;
    cursor: pointer;
    @media screen and (min-width: 992px) {
      display: none;
    }
  }
`;
export const NavigationWrap = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  @media (min-width: 1440px) {
    gap: 30px;
  }
  li {
    font-size: 14px;
    .item {
      transition: all ease-in 0.3s;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;
      font-size: 20px;
      @media (max-width: 991px) {
        display: inline-flex;
        align-items: start;
      }
      @media (min-width: 992px) {
        color: black;
        font-size: 14px;
        display: block;
      }
      .icons {
        font-size: 26px;
        text-align: center;
        margin-bottom: 10px;
      }
    }
    a {
      display: flex;
      align-items: center;
    }

    .active {
      .item {
        color: var(--primary-text-color);
      }
      .icons {
        padding: 5px;
        width: 40px;
        height: 40px;
        background-color: var(--white);
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
        font-size: 18px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        margin: 0 auto 10px;
      }
    }
  }
  @media screen and (max-width: 991px) {
    display: block;
    position: absolute;
    transition: 0.3s all ease-in-out;
    margin-top: 26px;
    top: 91px;
    max-height: 0px;
    right: 0;
    padding: 5px;
    border-radius: 0px;
    background: rgba(20, 20, 22, 1);
    opacity: 0;
    overflow: hidden;
    ${({ $navActive }) =>
      $navActive &&
      css`
        top: 52px;
        max-height: 1000px;
        visibility: visible;
        opacity: 1;
        padding: 50px 100px;
        position: fixed;
        width: 350px;
      `}
  }
`;
export const ToggleButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: green;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 992px) {
    display: block;
  }
`;
