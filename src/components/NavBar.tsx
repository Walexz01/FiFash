const NavBar = () => {
  return (
    <nav className="nav__container">
      <div className="logo">FIFASH</div>
      <ul className="nav__links">
        <li className="nav__link">MEN</li>
        <li className="nav__link">WOMAN</li>
        <li className="nav__link">KIDS</li>
        <li className="nav__link">COLLECTIONS</li>
        <li className="nav__link">TRENDS</li>
      </ul>
      <div className="ctn__btn">
        <div className="login_ctn ctn">LOGIN</div>
        <div className="signup_ctn ctn">SIGNUP</div>
      </div>
    </nav>
  );
};

export default NavBar;
