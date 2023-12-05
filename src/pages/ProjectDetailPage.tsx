import React, { useEffect } from 'react';
import { ProjectPageDetailContainer } from './styles/ProjectPDetailPage.style';
import NavBar from '../components/NavBar';
import { GiConfirmed } from 'react-icons/gi';
import { GrMail } from 'react-icons/gr';
import { SiBuymeacoffee } from 'react-icons/si';
import { FiArrowUpRight } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import HelmetHead from '../components/HelmetHead';
import { scrollToTop } from '../utils/scrollToTop';
import { ProjectDetails } from './services/ProjectPage.service';

const ProjectDetailPage = () => {
  const params = useParams<string>();

  // On render scroll to top
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <HelmetHead
        title={ProjectDetails[0]?.title + ' Project'}
        description={ProjectDetails[0]?.description}
        keywords={`${ProjectDetails[0]?.title} Royal coder, Renewable energy, Solar Panel, inverter installation`}
      />
      <NavBar />
      <ProjectPageDetailContainer>
        {ProjectDetails.filter(({ id }) => String(id) === params?.id).map(
          ({
            id,
            title,
            image,
            tools,
            challenges,
            collaborators,
            problem,
            solution,
            presentFeatures,
            futureFeatures,
            viewLink,
          }) => (
            <>
              <div className="project_details_container" key={id}>
                <img src={image} alt="product" />
              </div>

              <h2 className="project_name">{title}</h2>

              <section className="project_details_content ">
                <div className="project_detail_skill details_section">
                  <h4>Tools used: </h4>
                  <div className="project_details_tag">
                    {tools.map((val) => (
                      <p>{val}</p>
                    ))}
                  </div>
                </div>

                <div className="project_detail_skill stmt_problem">
                  <h4>Statement of problem: </h4>
                  <p className="sub_content">{problem}</p>
                </div>
                <div className="project_detail_skill solution_problem">
                  <h4>Solution to problem: </h4>
                  <p className="sub_content">{solution}</p>
                </div>
                <div className="project_detail_skill challenges_section ">
                  <h4>Coding Challenges: </h4>
                  <p className="sub_content">{challenges}</p>
                </div>
                <div className="project_detail_skill present_feat_section">
                  <h4>Present features: </h4>

                  <div className="list_features">
                    {presentFeatures.map((val) => (
                      <div className="feature_list_item sub_content" key={id}>
                        <GiConfirmed /> <p>{val}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="project_detail_skill present_feat_section">
                  <h4>Future features: </h4>

                  <div className="list_features">
                    {futureFeatures.map((val) => (
                      <div className="feature_list_item sub_content" key={id}>
                        <GiConfirmed /> <p>{val}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="project_detail_skill collabo">
                  <h4>
                    {' '}
                    {collaborators.length > 1
                      ? 'Collaborators:'
                      : 'Collaborator:'}{' '}
                  </h4>

                  {collaborators.map(({ id, start, link, name }) => (
                    <div className="collab_list sub_content" key={id}>
                      <GiConfirmed /> <p>{start}</p>
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="collab_link"
                      >
                        {name}
                      </a>
                    </div>
                  ))}
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
                <a
                  href={viewLink}
                  target="_blank"
                  className="visit_link_btn"
                  rel="noreferrer"
                >
                  {' '}
                  <p>View Live</p>
                  <FiArrowUpRight />
                </a>
              </section>
            </>
          )
        )}
      </ProjectPageDetailContainer>
      <Footer />
    </>
  );
};

export default ProjectDetailPage;
