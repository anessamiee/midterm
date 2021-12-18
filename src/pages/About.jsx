import React from "react";
import { ProgressBar } from "react-bootstrap";
import Stepper from "@mui/material/Stepper";
import "bootstrap/dist/css/bootstrap.min.css";
import { Step, StepLabel } from "@mui/material";

export default function About() {
  
  return (
    
    <div id="About" className="main">
      <div className="flex-column-container">
        <div className="head">
          <h1>
            A little bit about me and how I became the designer I am today
          </h1>
        </div>
        <div className="flex-column-container additional">
          <Stepper activeStep={3} alternativeLabel={true}>
            <Step>
              <StepLabel ><b>Birth</b></StepLabel>
            </Step>
            <Step>
              <StepLabel><b>First Steps</b></StepLabel>
            </Step>
            <Step>
              <StepLabel><b>College</b></StepLabel>
            </Step>
          </Stepper>
        </div>
        <div className="flex-row-container">
          <div id="about-1" className="flex-align-left-container">
            <section>
              <h2>What I can do for you</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <p>
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                sem. Nulla consequat massa quis enim.
              </p>
            </section>
          </div>
          <div id="about-2" className="flex-align-left-container">
            <section>
              <h2>How i usually work</h2>
              <p>
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                sem. Nulla consequat massa quis enim.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
            </section>
          </div>
        </div>
        <div className="flex-row-container">
          <div id="about-3" className="flex-align-left-container">
            <section>
              <h2>Skills</h2>
              <p>
                Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
                eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                dapibus in, viverra quis, feugiat a, tellus.
              </p>
              <ul>
                <li>Nullam felis eu pede mollis pretium.</li>
                <li>
                  Integer tincidunt. Cras dapibusc onsectetuer adipiscing eli.
                </li>
                <li>Vivamus elementum semper nisi.</li>
                <li>
                  Lorem ipsum dolor sit amet. Aenean commodo ligula eget dolor.
                </li>
              </ul>
              <p>
                Aenean massa. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Donec quam felis,
                ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                consequat massa quis enim.
              </p>
            </section>
          </div>
          <div id="about-4" className="flex-align-left-container">
            <section>
              <p>LOGO DESIGN</p>
              <ProgressBar variant="black" now={80} />
            </section>
            <section>
              <p>BRAND DESIGN</p>
              <ProgressBar variant="black" now={90} />
            </section>
            <section>
              <p>WEB DESIGN</p>
              <ProgressBar variant="black" now={70} />
            </section>
            <section>
              <p>CONTENT CREATION</p>
              <ProgressBar variant="black" now={50} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
