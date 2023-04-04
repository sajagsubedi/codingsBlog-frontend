import styled from "styled-components";

export const FormSection = styled.section`
  width: 50vw;
  margin: 10vh auto;
  padding: 40px;
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
  form .inputDiv label {
    color: white;
  }
  form .PrimaryButton {
    padding: 10px !important;
  }
  form input {
    line-height: 2rem !important;
  }
`;
