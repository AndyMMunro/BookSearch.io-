import React from "react";
import {render} from "react-dom";
// import Forms from "./Forms";
// import NavBar from "./NavBar";

const App = () => (
  <div class="collapse bg-dark" id="navbarHeader">
  <div class="container">
      <div class="row">
          <div class="col-sm-8 col-md-7 py-4">
              <h4 class="text-white">About</h4>
              <p class="text-muted">
                  HEY THERE! This is a quick access to my social media content and contact info to get a
                  deeper look at what I am all
                  about.
              </p>
          </div>
          <div class="col-sm-4 offset-md-1 py-4">
              <h4 class="text-white">Media</h4>
              <ul class="list-unstyled">
                  <li><a href="Assets\PDF\Resume.pdf" download
                          class="text-white">Download Resume</a>
                  </li>
                  <li><a href="https://www.linkedin.com/in/andy-munro-48585a103/"
                      class="text-white">Linkedin</a>
              </li>
                  <li><a href="https://github.com/AndyMMunro" class="text-white">Github</a></li>
                  <li><a class="text-white">andymunro87@gmail.com</a></li>
              </ul>
          </div>
      </div>
  </div>
</div>
<div class="navbar navbar-dark bg-dark shadow-sm">
  <div class="container d-flex justify-content-between">
      <a href="#" class="navbar-brand d-flex align-items-center" data-toggle="collapse"
          data-target="#navbarHeader">
          <!-- deket and add  -->
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="mr-2"
              viewBox="0 0 24 24" focusable="false">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" /></svg>
          <strong>BUISNESS CARD</strong>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader"
          aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
  </div>
</div>
);

render(<App />, document.getElementById("root"));