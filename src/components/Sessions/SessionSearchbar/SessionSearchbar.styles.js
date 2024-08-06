import styled from "styled-components";
export const SearchbarHolder=styled.div`
display: flex;
justify-content: center;
gap: 20px;
align-items: baseline;
button{
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    width: 150px;
    @media (min-width: 1440px){
        font-size: 20px;
        width: 202px;
    }
}
.searchbar{
    width: 100%;
}
`;