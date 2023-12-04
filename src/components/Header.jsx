import "../assets/css/header.css";

const Header = () => {
  return (
    <header>
      <h1>Andrea Montero</h1>

      <div className="databox">
        <h2>SOFTWARE ENGINEER</h2>
        <div className="rightdatabox">
          <p>
            Phone Number
            <span>+58 4249018578</span>
          </p>
          <p>
            Location
            <span>Guayana City, Venezuela</span>
          </p>
          <p>
            Email
            <span>amontero1211@gmail.com</span>
          </p>
          <p>
            Github
            <span>Github.com/amontero1211</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
