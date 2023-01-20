import React from 'react';
import Carousel from 'nuka-carousel';
import {
  Certificate,
  ResumeEducation,
  ResumeExperience,
} from './services/ResumePage.service';
import { ResumePageContainer } from './styles/ResumePage.styles';
import { MdOutlineDownloading } from 'react-icons/md';
import { AiOutlineDownload } from 'react-icons/ai';
import Logo from '../assets/images/logo.svg';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import HelmetHead from '../components/HelmetHead';

const ResumePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <HelmetHead
        title="Resume - Summary"
        description="Resume page for Kanu mike Chibundu known as Royal coder"
        keywords="Frontend Engineer, Reactjs Developer, Typescript expert, Microverse fullstack, Kanu mike resume, Auchi polytechnic resume"
      />
      <ResumePageContainer>
        <section className="resume_header_container">
          <div className="resume_header_wrapper">
            <div className="logo_image" onClick={() => navigate('/')}>
              <img src={Logo} alt="logo" />
              <h3>RoyalStack</h3>
            </div>
            <div className="download_wraper desktop">
              <a
                href={require('../assets/doc/01_Mike_kanu_(Front_end_software_engineer).docx')}
                download={'01_Kanu_Mike_Resume.docx'}
              >
                <p>Download Resume</p>
                <MdOutlineDownloading />
              </a>
            </div>
            {/* Mobile download icon */}
            <a
              href={require('../assets/doc/01_Mike_kanu_(Front_end_software_engineer).docx')}
              download={'01_Kanu_Mike_Resume.docx'}
              className="download_mobile"
            >
              <AiOutlineDownload />
            </a>
          </div>
        </section>

        <section className="resume_main">
          <section className="resume_content_wrapper">
            <div className="resume_content_header">
              <h1 className="profile_name">Kanu Mike Chibundu</h1>
              <h2 className="profession_name">Frontend Web Developer</h2>
            </div>
          </section>
          <section className="resume_details_container">
            {/* Main Content with bullet */}

            {/* Education */}
            <div className="resume_details_content_container">
              <h3 className="resume_details_head">EDUCATION</h3>
              <div>
                {ResumeEducation.map(({ eduName, course, year, id, grade }) => (
                  <div className="resume_details_wrapper" key={id}>
                    <div className="resume_rule">
                      <div className="circle"></div>
                      <div className="rectangle"></div>
                    </div>
                    <div className="resume_details_wrapper_content">
                      <div>
                        <h4 className="resume_details_head_inner">{eduName}</h4>
                        <p className="date">{year}</p>
                      </div>
                      <div>
                        <p className="course">{course}</p>
                        <p>{grade}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="resume_details_content_container">
              <h3 className="resume_details_head">EXPERIENCE</h3>
              <div>
                {ResumeExperience.map(({ companyName, position, year, id }) => (
                  <div className="resume_details_wrapper" key={id}>
                    <div className="resume_rule">
                      <div className="circle"></div>
                      <div className="rectangle"></div>
                    </div>
                    <div className="resume_details_wrapper_content">
                      <div>
                        <h4 className="resume_details_head_inner">
                          {companyName}
                        </h4>
                        <p className="date">{year}</p>
                      </div>
                      <div>
                        <p className="course">{position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="download_btn_mobile">
            <div className="download_wraper">
              <a
                href={require('../assets/doc/01_Mike_kanu_(Front_end_software_engineer).docx')}
                download={'01_Kanu_Mike_Resume.docx'}
              >
                <div className="btn_content">
                  <p>Download Resume</p> <MdOutlineDownloading />
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="certificate_container">
          <div className="certificate_wrapper">
            <h3>CERTIFICATES</h3>

            <Carousel>
              {Certificate.map(({ id, image }) => (
                <div className="carousel_cert" key={id}>
                  <img src={image} alt="Microverse Fullstack" />
                </div>
              ))}
            </Carousel>
          </div>
        </section>
      </ResumePageContainer>
      <Footer />
    </>
  );
};

export default ResumePage;
