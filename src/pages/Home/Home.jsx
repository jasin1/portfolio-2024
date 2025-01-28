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
            <div className="button-wrapper">
              <Button
                variant="black"
                type="button"
                hasArrow={true}
                href="/Contact"
              >
                Let&apos;s Talk
              </Button>

              <Button
                variant="white"
                type="button"
                hasArrow={true}
                href="https://www.linkedin.com/in/jasin-tairaidrissi-a807353/"
              >
                LinkedIn
              </Button>
            </div>
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
                  project.liveSiteURL
                    ? {
                        text: "Live Site",
                        variant: "white",
                        href: project.liveSiteURL,
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
                  I&apos;m a Frontend Developer with a strong foundation in
                  design, based in Amsterdam, and backed by over 15 years of
                  experience crafting engaging digital solutions. My journey in
                  design has sharpened my eye for aesthetics and usability, and
                  as I transition into frontend development, I bring a fresh,
                  committed perspective to coding. I&apos;m excited to join a
                  team where I can keep growing as a developer while drawing on
                  my design expertise to build user-focused solutions. Curious
                  about my journey and how my skills could support your team?
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
