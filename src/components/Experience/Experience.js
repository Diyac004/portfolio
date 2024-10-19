import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {ExperienceContainer} from './ExperienceStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { GoDotFill } from "react-icons/go";


function Experience() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ExperienceContainer padding-top='20px'>
      <div id="Experience"> 
          <div>
            <Section>
            <SectionTitle data-aos="fade-right">Experience</SectionTitle>
            <SectionDivider/>
            </Section>
            <br/><br/>
            <ol>
            <span>
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <li>
                <h3 data-aos="fade-right">
                  Instructional Aide & Grader (ASU)
                </h3>
                <time data-aos="fade-right">
                  August 2024 - Present
                </time>
                <ul>
                  <li data-aos="fade-right"><GoDotFill color="#9ca3af"/><tab/>
                  Assist in delivering course content by supporting professors during lectures and lab sessions.
                  </li>
                  <li data-aos="fade-right"> <GoDotFill color="#9ca3af"/><tab/> Held office hours to help students with problem-solving, course material comprehension, and project completion.</li>
                  <li data-aos="fade-right"><GoDotFill color="#9ca3af"/><tab/>Collaborate with faculty to develop and implement instructional materials that enhanced student learning.</li>
                  <li data-aos="fade-right"><GoDotFill color="#9ca3af"/><tab/>Facilitate group discussions and provided one-on-one support to ensure students' understanding of complex mathematical concepts.</li>
                  
                </ul>
              </li>
             
              
            <span>
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                 <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <li> 
                <h3 data-aos="fade-right">
                  Headstarter AI (Software Engineering Fellow)
                </h3>
                <time data-aos="fade-right">
                  July 2024 - Present
                </time>
                <ul>
                  <li data-aos="fade-right">
                  <GoDotFill color="#9ca3af"/><tab/> Built 5+ Al apps and APls using NextJS, OpenAl, Pinecone, StripeAPI with 98% accuracy as seen by 1000 users.
                  </li>
                  <li data-aos="fade-right">
                  <GoDotFill color="#9ca3af"/><tab/> Developed projects from design to deployment leading 4+ engineering fellows using MVC design patterns.
                  </li>
                  <li data-aos="fade-right">
                  <GoDotFill color="#9ca3af"/><tab/> Coached by Amazon, Bloomberg and Capital One engineers on Agile, Cl/CD, Git and microservice patterns.
                  </li>
                </ul>
              </li>
              <br/>
              <br/>
              
                <span>
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <li>
                <h3 data-aos="fade-right">
                  E2 Registration and Recruitment Assistant (ASU)
                </h3>
                <time data-aos="fade-right">
                  March 2024 - August 2024
                </time>
                <ul>
                  <li data-aos="fade-right">
                  <GoDotFill color="#9ca3af"/><tab/> Support the program registration process for E2 by guiding participants through registration forms, ensuring accuracy, and troubleshooting any issues.

                  </li>
                  <li data-aos="fade-right">
                  <GoDotFill color="#9ca3af"/><tab/> Design social media posts and templates for E2 branding and events using Canva.
                  </li>
                  <li data-aos="fade-right">
                  <GoDotFill color="#9ca3af"/><tab/> Maintain organized and accurate records of program registrations, participant contact information, and other relevant data.
                  </li>
                  <li data-aos="fade-right">
                  <GoDotFill color="#9ca3af"/><tab/> Generate regular reports on program registration metrics and participant engagement to assess the success of registration and recruitment efforts.
                  </li>
                </ul>
              </li>
             
              
            </ol>
          </div>
          <br/>
              <br/>
      </div>
    </ExperienceContainer>
  );
}

export default Experience;