import styled from "styled-components";
export const GroupSessionWrap = styled.div`
  .groupHolder {
    margin-bottom: 20px;
    background-color: var(--white);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
    padding: 10px;
    border-radius: 13px;
    &:nth-child(odd){
      border-left: 4px solid var(--primary-blue) ;
    }
    &:nth-child(even){
      border-left: 4px solid #F0AC28;
    }
    h5 {
      span {
        color: var(--primary-blue);
        text-decoration: underline;
      }
    }
  }
  .timeWrap {
    display: flex;
    justify-content: space-between;
    .time,
    .date {
      display: flex;
      gap: 10px;
    }
  }
`;
