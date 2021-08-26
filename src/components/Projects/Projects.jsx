import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const projects = [
  {
    id: nanoid(),
    img: 'project-protector.png',
    title: 'Cropwise Protector',
    description:
      'Intelligent Agricultural monitoring platform, that assists crop management with georeferenced monitoring, team performance indicators, and pest control.',
    techonologies:
      'Technologies: JavaScript ES6 (Axios, Jest, React, React Testing Library, Redux, RxJS, TypeScript), HTML / CSS (Ant Design, SASS), AWS (CloudWatch, DynamoDB, Lambda, S3), Redis.',
    url: 'https://protector.cropwise.com/',
  },
  {
    id: nanoid(),
    img: 'project-izzi.png',
    title: 'IZZI Gaming',
    description:
      'Web platform that helps e-sports players improve their skills based on coaching, courses, and game replay analysis.',
    techonologies:
      'Technologies: JavaScript ES6 (Axios, Jest, React, React Testing Library), HTML / CSS (Material UI, SASS), GCP (App Engine, Cloud Storage, Compute Engine), NodeJs (Express, Joi, PM2), MongoDB.',
    url: 'https://app.izzigaming.com.br/',
  },
  {
    id: nanoid(),
    img: 'project-bdmg.jpeg',
    title: 'BDMG APP',
    description:
      'App of contract management, that allows clients sign contracts digitaly with proof of life and documents validation.',
    techonologies:
      'Technologies: JavaScript ES6 (Axios, React Native), HTML / CSS (UI Kitten, SASS).',
    url: 'https://apps.apple.com/br/app/bdmg/id1507682398',
  },
  {
    id: nanoid(),
    img: 'project-kim.png',
    title: 'KIM+',
    description:
      'It is an app of service management, that helps the user with daily tasks such as recharging bus cards, paying bills, phone data recharge as well as offering discounts in a variety of stores',
    techonologies:
      'Technologies: JavaScript ES6 (Axios, React Native), HTML / CSS (React Native Paper, SASS).',
    url: 'https://www.kimmais.com.br/',
  },
  {
    id: nanoid(),
    img: 'project-simplicidata.jpeg',
    title: 'Simplicidata',
    description:
      'Artificial intelligence web platform for data preparation, which allows the users to perform a lot of customized data transformations.',
    techonologies:
      'Technologies: JavaScript ES6 (Axios, React, Redux, Redux-Saga, Relay, GraphQL, Webpack), HTML / CSS (Materialize, SASS).',
  },
  {
    id: nanoid(),
    img: 'project-dataviva.jpeg',
    title: 'Dataviva',
    description:
      'Collaborative web platform for visualization of Brazilian socioeconomic data, in which the user can have an overview of the socioeconomic data of the country divided by states even cities, and so on.',
    techonologies:
      'Technologies: JavaScript (D3, JQuery), HTML / CSS (Bootstrap), MySQL, Python (Flask), AWS (EC2, RDS, Redshift).',
    url: 'http://dataviva.info/pt/',
    repo: 'https://github.com/DataViva',
  },
  {
    id: nanoid(),
    img: 'project-gravol.jpeg',
    title: 'Gravol',
    description:
      'Web platform to helps teams collect and organize performance data by storing match events and videos and creates reports with key video clips.',
    techonologies:
      'Technologies: JavaScript ES6 (Axios, Jest, React, React Testing Library), HTML / CSS (Material UI, SASS).',
  },
];

const Projects = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          {projects.map(({ title, description, techonologies, url, repo, img, id }) => (
            <Row key={id}>
              <Col lg={6} sm={12}>
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={500}
                  distance="30px"
                >
                  <div className="project-wrapper__text">
                    <h3 className="project-wrapper__text-title">{title}</h3>
                    <div>
                      <p>{description}</p>
                      <p className="mb-4">{techonologies}</p>
                    </div>
                    {url && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url}
                      >
                        See Live
                      </a>
                    )}

                    {repo && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn text-color-main"
                        href={repo}
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                </Fade>
              </Col>
              <Col lg={6} sm={12}>
                <Fade
                  right={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={1000}
                  distance="30px"
                >
                  <div className="project-wrapper__image">
                    <a
                      href={url}
                      target="_blank"
                      aria-label="Project Link"
                      rel="noopener noreferrer"
                    >
                      <Tilt
                        options={{
                          reverse: false,
                          max: 8,
                          perspective: 1000,
                          scale: 1,
                          speed: 300,
                          transition: true,
                          axis: null,
                          reset: true,
                          easing: 'cubic-bezier(.03,.98,.52,.99)',
                        }}
                      >
                        <div data-tilt className="thumbnail rounded">
                          <ProjectImg alt={title} filename={img} />
                        </div>
                      </Tilt>
                    </a>
                  </div>
                </Fade>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
