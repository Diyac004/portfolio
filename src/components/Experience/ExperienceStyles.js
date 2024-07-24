import styled from 'styled-components';

export const ExperienceContainer = styled.div`
  #Experience {  
        ol {
          margin-left: 5rem;
          position: relative;
          border-left: 0.5px solid #e5e7eb;
}
          li {
            margin-bottom: 2.5rem;
            margin-right: 3rem;
            position: relative;
             font-size: 1.5rem;
           
            }
            span {
              position: absolute;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 3rem;
              height: 3rem;
              background-color: #bfdbfe;
              border-radius: 9999px;
              left: -1.5rem;
              ring: 2rem;
}
              svg {
             
                width: 1.625rem;
                height: 1.625rem;
                color: #1e40af;
                  }
            
            h3 { 
            margin-left: 3.25rem;
              display: flex;
              align-items: center;
              margin-bottom: 0.25rem;
              font-size: 2.5rem;
              font-weight: 600;
              color: white;
              
            }
            time {
            margin-top: 0.1rem;
            margin-left: 2.25rem;
            padding: 1rem;
              display: block;
              margin-bottom: 0.2rem;
              font-size: 1.7rem;
              font-weight: 400;
              line-height: 1.5;
              color: #6b7280;
              
            }
            ul {
              margin-top: 0.25rem;
             
              margin-left: 3.57rem;
              color: #9ca3af;
              list-style-type: disc;
              list-style-position: inside;
}    

}
`;
