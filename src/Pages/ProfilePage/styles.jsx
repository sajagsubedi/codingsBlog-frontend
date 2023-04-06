import styled from "styled-components"

export const ProfileSection=styled.section`
width:80vw;
margin:auto;
backgound:${({theme})=>theme.colors.themecolor};
.infoDiv{
    border:none;
    border-radius:10px;
    display:flex;
    margin:10vh auto;
    width:50vw;
    flex-direction:column;
    box-shadow: 0 25px 10px ${({ theme }) => theme.colors.blackShade};
    background:${({theme})=>theme.colors.focus};
    color:white;
    padding:10px;
}
.infoDiv h1{
    color:${({theme})=>theme.colors.secondaryTheme};
}
.infofield label{
    color:${({theme})=>theme.colors.sptxt};
    font-size:1.7rem;
}
.infofield{
    display:flex;
    flex-direction:column;
}
`