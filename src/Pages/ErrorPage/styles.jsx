import styled from "styled-components";

export const ErrorSection = styled.section`
  padding: 10px;
  min-height: 85vh;
  .ErrorTextBox {
    padding: 15vh 10vw;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  .ErrorTextBox h1 {
    color: ${({theme})=>theme.colors.normalTxt};
    font-size: 5rem;
    font-family: "Lato", sans-serif;
  }
  .ErrorTextBox h1 span {
    color: red;
  }
  .ErrorTextBox p {
    font-family: "Lato", sans-serif;
    font-size: 2rem;
    color: ${({theme})=>theme.colors.normalTxt};
  }
  .ErrorTextBox p a {
    color: ${({theme})=>theme.colors.sptxt};
    text-decoration: none;
  }
  @media (max-width:${({ theme }) => theme.resposiveBreakPoints.mobile}){
     .ErrorTextBox h1 {
      font-size:3rem;
  }
}
`;
