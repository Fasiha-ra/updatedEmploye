import styled from "styled-components";
export const ProfileWrapper =styled.div`
.wrapper{
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  padding: 20px 20px;
  margin-bottom: 20px;
}
width: 100%;
  display: block;
  @media (min-width: 1200px) {
    display: flex;
    gap: 10px;
    flex: 1;
  }
  h2{
    font-weight: 600;
  }
`;