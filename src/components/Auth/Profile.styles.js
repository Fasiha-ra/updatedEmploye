import styled from "styled-components";
export const ProfileWrap = styled.div`
  background-color: var(--BG-bolor);
  color: var(--white);
  padding: 80px 0;
  min-height:100vh;
  .container {
    max-width: 1574px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .profile {
      position: relative;
      padding-bottom: 20px;
      overflow: hidden; /* Ensure the overlay does not extend beyond the profile boundaries */

      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      .profile:hover .overlay {
        opacity: 1;
      }

      .overlay-icon {
        color: white;
        font-size: 2rem;
      }
      img {
        width: 165px;
        height: 165px;
        border-radius: 50%;
        margin: 0 auto 15px;
      }
    }
    form {
      width: 100%;
      max-width: 1574px;
      .selectHolder {
        display: flex;
        flex-direction: column;
        label {
          width: 100%;
          padding: 0;
          font-size: 16px;
          font-weight: 500;
          line-height: 120%;
          color: var(--matte-black);
          z-index: 5;
          display: flex;
          margin-bottom: 10px;
        }

        .custom-select-container {
          position: relative;
          width: 100%;
        }

        select {
          appearance: none; /* Hide the default arrow */
          padding: 12px 25px;
          background-color: transparent;
          border-radius: 10px;
          border: 1px solid;
          outline: none;
          box-shadow: rgba(0, 0, 0, 0.09) 0 0 2px 1px;
          color: var(--body-text-25);
          position: relative;
          box-sizing: border-box;
          width: 100%;
          margin-bottom: 15px;
          cursor: pointer; /* Ensure cursor changes on hover */
        }

        .custom-select-icon {
          position: absolute;
          top: 44%;
          font-size: 30px;
          right: 10px; /* Adjust position as needed */
          transform: translateY(-50%);
          pointer-events: none; /* Prevent icon from intercepting clicks */
        }

        option {
          background-color: transparent;
        }
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 30px;
        padding-bottom: 30px;
        @media (min-width: 576px) {
          grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 992px) {
          grid-template-columns: repeat(3, 1fr);
        }
      }
      .btn {
        button {
          display: block;
          margin: 0 auto;
        }
      }
    }
  }
`;
