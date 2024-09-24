import "./Home.css";
import Header from "../../components/Header/Header.jsx";
import Button from "../../components/Button/Button.jsx";

function Home() {
  return (
    <main>
      <article>
        <div className="container">
          <Header />
          <h1>Home</h1>
          <Button
          variant="black"
          type="button"
          hasArrow={true}
          >Let&apos;s Talk</Button>
        </div>
      </article>
    </main>
  );
}

export default Home;
