import "./Header.css";
function Header() {
  return (
    <>
      <div className="header">
        <a href="/" className="logo"> <img src="logo3.png" alt="logo" className="logo" /></a>
        <h1 id="header-text">Star Wars</h1>
        <div className="Links">
          <a href="/" className="header-links">Home</a>
          <a href="/Gallery" className="header-links">Gallery</a>
          <a href="/Privacity" className="header-links">Privacity</a>
        </div>
      </div>
    </>
  )
}
export default Header;