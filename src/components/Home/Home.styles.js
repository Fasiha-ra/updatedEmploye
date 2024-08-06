import styled from "styled-components";
export const HomeWrap = styled.div`
  display: block;
  @media (min-width: 1200px) {
    display: flex;
    flex: 1;
  }

  .discussion {
    display: block;
    @media (min-width: 1200px) {
      display: none;
    }
  }
  .comment {
    display: none;
    @media (min-width: 1200px) {
      display: block;
    }
  }
`;
