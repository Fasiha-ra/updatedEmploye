import styled from "styled-components";
export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  span {
    display: flex;
    gap: 20px;
    border-right: 2px solid white;
    padding-right: 10px;
    padding-bottom: 5px;
    img{
        width: 32px;
        height: 40px;
        padding-bottom: 10px;
    }
    &:nth-last-child(1){
        border: none;
    }
  }
`;
