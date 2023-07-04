import "../pageStyles/homePage.css";
import About from "./About";
import ThreePhones from "../images/headerImages/headerImage.png";
import WomanWithDrink from "../images/tailoredRecommendationImages/WomanWithDrink.png";
import TwoWomenWithDrinks from "../images/tailoredRecommendationImages/TwoWomenWithDrinks.png";
import WomanSitting from "../images/tailoredRecommendationImages/WomanSitting.png";
import HandshakeCircle from "../images/tailoredRecommendationImages/HandshakeCircle.png";
import Phone from "../images/whyChooseUsImages/Phone.png";
import bulletPoint from "../images/whyChooseUsImages/bulletPoint.png";
import { useState } from "react";

export default function HomePage() {
  const [display, setDisplay] = useState(false);

  function onClickDecideDisplayHandler() {
    setDisplay(!display);
  }

  return (
    <div>
      <header className="homepage-header">
        <h1>Welcome to Xplore</h1>
        <p>
          Your Personal Travel and <br />
          Exploration Guide
        </p>
      </header>
      <section className="three-phones">
        <img
          src={ThreePhones}
          alt="There are three phones next to each other.
        The first phone has one woman, the second having another
        woman, a dog, child, and half an old man, and the third phone
        containing the other half of the old man.On all three
        phones the people, you can only see the people and dogs
        back and they are on a dock looking into aorange sunset."
        />
      </section>
      <main>
        <section className="information-section">
          <h1>Discover Your Perfect Experience</h1>
          <p>
            Xplore is your ultimate travel companion, designed to enhance your
            journeys and make every trip truly memorable. With personalized
            recommendations based on your location and interests, we're here to
            help you find the best fitness facilities, healthy dining options,
            running or cycling routes, and meditation spots wherever you go.
          </p>
          <button>Get Started</button>
        </section>

        <section
          style={{
            borderBottomLeftRadius: display ? "0" : "20px",
            borderBottomRightRadius: display ? "0" : "20px"
          }}
          className="tailored-reccommendations"
        >
          <h1>Tailored Recommendations Just for You</h1>
          <span>
            <button
              className="tailored-reccomendations__see-more"
              onClick={() => {
                onClickDecideDisplayHandler();
              }}
            >
              {display ? "See Less" : "See More"}
            </button>
          </span>
        </section>
        {/***not really nested*/}
        {/**only display if the display state is set to true */}
        {display && (
          <section className="tailored-reccommendations__information">
            <div className="tailored-reccommendations__information__images">
              <section className="tailored-reccommendations__information__images__left">
                <img
                  src={WomanWithDrink}
                  id="womanWithDrink"
                  alt="A woman is sitting at the
                bar with a fluke."
                />
                <img
                  src={WomanSitting}
                  id="womanSitting"
                  alt="A woman is sitting on the floor."
                />
              </section>
              <section className="tailored-reccommendations__information__images__right">
                <img
                  src={TwoWomenWithDrinks}
                  id="twoWomenWithDrinks"
                  alt="Two women with drinks in their hand."
                />
                <img
                  src={HandshakeCircle}
                  id="handshakeCircle"
                  alt="A group of people are looking
                down at the camera and are handshaking."
                />
              </section>
            </div>
            <div className="tailored-recommendations__information__text">
              <p>
                At Xplore, we believe that every traveler deserves a
                personalized and enriching journey. We go the extra mile to
                provide recommendations that perfectly match your preferences
                and interests. By considering your location and the information
                you provide during onboarding, we curate a travel experience
                tailored to your needs.
              </p>

              <p>
                Whether you're a health-conscious individual, an active
                explorer, or a mindfulness enthusiast, we've got you covered.
                Our recommendations cater specifically to your interests.
                Discover nearby fitness centers, local eateries with healthy
                dining options, breathtaking running or cycling routes, and
                peaceful meditation spots.
              </p>

              <p>
                With Xplore, every recommendation is personalized just for you.
                Say goodbye to generic suggestions that don't resonate with your
                tastes. We deliver targeted recommendations that align with your
                preferences, making travel planning hassle-free.
              </p>
              <p>
                Embark on a journey that reflects who you are and what you love.
                Experience travel like never before with Xplore, where every
                recommendation is carefully crafted to create an unforgettable
                adventure tailored to you.
              </p>
            </div>
          </section>
        )}

        {/**About Page Section */}
        <About />

        {/**Why Coose Us Page Section */}
        <section id="why-choose-us" className="why-choose-us--section">
          <h1>Why choose Us </h1>
          <div className="why-choose-us__container">
            <div className="why-choose-us__personalized-recomandations">
              <div className="why-choose-us__options ">
                <img
                  src={bulletPoint}
                  className="bullet-point"
                  alt="Black bullet point."
                />
                <p>
                  Personalized recommendations based on your location and
                  interests
                </p>
              </div>
              <div className="why-choose-us__options shadow">
                <img
                  src={bulletPoint}
                  className="bullet-point"
                  alt="Black bullet point."
                />
                <p>
                  Seamless integration with Google's data and mapping services
                </p>
              </div>
              <div className="why-choose-us__options shadow">
                <img
                  src={bulletPoint}
                  className="bullet-point"
                  alt="Black bullet point."
                />
                <p>
                  Focus on promoting health, well-being, and balanced travel
                  experiences.
                </p>
              </div>

              <div className="why-choose-us__options ">
                <img
                  src={bulletPoint}
                  className="bullet-point"
                  alt="Black bullet point."
                />
                <p>
                  User-centric design and intuitive navigation for a smooth
                  experience
                </p>
              </div>

              <div className="why-choose-us__options  ">
                <img
                  src={bulletPoint}
                  className="bullet-point"
                  alt="Black bullet point."
                />
                <p>
                  Mobile-friendly and responsive design for easy access on any
                  device.
                </p>
              </div>
              <div className="why-choose-us__options shadow  ">
                <img
                  src={bulletPoint}
                  className="bullet-point"
                  alt="Black bullet point."
                />
                <p>
                  Regular updates and continuous improvement based on user
                  feedback.
                </p>
              </div>
            </div>
            <div id="elipse"></div>
          </div>
        </section>

        {/**Coming Soon Box Section */}
        <section id="promo" className="coming-soon">
          <div className="coming-soon__container">
            <h1 className="coming-soon__title">
              Start Your Journey with Xplore Today
            </h1>
            <p className="coming-soon__content">
              Download the Xplore app now and embark on a travel experience like
              no other. Discover new destinations, find hidden gems, and make
              every moment count. Let us be your guide as you explore the world,
              stay active, savor healthy cuisines, and find moments of peace and
              mindfulness along the way.
            </p>
            <h2 className="coming-soon">coming soon !!!</h2>
          </div>
          <div id="#promo">
            <img src={Phone} alt="phone" />
          </div>
        </section>

        {/**Contact Page Section */}
        <section id="get-in-touch" className="get-in-touch__section">
          <h1>Get In Touch With Us</h1>
          <div className="get-in-touch__flex-container">
            <div className="get-in-touch__left__inputs">
              <div>
                <input type="text" placeholder="Firstname" />
              </div>
              <div>
                <input type="text" placeholder="Lastname" />
              </div>
              <div>
                <input type="phone" placeholder="Phone Number" />
              </div>
              <div>
                <input type="email" placeholder="Email" />
              </div>
              <div className="term--and--condition">
                <input type="checkbox" />
                <span>I agree to the Terms and Conditions</span>
              </div>
            </div>
            <div id="comments">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="What do you want to talk about"
              ></textarea>
              <button> Send Message</button>
            </div>
          </div>
        </section>

        {/**Footer Section */}
      </main>
    </div>
  );
}
