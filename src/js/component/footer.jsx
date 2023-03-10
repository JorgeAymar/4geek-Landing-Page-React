
import React from "react";

// create your first component

function Footer(){
  return (
  //<!-- Footer -->

  <footer className="page-footer font-small cyan darken-3">

    <div className="container-fluid">

      <div className="row mt-5 p-4 bg-dark text-white text-center">

        <div className="col-md-12 py-5">
          <div className="mb-5 flex-center">

            <a className="fb-ic">
              <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x p-3"> </i>
            </a>
            <a className="tw-ic">
              <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x p-3"> </i>
            </a>
            <a className="gplus-ic">
              <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x p-3"> </i>
            </a>
            <a className="li-ic">
              <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x p-3"> </i>
            </a>
            <a className="ins-ic">
              <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x p-3"> </i>
            </a>
            <a className="pin-ic">
              <i className="fab fa-pinterest fa-lg white-text fa-2x p-3"> </i>
            </a>
          </div>
        </div>

      </div>

    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:
      <a href="/"> george.com</a>
    </div>

  </footer>
  //<!-- Footer -->

)}

export default Footer;