import styled from "styled-components";
export const SkillsWrap =styled.div`
  
  .flex{
    display: flex;
    gap: 20px;
    padding-bottom: 30px;
    align-items: center;
    @media (min-width: 992px){
        gap: 40px;
    }
    .skill{
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }
    span{
        width: 202px;
        background-color: var(--white);
        border-radius: 40px ;
        border: 1px solid var(--blue);
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
        padding: 10px;
        
        
    }
  }
`;