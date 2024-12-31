import logo from "../../public/images/bank-tree.avif";

const Home = () => {
  return (
    <main>
      <div className="hero">
        <img src={logo} alt="Bank Tree" />
        <section className="hero__content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="hero__content-subtitle">
            No fees. <br />
            No minimum deposit. <br />
            High interest rates.
          </p>
          <p className="hero__content-text">
            Open a savings account with Argent Bank today!
          </p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
      </section>
    </main>
  );
};

export default Home;
