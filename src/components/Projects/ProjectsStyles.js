import styled from 'styled-components';

export const BlogCard = styled.div`
  border-radius: 30px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  
`;
export const Img = styled.img`
border-radius: 30px;
  width:100%;
  height:100%;
  object-fit: contain;
  overflow: hidden;
  
`
export const VideoContainer = styled.div`
border-radius: 30px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

export const StyledVideo = styled.video.attrs({
  autoPlay: true
})`
  width: 100%;
  height: auto;
  border-radius: 30px;
`;


export const GridContainer = styled.section`

display: flex;

align-items: stretch;
grid-template-columns: repeat(3, 1fr);
  gap: 27px;
grid-template-rows: repeat(auto-fill, minmax(300px, 1fr));
padding: 4rem;
place-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }

`

export const TitleContent = styled.div`
  text-align: center;
  padding: 1rem;
  width: 100%;
`;


export const HeaderThree = styled.h3`
  font-weight: 400;
  letter-spacing: 1px;
  color: #9cc9e3;
  padding: .1rem 1;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 100px;
  height: 3px;
  margin: 10px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 20px;
  color: #e4e6e7;
  font-style: 5rem;
  line-height: 20px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.2rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;

}
`;

export const TagList = styled.ul`
display: center;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.6rem;
`