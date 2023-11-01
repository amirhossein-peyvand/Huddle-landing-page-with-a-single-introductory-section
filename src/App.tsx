import "./sass/App.scss";
import logo from "./assets/logo.svg";
import illustration from "./assets/illustration-mockups.svg";

function App() {
  return (
    <div className="app">
      <header>
        <img src={logo} alt="logo" />
      </header>
      <main>
        <section className="mainImageContainer">
          <img src={illustration} alt="illustration" />
        </section>
        <section className="contentContainer">
          <h1>Build The Community Your Fans Will Love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button>Register</button>
        </section>
      </main>
      <footer>
        <div className="iconsContainer">
          <span>
            <i className="fa-brands fa-facebook-f"></i>
          </span>
          <span>
            <i className="fa-brands fa-twitter"></i>
          </span>
          <span>
            <i className="fa-brands fa-instagram"></i>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
