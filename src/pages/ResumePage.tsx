import React from 'react';
import { ResumePageContainer } from './styles/ResumePage.styles';
import { MdOutlineDownloading } from 'react-icons/md';
import Logo from '../assets/images/logo.svg';
const ResumePage = () => {
  return (
    <ResumePageContainer>
      <section className="resume_header_container">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div className="download_wraper">
          <a
            href="../assets/doc/01_Mike_kanu_(Front_end_software_engineer).docx"
            download
          >
            <p>Download Resume</p>
            <MdOutlineDownloading />
          </a>
        </div>
      </section>
    </ResumePageContainer>
  );
};

export default ResumePage;
