import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>contentful cms</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
            recusandae enim provident nisi at laborum, labore aspernatur quaerat
            quisquam natus ipsa saepe. Minus totam nisi ut, nulla voluptas
            magnam quos!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
