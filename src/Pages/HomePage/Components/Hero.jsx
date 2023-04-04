import {
  HeroSection,
  HeroTitle,
  TitleUnderline,
  HeroParaBox,
  HeroPara,
} from "../styles.jsx";

export default function Hero() {
  return (
    <HeroSection>
      <HeroTitle> CodingsBlog </HeroTitle>
      <TitleUnderline />
      <HeroParaBox>
        <HeroPara>
          "Tech blogs for Web/ Add developers and AI, programming , cryptography
          and Cyber Security enthusiastic ."
        </HeroPara>
      </HeroParaBox>
    </HeroSection>
  );
}
