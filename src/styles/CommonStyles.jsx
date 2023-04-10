import styled from "styled-components";

export const AlertSection = styled.section`
  color: ${({theme})=>theme.colors.normalTxt};
  height: 45px;
  position: absolute;
  div {
    width: 100vw;
    background-color: ${({ color }) => color};
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    position: relative;
  }
`;

export const FormSection = styled.section`
  width: 50vw;
  margin: 10vh auto;
  padding: 40px;
  gap: 10px;
  background: ${({ theme }) => theme.colors.themeColor};
  box-shadow: 2px 10px 10px ${({ theme }) => theme.colors.blackShade},
    -2px -10px 10px ${({ theme }) => theme.colors.blackShade};
  border-radius: 10px;

  @media (max-width: ${({ theme }) => theme.resposiveBreakPoints.mobile}) {
    padding: 20px;
    width: 85vw;
  }
  form {
    gap: 8px !important;
    margin: 20px auto 5px !important;
    display: flex;
    flex-direction: column;
  }
  form  label {
    color: ${({theme})=>theme.colors.normalTxt};
  }
  form .PrimaryButton {
    padding: 10px !important;
  }
  form input {
    line-height: 2rem !important;
  }
`;

export const ScrollToTop=styled.button`
  display: flex;
  justify-content:center;
  align-items: center;
  border:none;
  border-radius: 6px;
  padding: 7px;
  background-color:${({theme})=>theme.colors.secondaryTheme};
  color:${({theme})=>theme.colors.normalTxt};
  height: 35px;
  width:35px;
  font-size: larger;
  z-index: 99;
  font-weight: bolder;
  position: fixed;
  bottom:10px;
  right: 10px;
`