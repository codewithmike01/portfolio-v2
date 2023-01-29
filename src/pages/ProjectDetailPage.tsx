import React, { useEffect } from 'react';
import { ProjectPageDetailContainer } from './styles/ProjectPDetailPage.style';
import NavBar from '../components/NavBar';
import ProjectPicture from '../assets/images/test_project1.png';
import { GiConfirmed } from 'react-icons/gi';
import { GrMail } from 'react-icons/gr';
import { SiBuymeacoffee } from 'react-icons/si';
import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import BgButton from '../components/BgButton';
import Footer from '../components/Footer';
import HelmetHead from '../components/HelmetHead';
import { scrollToTop } from '../utils/scrollToTop';
const ProjectDetailPage = () => {
  // On render scroll to top
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <HelmetHead
        title="Ecommerce project"
        description="This is project page of kanu mike chibundu Royal coder"
        keywords="E-commerce Royal coder, Projects by Kanu mike Chibundu"
      />
      <NavBar />
      <ProjectPageDetailContainer>
        <div className="project_details_container">
          <img src={ProjectPicture} alt="product" />
        </div>

        <h2 className="project_name">Apply For Me</h2>

        <section className="project_details_content ">
          <div className="project_detail_skill details_section">
            <h4>Tools used: </h4>
            <div className="project_details_tag">
              {['Reactjs', 'Typescript', 'Jest', 'Material Ui'].map((val) => (
                <p>{val}</p>
              ))}
            </div>
          </div>

          <div className="project_detail_skill stmt_problem">
            <h4>Statement of problem: </h4>
            <p className="sub_content">
              In recent times, where digital technology is emergent and IT
              profession is raising on demand daily, with limited skilled
              personals, it is difficult and time consuming for a skilled
              personal to search and applying for various jobs online, rather
              these time can be use to improve their skills and prepare for
              interview better.
            </p>
          </div>
          <div className="project_detail_skill solution_problem">
            <h4>Solution to problem: </h4>
            <p className="sub_content">
              In recent times, where digital technology is emergent and IT
              profession is raising on demand daily, with limited skilled
              personals, it is difficult and time consuming for a skilled
              personal to search and applying for various jobs online, rather
              these time can be use to improve their skills and prepare for
              interview better.
            </p>
          </div>
          <div className="project_detail_skill challenges_section ">
            <h4>Challenges: </h4>
            <p className="sub_content">
              In recent times, where digital technology is emergent and IT
              profession is raising on demand daily, with limited skilled
              personals, it is difficult and time consuming for a skilled
              personal to search and applying for various jobs online, rather
              these time can be use to improve their skills and prepare for
              interview better.
            </p>
          </div>
          <div className="project_detail_skill present_feat_section">
            <h4>Present features: </h4>

            <div className="list_features">
              <div className="feature_list_item sub_content">
                <GiConfirmed /> <p>User Authentication</p>
              </div>
              <div className="feature_list_item sub_content">
                <GiConfirmed /> <p>User Authentication</p>
              </div>
              <div className="feature_list_item sub_content">
                <GiConfirmed /> <p>User Authentication</p>
              </div>
              <div className="feature_list_item sub_content">
                <GiConfirmed /> <p>User Authentication</p>
              </div>
            </div>
          </div>
          <div className="project_detail_skill present_feat_section">
            <h4>Future features: </h4>

            <div className="list_features">
              <div className="feature_list_item sub_content">
                <GiConfirmed /> <p>User Authentication</p>
              </div>
              <div className="feature_list_item sub_content">
                <GiConfirmed /> <p>User Authentication</p>
              </div>
              <div className="feature_list_item sub_content">
                <GiConfirmed /> <p>User Authentication</p>
              </div>
              <div className="feature_list_item sub_content">
                <GiConfirmed /> <p>User Authentication</p>
              </div>
            </div>
          </div>

          <div className="project_detail_skill">
            <p className="contact_me">
              <Link to="/contact">
                {' '}
                Contact Me Now
                <GrMail />
              </Link>
            </p>
          </div>
        </section>

        <section className="project_details_btn_container">
          <a
            href="https://www.buymeacoffee.com/kanumikech0"
            target="_blank"
            className="buy_coffee"
            rel="noreferrer"
          >
            {' '}
            <p>Buy me a coffee</p>
            <SiBuymeacoffee />
          </a>
          <BgButton text="View Live" icon={<FiArrowUpRight />} width="10rem" />
        </section>
      </ProjectPageDetailContainer>
      <Footer />
    </>
  );
};

export default ProjectDetailPage;
