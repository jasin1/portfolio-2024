import "./Home.css";
import Header from "../../components/Header/Header.jsx";
import Button from "../../components/Button/Button.jsx";
import ThumbNail from "../../components/ProjectThumbnail/ProjectThumbnail.jsx";
import placeHolderImg from "../../assets/placeHolderImg.jpg";

function Home() {
  const thumbnailData = {
    image: placeHolderImg,
    title: "Garden Genius",
    description:
      "Mi a pellentesque proin laoreet risus vulputate quam erat in. Eget orci ullamcorper ut nunc a eget lacus cum. Ac vivamus viverra aliquam duis eu lectus dapibus pulvinar vitae. Pellentesque auctor odio quis venenatis feugiat blandit tortor. Integer purus amet elit odio pharetra commodo. Magnis pharetra odio volutpat",
    buttons: [{ text: "view Details", variant:"white" }, { text: "GitHub" }],
    isFeatured: true,
  };

  return (
    <main>
      <article>
        <div className="container">
          <Header />
          <h1>
            Crafting Code,<br/> 
            <span className="Header-span">Designing Experiences</span>
          </h1>
          <Button variant="black" type="button" hasArrow={true}>
            Let&apos;s Talk
          </Button>
          <div className="section">
            <ThumbNail
              image={thumbnailData.image}
              title={thumbnailData.title}
              description={thumbnailData.description}
              buttons={thumbnailData.buttons}
              isFeatured={thumbnailData.isFeatured}
            ></ThumbNail>
          </div>
        </div>
      </article>
    </main>
  );
}

export default Home;
