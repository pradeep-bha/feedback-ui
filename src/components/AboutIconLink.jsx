import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutIconLink() {
  return (
    <div className="about-link">
      <Link to="/about">
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}

/* 

// We can also pass params in the (to) of Link  tag

<Link to={{
    pathname: '/about',
    search: '?sort=name',
    hash: '#hello'
}}

*/

export default AboutIconLink;
