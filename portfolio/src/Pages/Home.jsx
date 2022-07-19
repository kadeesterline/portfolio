import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

function Home() {
  return (
    <>
      <div id="intro">
        <div class="intro-container">
          <div class="intro-wrapper">
            <div class="intro-text">
              <div>
                <h1 class="intro-header">
                  Hi, I'm Kade
                  <TypeWriterEffect
                    textStyle={{
                      fontWeight: 550,
                      fontSize: "1em",
                    }}
                    startDelay={2000}
                    multiText={[
                      "a Freelancer",
                      "a Problem Solver",
                      "a Frontend Developer",
                      "a Software Engineer",
                    ]}
                    multiTextDelay={1000}
                    typeSpeed={30}
                  />
                  <span id="intro-span"></span>
                </h1>
              </div>
              <div>
                <h1 class="intro-paragraph">
                  Welcome to my portfolio! You'll find descriptions and links to
                  projects, blog posts, skills and how you can contact me using
                  the links in the navbar.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wave-wrapper wave-1">
        <img
          class="wave"
          src="./src/images/stacked-waves-haikei.svg"
          alt="wave"
        />
      </div>
    </>
  );
}

export default Home;
