import styled from "styled-components";
export const SidebarWrapper = styled.div`
  height: calc(100vh - 134px);
  overflow:hidden;
  position: relative;
  &:hover{
    overflow-y: auto;
  }
  ::-webkit-scrollbar {
    width: 0;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 15px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 10px;
  }
  &:hover {
    ::-webkit-scrollbar {
      width: 3px;
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(245, 126, 42, 0.15);
    }
  }
  .profile,
  .course,
  .footer {
    padding-bottom: 20px;
  }
`;
