import foodzilla_tp from "../assets/foodzilla_tp.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={foodzilla_tp} alt="logo" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
