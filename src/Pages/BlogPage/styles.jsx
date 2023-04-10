import styled from "styled-components";

export const BlogPage = styled.section`
  width:80vw;
  margin:auto;
  padding-top:5vh;
   .blogPageHead h1{
  font-size:4rem;
  color:${({theme})=>theme.colors.normalTxt};
  font-family: 'Roboto', sans-serif;
  }
   .blogPageHead h1 span{
  color:${({ theme }) => theme.colors.secondaryTheme};
  font-size:3rem;
  }
   .blogPageImgSection .publishedDateText{
  font-size:1rem;
  color:#4b4e4f;
  font-family: 'Roboto Condensed', sans-serif;
  }

   .blogPageImgSection img{
  width:100%;
  margin:10px auto;
  border-radius:50px;
  max-height:50vh;
  }
   .blogPageBlogBody p{
  font-family: 'Roboto Condensed', sans-serif;
  white-space:pre-line;
   color:${({theme})=>theme.colors.normalTxt};
  font-size:1.8rem;
  text-align:justify;
  }
  @media (max-width: ${({ theme }) => theme.resposiveBreakPoints.mobile}) {
   .blogPageHead h1{
  font-size:2rem;
  }
   .blogPageHead h1 span{
  font-size:1.5rem;
  }
 }`;
 
 export const Comments=styled.section`
 width:80vw;
 margin:10px auto;
 display:flex;
 color:${({theme})=>theme.colors.normalTxt};
 flex-direction:column;
 .commentLists ul{
display:flex;
flex-wrap:wrap;
gap:8px;
 }
 .commentLists ul li{
list-style:none;
width:30%;
 }
.addNote{
  width:100%;
  display:flex;
  justify-content:center;
  gap:5px;
}
.commentList{
  padding: 5px;
  border-radius: 5px;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  box-shadow: 3px 3px 5px ${({theme})=>theme.colors.blackShade};
}
.firstCommentHalf{
  display: flex;
justify-content: flex-end;
width: 100%;
}
.deleteCommentBTN{
  background-color: transparent;
  font-size: 1.2rem;
  color: ${({theme})=>theme.colors.normalTxt};
  border: none;
  outline: none;
}
.commentList h3{
  font-size:1.5rem;     
}
.commentList p{
  font-size:1.3rem;
}
.PrimaryInput{
  width:100%;
}
.sendBTN{
  background:transparent;
  color:${({theme})=>theme.colors.normalTxt};
  font-size:2rem;
  border:none;
}
.date{
font-size:.8rem !important;
color:gray;
}
@media (max-width: ${({ theme }) => theme.resposiveBreakPoints.mobile}) {
  .commentLists ul{
    flex-direction: column;
    justify-content:flex-start;
  }
  .commentLists ul li{
    width: 100%;
  }
  .commentLists ul li .commentList{
    justify-content: flex-start;
    align-items: start;
}
}
 `
