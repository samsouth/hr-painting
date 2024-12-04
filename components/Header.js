import PropTypes from "prop-types";

const Header = (props) => (
  <header id="header" style={props.timeout ? { display: "none" } : {}}>
    <div className="logo">
      {/*<span className="icon fa-diamond"></span>*/}
      <div className="logo-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          stroke="#d13800"
          fill="#d13800"
          strokeWidth="0"
          t="1569683558243"
          viewBox="0 0 1024 1024"
          version="1.1"
          height="50px"
          width="50px"
          className="absolute"
          style={{ top: "35px", left: "35%" }}
        >
          <path d="M840 192h-56v-72c0-13.3-10.7-24-24-24H168c-13.3 0-24 10.7-24 24v272c0 13.3 10.7 24 24 24h592c13.3 0 24-10.7 24-24V256h32v200H465c-22.1 0-40 17.9-40 40v136h-44c-4.4 0-8 3.6-8 8v228c0 1.1 0.2 2.2 0.6 3.1-0.4 1.6-0.6 3.2-0.6 4.9 0 46.4 37.6 84 84 84s84-37.6 84-84c0-1.7-0.2-3.3-0.6-4.9 0.4-1 0.6-2 0.6-3.1V640c0-4.4-3.6-8-8-8h-44V520h351c22.1 0 40-17.9 40-40V232c0-22.1-17.9-40-40-40z" />
        </svg>
        <div className="absolute font-bold" style={{ top: "95px" }}>
          <h5
            className="text-4xl font-bold"
            style={{ margin: 0, fontWeight: 700 }}
          >
            RM
          </h5>
          <h5 className="text-xl" style={{ margin: 0, fontWeight: 700 }}>
            Painting & Decorating
          </h5>
        </div>
      </div>
    </div>
    <div className="content">
      <div className="inner">
        <h1>RM Painting & Decorating</h1>
        <p>
          RM Painting and Decorating is a professional painting service
          dedicated to transforming spaces with precision and expertise.
          <br />
          <br />
          Specializing in both interior and exterior painting, we provide
          high-quality finishes that bring your vision to life.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("intro");
            }}
          >
            Intro
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("work");
            }}
          >
            Work
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("about");
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("contact");
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Header;
