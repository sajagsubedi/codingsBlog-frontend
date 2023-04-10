import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Baloo+Bhaina+2&family=Baloo+Thambi+2&family=Open+Sans:ital@1&family=Poppins:ital,wght@1,300;1,400&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Ubuntu", sans-serif;
}
html{
  scroll-behavior: smooth;
}
body{
  max-width: 100vw;
  overflow-x: hidden;
}
body::-webkit-scrollbar{
display: none;
}

header {
    width: 100vw;
    height:60px;
    font-family: "Baloo Bhaina 2", cursive;
    position: sticky;
    top:0;
    z-index:4;
}
  .navigation {
    width: 100%;
    position:fixed;
    height:60px;
    display: flex;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.themecolor};
    box-shadow: 0 25px 10px ${({ theme }) => theme.colors.blackShade};
    padding:auto auto 10px 10px;
    transition: height 0.5s, width 0.5s;
    transition-delay: 0s, 0.75s;
  }
.navigation.active {
    width: 100%;
    height:300px;
}
.phoneVisible {
    width: 20%;
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: space-between;
}
.navigation .appnameBx .appname {
    ${({ theme }) => theme.colors.normalTxt}-space: nowrap;
    color: ${({ theme }) => theme.colors.normalTxt};
    text-decoration:none;
    font-size: 1.4em;
    font-weight: bold;
}
nav {
    display: flex;
    width: 100%;
    top:0;
    left:0%;
    justify-content: space-between;
    align-items: right;
    position: sticky;
}
.nav-links {
    width: 80%; 
}
.menu {
    justify-content: space-between;
    align-items: center;
    display: flex;
    height: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.4);
}
.firstMenuHalf{
  display:flex;
  justify-content:flex-start;
}
.menu li {
    list-style: none;
    align-items: center;
    justify-content: center;
    margin: 20px;
}
.menu li a {
    text-decoration: none;
    font-size: 1em;
    padding: 5px;
    color: gray;
    display:flex;
    justify-content:center;
    align-items:center;
}
.activeTxt {
    color: ${({ theme }) => theme.colors.normalTxt}!important;
}
.menu li a:hover {
    color: ${({ theme }) => theme.colors.secondaryTheme};
}
  .Header .Navbar .menu .categoryDropDown {
    background:${({ theme }) => theme.colors.focus};
    border-radius:5px;
    position: absolute;
    display:none;
    min-width: 120px;
    padding:5px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    font-family:Roboto;
  }
  .Header .Navbar .menu .categoryDropDown ul{
    display:flex;
    flex-direction:column;
  }
  .Navbar .menu .categoryDropDown ul li{
    margin:2px;
  }
  .Header .Navbar .menu .dropdownActive{
    display:flex;
  }
