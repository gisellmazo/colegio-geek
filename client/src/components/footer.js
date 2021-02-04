import React from "react";
import "../styles/footer.css";

function Footer(props) {
  const { cargo } = props;
  return (
    <footer className="bg-white text-center text-lg-start align-bottom foot-down">

      <div class="d-flex mr-5">
        <div class="mr-auto p-2 ml-4">
          <img src="/images/logo-colegio-geek.png" width="135px" className="mt-2" alt="colegio geek logo" />
        </div>
        <div class="p-2 mr-5">
          <button type="button" class="btn btn-primary btn-lg">{cargo}</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
