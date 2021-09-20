import { Link } from "react-router-dom";
// import './Formstyle.css'
const Nav = () => {
  return (
    <section className="nav">
      <h1>Navigator</h1>
      <Link className="lnk" to="/api">
        Api
      </Link>
      <Link className="lnk" to="/table">
        table
      </Link>
      <Link className="lnk" to="/chart">
        chart
      </Link>
      <Link className="lnk" to="/counter">
        counter
      </Link>
      <Link className="lnk" to="/form">
        Form
      </Link>
    </section>
  );
};
export default Nav;
