import "./Home.css";
import Header from "../../components/Header/Header.jsx";
import Button from "../../components/Button/Button.jsx";
import ThumbNail from "../../components/ProjectThumbnail/ProjectThumbnail.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import CallToAction from "../../components/CallToAction/CallToAction.jsx";
// import placeHolderImg from "../../assets/placeHolderImg.jpg";
import projectsData from "../../data/projects.json";
import { getImagePath } from "../../helpers/imageHelpers.js";

function Home() {
  const featuredProjects = projectsData.filter((project) => project.isFeatured);
  const normalProjects = projectsData.filter((project) => !project.isFeatured);

  return (
    <main>
      <article>
        <div className="container">
      <Header />
          {/* Hero section */}
          <section className="hero">
            <h1>
              Crafting Code,
              <br />
              <span className="Header-span">Designing Experiences</span>
            </h1>
            <p className="Header-sub">
              I am a frontend developer who leverages design expertise to create
              seamless, user-friendly web experiences.
            </p>
            <Button
              variant="black"
              type="button"
              hasArrow={true}
              href="/Contact"
            >
              Let&apos;s Talk
            </Button>
          </section>

          {/* Featured work */}

          <section>
            <div className="indication-wrapper">
              <h6>Featured work</h6>
            </div>
            {featuredProjects.map((project) => (
              <ThumbNail
                key={project.slug}
                image={getImagePath(project.thumbnail)}
                title={project.title}
                description={project.description}
                buttons={[
                  {
                    text: "View Details",
                    variant: "white",
                    href: `/projects/${project.slug}`,
                    linkType: "internal",
                  },
                  project.githubURL
                    ? {
                        text: "GitHub",
                        variant: "white",
                        href: project.githubURL,
                        linkType: "external",
                      }
                    : null,
                ].filter(Boolean)}
                isFeatured={project.isFeatured}
                tags={project.tags}
              />
            ))}
          </section>
          <section className="section-border">
            <div className="section-content">
              <h2>About Me</h2>
              <div className="content-wrapper-small">
                <p className="Header-sub">
                I&apos;m a Frontend Developer and Designer based in Amsterdam, with over 15 years of experience in crafting user-friendly digital solutions. My expertise lies in merging aesthetics with functionality, and I&apos;m passionate about delivering projects that meet both user needs and business goals. Whether you&apos;re looking for a collaborator on your next project or seeking to enhance your team&apos;s capabilities, I&apos;m eager to connect and explore new opportunities!<br/>
                Curious to learn more about my journey and skills?
                </p>
                <div className="button-wrapper">
                  <Button
                    variant="white"
                    type="button"
                    hasArrow={true}
                    href="/About"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="indication-wrapper">
              <h6>Selected work</h6>
            </div>
            {normalProjects.map((project) => (
              <ThumbNail
                key={project.slug}
                image={getImagePath(project.thumbnail)}
                title={project.title}
                description={project.description}
                buttons={[
                  {
                    text: "View Details",
                    variant: "white",
                    href: `/projects/${project.slug}`,
                    linkType: "internal",
                  },
                ].filter(Boolean)}
                isFeatured={project.isFeatured}
                tags={project.tags}
              />
            ))}
          </section>
        </div>
        <CallToAction></CallToAction>
        <Footer></Footer>
      </article>
    </main>
  );
}

export default Home;
