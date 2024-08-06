import styled from "styled-components";
export const FooterWrap= styled.div`
background-color: var(--white);
border-radius: 25px;
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
padding: 20px 10px;
ul{
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 20px;
    li{
        font-size: 13px;
        font-weight: 500;
        display: flex;
        gap: 15px;
        a{
            color: var(--light-gray);
        }
    }
}
.footerLogo{
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: center;
    img{
        width: 64px;
    }
    strong{
        font-size: 13px;
        font-weight: 500;
        
    }
}
`;
