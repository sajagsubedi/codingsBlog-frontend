import styled from "styled-components";

export const HeroSection = styled.section`
  padding: 70px 50px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  background: url(../../banner.jpg) no-repeat center center/cover;

  @media (max-width: ${({ theme }) => theme.resposiveBreakPoints.mobile}) {
    height: 90vh;
    padding: 5vh;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 1000;
  letter-spacing: 2px;
  font-family: "Anybody", cursive;
  background: linear-gradient(to right, #ff9966, #ff5e62, #ff9966, #ff5e62);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  @media (max-width: ${({ theme }) => theme.resposiveBreakPoints.mobile}) {
    font-size: 2rem;
  }
`;

export const TitleUnderline = styled.hr`
  background: ${({ theme }) => {
    return `linear-gradient(to right, ${theme.colors.sptxt},${theme.colors.secondaryTheme})`;
  }};
  height: 7px;
  border: none;
  border-radius: 10px;
  width: 20vw;
  @media (max-width: ${({ theme }) => theme.resposiveBreakPoints.mobile}) {
    width: 50vw;
  }
`;

export const HeroParaBox = styled.div`
  padding: 10px;
  margin: 10px;
  width: 60%;
  text-wrap: wrap;
  @media (max-width: ${({ theme }) => theme.resposiveBreakPoints.mobile}) {
    width: auto;
  }
`;

export const HeroPara = styled.p`
  color: #00f260;
  font-size: 2rem;
  font-family: "Lato", sans-serif;
  text-align: justify;
  @media (max-width: ${({ theme }) => theme.resposiveBreakPoints.mobile}) {
    font-size: 1.3rem;
  }
`;

export const Blogs = styled.section`
  position: relative;
  top: -40vh;
  z-index: 2;
  width: 75vw;
  display: flex;
  background: #111827;
  flex-direction: column;
  margin: auto;
  padding: 20px;
  color: white;
  border-radius: 20px;
  @media (max-width: ${({ theme }) => theme.resposiveBreakPoints.mobile}) {
    min-height: 50vh;
    width: 90vw;
  }
`;

export const BlogItem = styled.div`
  background: ${({ theme }) => theme.colors.focus};
  border: none;
  display: flex;
  gap: 10px;
  padding: 10px;
  overflow: hidden;
  margin: 10px 10px 25px;
  border-radius: 25px;
  &:nth-child(even) {
    flex-direction: row-reverse;
  }
  .BlogBody {
    text-wrap: wrap;
  }
  .date {
    color: gray;
  }
  .BlogTitle {
    font-size: 1.7rem;
    font-weight: bold;
    font-family: "Anybody", cursive;
  }
  .imgSection {
    display: flex;
    flex-direction: column;
  }
  .imgSection img {
    height: 15vw;
    border-radius: 20px;
  }
  .blogSubTitle {
    color: ${({ theme }) => theme.colors.secondaryTheme};
    font-size: 1.5rem;
    font-family: "Lato", sans-serif;
  }
  .BlogDescription {
    font-size: 1.5rem;
    text-align: justify;
    font-family: "Lato", sans-serif;
  }
  .paragraphSection .linkToBlog {
    font-size: 1rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.sptxt};
    font-family: "sans-serif";
  }
  .blogManipulationIcons {
    display: flex;
    justify-content: flex-end;
    gap: 3px;
  }
  .blogManipulationIcons svg {
    font-size: 1.3rem;
  }
  .blogManipulationIcons svg:nth-child(2) {
    color: red;
  }
  @media (max-width: ${({ theme }) => theme.resposiveBreakPoints.mobile}) {
    flex-direction: column !important;
    .imgSection img {
      width: 100%;
      height: auto;
    }
    .BlogDescription {
      font-size: 1rem;
    }
    .linkToBlog {
      font-size: 1rem;
    }
  }
`;
export const ManipulateBlogSection = styled.section``;
