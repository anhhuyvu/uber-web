import "./dropdown.css";
const Dropdown = () => {
  return (
    <div className="dropdown" style={{ float: "right" }}>
      <button className="dropbtn">
        <i className="fa fa-align-right"></i>
      </button>
      <div className="dropdown-content">
        <a href="/">
          <i className="fa fa-home" style={{ fontSize: "20px" }}></i>
          Home
        </a>
        <a href="/map">
          <i class="fa fa-shopping-cart"></i>
          Book Now
        </a>
        <a href="/contact">
          <i class="fa fa-bell"></i>
          Contact Us
        </a>
        <a href="/end">
          <i class="fa fa-cog"></i>
          Operations
        </a>
      </div>
    </div>
  );
};
export default Dropdown;
