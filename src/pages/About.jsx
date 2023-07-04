import "../pageStyles/AboutPage.css";
import Img1 from "../images/AboutImg/Image1.png";
import Img2 from "../images/AboutImg/Image2.png";
import Img3 from "../images/AboutImg/Image3.png";
import Img4 from "../images/AboutImg/Image4.png";

function About() {
  return (
    <section id="About" className="About-section">
      <div className="grid-container">
        <div className="item">
          <div className="imgDiv">
            <img src={Img1} alt="" />
          </div>
          <div className="textDiv">
            <h1>Seamless Travel Planning and Exploration</h1>
            <p>
              We understand the importance of convenience and accessibility when
              it comes to travel. Xplore integrates mapping features, ensuring
              that you can easily locate and navigate to the recommended spots.
              No more hassle of searching for fitness facilities or wondering
              where to find a healthy meal. Our app guides you effortlessly,
              allowing you to make the most of your travel experiences.
            </p>
          </div>
        </div>

        <div className="item">
          <div className="textDiv">
            <h1>Prioritize Your Health and Well-being</h1>
            <p>
              Your well-being matters to us. Xplore puts your health and
              wellness at the forefront of your travel experience. We provide
              recommendations for fitness facilities, healthy dining options,
              and meditation spots, empowering you to maintain your wellness
              routines even while you're on the go. Find balance, stay active,
              and discover moments of tranquility wherever your journey takes
              you.
            </p>
          </div>
          <div className="imgDiv">
            <img src={Img2} alt="" />
          </div>
        </div>

        <div className="item">
          <div className="imgDiv">
            <img src={Img3} alt="" />
          </div>
          <div className="textDiv">
            <h1>Enhanced User Satisfaction and Engagement</h1>
            <p>
              At Xplore, your satisfaction is our top priority. Our
              user-friendly interface and personalized recommendations ensure
              that you'll have a delightful and engaging experience every time
              you use the app. We strive to deliver value, meet your
              expectations, and help you create unforgettable travel memories.
              Join thousands of travelers who have made Xplore their go-to
              travel companion.es.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="responsive-div">
          <img src={Img4} alt="" />
        </div>
      </div>
    </section>
  );
}

export default About;
