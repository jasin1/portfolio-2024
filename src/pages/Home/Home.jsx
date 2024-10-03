import "./Home.css";
import Header from "../../components/Header/Header.jsx";
import Button from "../../components/Button/Button.jsx";
import ThumbNail from "../../components/ProjectThumbnail/ProjectThumbnail.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import CallToAction from "../../components/CallToAction/CallToAction.jsx";
// import placeHolderImg from "../../assets/placeHolderImg.jpg";
import projectsData from "../../data/projects.json";
import {getImagePath} from "../../helpers/imageHelpers.js";

function Home() {

  

  const featuredProjects = projectsData.filter((project) => project.isFeatured);
  const normalProjects = projectsData.filter((project) => !project.isFeatured);



  // const thumbnailData2 = {
  //   image: placeHolderImg,
  //   title: "Garden Genius",
  //   description:
  //     "Mi a pellentesque proin laoreet risus vulputate quam erat in. Eget orci ullamcorper ut nunc a eget lacus cum. Ac vivamus viverra aliquam duis eu lectus dapibus pulvinar vitae. Pellentesque auctor odio quis venenatis feugiat blandit tortor. Integer purus amet elit odio pharetra commodo. Magnis pharetra odio volutpat",
  //   buttons: [{ text: "view Details", variant: "white" }, { text: "GitHub" }],
  //   isFeatured: false,
  //   tags: ["React", "Design", "Branding", "UI/UX"],
  // };

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
              I am a frontend developer who leverages design expertise to create seamless, user-friendly web experiences.
            </p>
            <Button variant="black" type="button" hasArrow={true}>
              Let&apos;s Talk
            </Button>
          </section>

           {/* Featured work */}

          <section>
            <div className="indication-wrapper">
              <h6>Featured work</h6>
            </div>
            {featuredProjects.map((project)=>(
              console.log('my img is ', getImagePath(project.thumbnail)),
              <ThumbNail 
              key={project.slug}
              image={getImagePath(project.thumbnail)}
              title={project.title}
              description={project.description}
              buttons={[
                { text: "view Details", variant: "white"},
                project.githubURL ? {text: "GitHub", variant: "white", link: project.githubURL}:null,
              ].filter(Boolean)}
              isFeatured={project.isFeatured}
              tags={project.tags}
              />
            ))}
            {/* <ThumbNail
              image={thumbnailData.image}
              title={thumbnailData.title}
              description={thumbnailData.description}
              buttons={thumbnailData.buttons}
              isFeatured={thumbnailData.isFeatured}
              tags={thumbnailData.tags}
            ></ThumbNail> */}
          </section>
          <section className="section-border">
            <div className="section-content">
              <h2>About Me</h2>
              <div className="content-wrapper-small">
                <p className="Header-sub">
                  As a digital designer and art director I help companies and
                  organisations around the world connect with their audience and
                  grow their business. Projects can be done directly with
                  clients or in a supporting role for agencies and studios from
                  around the world
                </p>
                <div className="button-wrapper">
                  <Button variant="white" type="button" hasArrow={true}>
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
            {normalProjects.map((project)=>(
              <ThumbNail 
              key={project.slug}
              image={getImagePath(project.thumbnail)}
              title={project.title}
              description={project.description}
              buttons={[
                {text: "View Details", variant:"white"},
                project.githubURL ? {text: "GitHub", variant: "white", link: project.githubURL} :null,
              ].filter(Boolean)}
              isFeatured={project.isFeatured}
              tags={project.tags}
              />
            ))}
            {/* <ThumbNail
              image={thumbnailData2.image}
              title={thumbnailData2.title}
              description={thumbnailData2.description}
              buttons={thumbnailData2.buttons}
              isFeatured={thumbnailData2.isFeatured}
              tags={thumbnailData2.tags}
            ></ThumbNail> */}
          </section>
        </div>
        <CallToAction></CallToAction>
        <Footer></Footer>
      </article>
    </main>
  );
}

export default Home;
