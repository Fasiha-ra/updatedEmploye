import styled from "styled-components";
export const CoachingWrapper = styled.div`
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  padding: 20px 10px;
  margin-bottom: 20px;
  .coachingHolder {
    padding: 20px 10px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    @media (min-width: 400px){
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 576px){
      grid-template-columns: repeat(3, 1fr);
    }
  }
  .coachingCard {
    width: 100%;
    max-width: 264px;
    margin: 0 auto;
    img {
      width: 264px;
      border-radius: 10px;
      padding-bottom: 10px;
    }
  }
`;
