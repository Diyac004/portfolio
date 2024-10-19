import styled from 'styled-components';

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  padding: 2rem;
  place-items: start;
  width: 100%;
  max-width: auto;
  margin: 0 auto;
  grid-auto-rows: auto;
  @media ${(props) => props.theme.breakpoints.md} {
    gap: 0.75rem 1rem;
    padding: 2rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 0.5rem 0.75rem;
    padding: 1rem;
  }
`;

export const BlogCard = styled.div`
  border-radius: 20px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: auto;
  height: 100%;
  display: flex;
  margin-bottom: 0.5rem;
  flex-direction: column;
  background: rgba(17, 25, 40, 0.25);
  backdrop-filter: blur(4px);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Img = styled.img`
  border-radius: 20px;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const VideoContainer = styled.div`
  border-radius: 20px;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

export const StyledVideo = styled.video.attrs({
  autoPlay: true,
  muted: true,
  loop: true
})`
border-radius: 20px;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const TitleContent = styled.div`
  text-align: center;
  padding: 1rem;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 1px;
  color: #9cc9e3;
  padding: 0.5rem;
  font-size: ${(props) => props.title ? '2.4rem' : '2rem'};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => props.title ? '2rem' : '1.8rem'};
  }
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 10px auto;
  border: 0;
  background: #d0bb57;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 2rem;
  color: #e4e6e7;
  font-size: 1.6rem;
  line-height: 1.5;
  text-align: left;
  flex-grow: 1;
  margin: 1rem 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem;
    font-size: 1.4rem;
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 2rem;
  margin: 0;
  list-style: none;
`;

export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.4rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 15px;
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 2rem 0;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.4rem;
  padding: 0.8rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.3s;

  &:hover {
    background: #801414;
    transform: translateY(-2px);
  }
`;
