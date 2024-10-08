import "./Projects.css";
import Header from "../../components/Header/Header.jsx";
import ThumbNail from "../../components/ProjectThumbnail/ProjectThumbnail.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import CallToAction from "../../components/CallToAction/CallToAction.jsx";
import projectsData from "../../data/projects.json";
import { getImagePath } from "../../helpers/imageHelpers.js";

// import placeHolderImg from "../../assets/placeHolderImg.jpg";

function Projects() {
  const featuredProjects = projectsData.filter((project) => project.isFeatured);
  const normalProjects = projectsData.filter((project) => !project.isFeatured);

  return (
    <main>
      <article>
        <div className="container">
          <Header />
          <section className="hero-secondPage">
            <h1>Projects</h1>
          </section>
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
          <section>
            <div className="indication-wrapper">
              <h6>Selected work</h6>
            </div>
            {normalProjects.map((project)=>(
              <ThumbNail 
              key={project.slug}
              image={getImagePath(project.thumbnail)}
              title={project.title}
              description={project.description}
              buttons={[
                {
                  text:"View Details",
                  variant:"white",
                  href:`/projects/${project.slug}`,
                  linkType: "internal"
                }         
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

export default Projects;
