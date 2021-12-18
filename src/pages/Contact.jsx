import React from "react";
import Map from "../img/Map.png";
export default function Contact() {
  return (
    <div id="Contact" className="main">
      <div className="flex-container-column">
        <div className="head">
          <h1>
            Contact – Get in touch! I am currently available for contract work
          </h1>
        </div>
        <div className="flex-row-container">
          <div id="location-info" className="flex-align-left-container">
            <h2>I am located in</h2>
            <section>
              <strong>Main Street 1, Williamsville</strong>
              <p>Buffalo, USA</p>
            </section>
            <section>
              <strong>office@enfold-minimal.com</strong>
              <p>+555 283 784 333</p>
            </section>
            <section>
              <p>
                Lorem ipsum dolor sit amet, consectetuer <b>adipiscing</b> elit.
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus.
              </p>
            </section>
            <section>
              <p>
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                sem. Nulla consequat massa quis enim.
              </p>
            </section>
          </div>
          <div id="contact-info" className="flex-align-left-container">
            <h2>Feel free to drop me a mail</h2>
            <div className="flex-row-container">
              <input
                type="text"
                name="name"
                id="contact-info-name"
                placeholder="Name"
              />
              <input
                type="email"
                name="email"
                id="contact-info-email"
                placeholder="Email"
              />
            </div>
            <textarea
              id="contact-info-message"
              name="message"
              placeholder="Message"
            />
            <input type="submit" id="contact-info-submit" name="Submit" />
          </div>
        </div>
        <img src={Map} alt="map" id="map" margin="100px 0" width="100%" />
      </div>
    </div>
  );
}
