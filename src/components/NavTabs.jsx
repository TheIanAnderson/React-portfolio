import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;
  let homePageTitle = "About Me"
  if(currentPage === "/"){
    homePageTitle = " .      .      . "
  }
  let portfolioPageTitle = "Portfolio"
  if(currentPage === "/Portfolio"){
    portfolioPageTitle = "    .    .    .    "
  }
  let resumePageTitle = "Resume"
  if(currentPage === "/Resume"){
    resumePageTitle = "    .    .    .    "
  }

  let contactPageTitle = "Contact"
  if(currentPage === "/Contact"){
    contactPageTitle = "     .       .       .     "
  }
  return (
    <ul className="nav nav-tabs bg-dark">
      <li className="nav-item">
        <Link
          to="/"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === '/' ? 'nav-link active text-alert' : 'nav-link text-light'}
        >
          {homePageTitle}
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link text-light'}
        >
          {portfolioPageTitle}
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link text-light'}
        >
          {contactPageTitle}
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link text-light'}
        >
          {resumePageTitle}
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
