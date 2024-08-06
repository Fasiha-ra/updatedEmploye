import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --BG-bolor:#00122A;
    --primary-blue: #58A7E0;
    --primary-darkblue: #000d1a;
    --primary-text-color:#0094C8;
    --body-color: #F8FDFF;
    --white: #fff;
    --black: #141416;
    --blue:#0189E1;
    --light-gray: #8C8C8C;
    --light-green:#F0FFF0;
    --gray-50:#D9D9D9;
    --gray-30:#9F9F9F;
    --secondary: #141416;
    --red: #FF4D4F;
    --body-text: #141416;
    --body-text-25: #777777;
    --hint-green: #32BEA6;
    --gray--bg: #D9D9D9;
    /* Body */
    --base-text-color: var(--body-text);
    --base-background-color: var(--body-color);
    --font-size-base: 20px;
    --line-height-base: 24px;
    --base-font-family: var(--base-font-sans-serif);
    --base-min-width: 350px;

    /*  Links */
  }
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
  * {
    box-sizing: border-box;
    font-size: 100%;
    scroll-behavior: smooth;
  }
  *:before,
  *:after,
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    color: var(--base-text-color);
    font-weight: 300;
    position: relative;
    min-width: var(--base-min-width);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    top: 0px !important;
    background: var(--white);
  }
  .container{
    max-width: 1824px;
    margin: 0 auto;
    padding: 0 20px;
  }
.headingWrap{
  font-size: 18px;
  font-weight: 500;
  color: var(--primary-blue);
  padding: 0 15px;
}
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 0.3s ease-in-out;
    visibility: hidden;
    opacity: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 98;
  }

  #wrapper {
    width: 100%;
    overflow: hidden;
    position: relative;

    @media (min-width: 992px) {
    }
  }

 
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  figure{
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  textarea {
    resize: vertical;
    vertical-align: top;
  }

  button,
  input[type="button"],
  input[type="reset"],
  input[type="file"],
  input[type="submit"] {
    cursor: pointer;
    font-family: var( --base-font-sans-serif);
  }
  form,
  fieldset {
    margin: 0;
    padding: 0;
    border-style: none;
  }
  a {
    text-decoration: none;
    color: var(--black);
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }

  button {
    transition: opacity var(--animation-speed) ease-in-out,
      background var(--animation-speed) ease-in-out,
      visibility var(--animation-speed) ease-in-out,
      border var(--animation-speed) ease-in-out,
      color var(--animation-speed) ease-in-out;
  }

  button {
    padding: 0;
    border: none;
    background: none;
    outline: none;
    font-family: var(--font-size-base);
  }

  h1,
  .h1,
  h2,
  .h2,
  h3,
  .h3,
  h4,
  .h4,
  h5,
  .h5,
  h6,
  .h6 {
    margin: 0 0 15px;
    color: var(--body-text);
    font-weight: 400;
  }
  h2,
  .h2{
    font-size: 20px;
    line-height: 34px;
    @media (min-width: 768px){
      font-size: 26px;
    }
    @media (min-width: 992px){
      font-size: 30px;
    }
  }
  h3,
  .h3 {
    font-size: 20px;
    line-height: 24px;
    @media (min-width: 992px){
      font-size: 24px;
    line-height: 28px;
    }
  } 
  h4,
  .h4 {
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
  }
  h5,
  .h5 {
    font-size: 18px;
    line-height: 22px;
    font-weight: 600;
  }
  h5,
  .h5 {
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
  }

  p {
    margin: 0 0 15px;

    &:last-child {
      margin: 0;
    }
  }
 /* Track */
 
  /* Handle on hover */
  /* Remove Arrows/Spinners from input type number */

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    appearance: textfield;
  }
  .rightSideBar{
    .headingWrapper{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    h5{
        margin: 0;
        color: var(--primary-text-color);
    }
    .arrowIcon{
        color: var(--primary-text-color);
    }
  }
  }
  .rbc-toolbar {
    display: none
    }
    .rbc-events-container{
    .rbc-event{
      height: 8.16667%;
    }}
    
`;
