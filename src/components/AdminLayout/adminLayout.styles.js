import styled from "styled-components";

export const MainLayoutSection = styled.div`
  position: relative;
  background-color: var(--body-color);

  .mainHeader {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .mainSidebarContent {
    padding-top: 100px;
    display: flex;
    justify-content: center;

    .mainSidebar {
      max-width: 300px;
      width: 100%;
      padding: 0 10px;
      z-index: 9;
      position: sticky;
      top: 88px;
      height: calc(100vh - 89px);
      padding-top: 30px;

      @media (min-width: 1440px) {
        max-width: 430px;
      }
    }
    .mainContent {
      width: 100%;
      padding: 10px 10px 0 10px;
      flex-grow: 0;
      @media (min-width: 576px) {
        padding: 30px 10px 0 10px;
      }
      @media (min-width: 1440px) {
        flex-grow: 1;
      }
    }
  }

  @media (max-width: 992px) {
    .mainSidebarContent {
      .mainSidebar {
        display: ${({ $sidebarVisible }) =>
          $sidebarVisible ? "block" : "none"};
        position: fixed;
        left: 0;
        top: 94px;
        background: white;
        box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        overflow-y: auto;
        height: calc(100vh - 94px);
      }
    }
  }

  @media (min-width: 992px) {
    .mainSidebarContent {
      .mainSidebar {
        display: block;
        position: sticky;
        top: 88px;
      }
    }
  }
  .rightSideBar {
    width: 100%;

    @media (min-width: 1200px) {
      max-width: 280px;
    }

    @media (min-width: 1360px) {
      max-width: 360px;
    }

    @media (min-width: 1440px) {
      max-width: 430px;
    }
  }
`;