.navigation .menuToggle {
    width: 50px;
    height: 50px;
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.navigation .menuToggle::before {
    content: "";
    position: absolute;
    width: 32px;
    height: 2px;
    background: ${({ theme }) => theme.colors.normalTxt};
    transform: translateY(-10px);
    box-shadow: 0 10px ${({ theme }) => theme.colors.normalTxt};
    transition: 0.5s;
}
.navigation.active .menuToggle::before {
    content: "";
    transform: translateY(0px) rotate(45deg);
    box-shadow: 0 0 ${({ theme }) => theme.colors.secondaryTheme};
    background: ${({ theme }) => theme.colors.secondaryTheme};
}
.navigation .menuToggle::after {
    content: "";
    position: absolute;
    width: 32px;
    height: 2px;
    background: ${({ theme }) => theme.colors.normalTxt};
    transform: translateY(10px);
    transition: 0.5s;
}
.navigation.active .menuToggle::after {
    transform: translateY(0px) rotate(-45deg);
    box-shadow: 0 0 ${({ theme }) => theme.colors.secondaryTheme};
    background:${({ theme }) => theme.colors.secondaryTheme};
}
.mainText{
    font-size:2rem;
    display:flex;
    margin:10px 0px 20px;
    justify-content:center;
    text-align: center;
    color:${({ theme }) => theme.colors.normalTxt};
}
.sm{
    font-size:1.5rem;
    margin:5px;
}
.secondHalf{
    display:flex;
    align-items:center;
    justify-content:center;
}
.SearchButton {
    padding: 7px !important;
    color: ${({ theme }) => theme.colors.normalTxt} !important;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    background-color: transparent;
    font-size:2rem;
    display:flex;
    align-items:center;
    justify-content:center;
}
.SearchInput{
    padding: 7px !important;
    border-radius: 5px;
    border:1px solid ${({ theme }) => theme.colors.normalTxt};
    color:${({ theme }) => theme.colors.normalTxt};
    background:transparent;
}
.SearchInput::placeholder{
    color:${({ theme }) => theme.colors.normalTxt};
}
.spinner{
    display:flex;
    justify-content:center;
    align-items:center;
}
.spinner img{
    height:70px;
}
.PrimaryButton{
    padding: 7px !important;
background: ${({ theme }) => theme.colors.secondaryTheme};
color: ${({ theme }) => theme.colors.normalTxt} !important;
border: none;
border-radius: 5px;
font-weight: bold;
}
.PrimaryButton:disabled{
  opacity:.7;
}
.PrimaryInput{
    background: #1F2937; 
    line-height: 2rem;
    color: ${({ theme }) => theme.colors.normalTxt} !important;
    border: 1px solid #374151;
    padding:3px;
    font-size: 1rem;
    border-radius: 5px;
    outline: none;
    margin: 5px;
}
.PrimaryInput:focus{
  background: ${({ theme }) => theme.colors.themecolor}; 
  border-color: ${({ theme }) => theme.colors.secondaryTheme};
  box-shadow: 3px 3px 3px ${({ theme }) => theme.colors.bordershade},
      -3px -3px 3px ${({ theme }) => theme.colors.bordershade};
  }
.globalForm {
    display: flex;
    gap: 5px;
    justify-content: center;
    flex-direction: column;
  }
  .inputDiv{
  display:flex;
  flex-direction:column;
  }
  
  .formBelowBox{
    text-align:right;
    color:${({ theme }) => theme.colors.normalTxt};
  }
  .formBelowBox a{
  color:${({ theme }) => theme.colors.sptxt};
  }
  .footer{
    background:${({ theme }) => theme.colors.themecolor};
    padding:20px;
    color:${({ theme }) => theme.colors.normalTxt};
    margin: 0px;
    font-family:'Lato',"sans-serif";
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:2rem;
    }
    
    .manipulateBlogSection{
    color: #fff;
    position:fixed;
    width: 50vw;
    left: 50%;
    top:5px;
    z-index:3;
    padding: 5px 50px 30px;
    transform: translate(-50%, 0);
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.focus};
    box-shadow: 2px 10px 10px ${({ theme }) => theme.colors.blackShade};
    }
  .Close {
    display: flex;
    justify-content: flex-end;
  }
  .CloseBtn {
    border: none;
    font-weight: bold;
    font-size: 2rem;
    background:transparent;
    color: ${({ theme }) => theme.colors.secondaryTheme};
  }
  .addBlogIcon{
  display:flex;
  justify-content:flex-end;
  }
  .globalSection{
    background:${({ theme }) => theme.colors.themecolor};
  }
@media (max-width: ${({ theme }) => theme.resposiveBreakPoints.mobile}) {
    .navigation {
      flex-direction: column;
      justify-content: start;
      overflow:hidden;
  }
    .phoneVisible {
      width: 100%;
  }
  .nav-links {
      width: 80%;
      opacity:0;
      transition: opacity 0.1s linear .1s;
  }
  
  .navigation.active .nav-links{
      transition: opacity 0.1s linear .1s;
      opacity:1;
  }
    .menu .firstMenuHalf,
    .menu {
    padding:5px;
      align-items:flex-start;
      flex-direction: column;
  }
  .menu li {
      margin: 8px;
  }
  .menu li a {
      padding: 0px;
  }
  .navigation .menuToggle {
      display: block;
      margin: 40px 0 0 0;
  }
  .manipulateBlogSection{
  padding: 5px;
    width: 90vw;
  }
  .footer{
    font-size: 1.3rem;
  }
}`;
