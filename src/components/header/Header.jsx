import "./Header.css";
function Header() {
  return (
    <>
      <div className="header">
      <div className="header_social">
          <a href="https://www.facebook.com" className="footer__social-icon">
          <img src="/imgs/footer-icons/facebook.png" alt="facebook" />
          </a>
          <a href="https://www.twitter.com" className="footer__social-icon">
            <img src="/imgs/footer-icons/X.png" alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/aado_05" className="footer__social-icon">
           <img src="/imgs/footer-icons/instagramb.png" alt="Instagram" />
          </a>
        </div>
        <div className="sign-section">
          <div className="sign-up"><button>Sign up</button></div>
          <div className="sign-in"><button>Sign in</button></div>   
        </div>
        <a href="/" className="logo"> <img src="logo3.png" alt="logo" className="logo" /></a>
        <h1 id="header-text">Star Wars</h1>
        <div className="Links">
          <div className="link"><a href="/" className="header-links">Home</a></div>
          <div className="link"><a href="/Chat" className="header-links">Chat</a></div>
          <div className="link"><a href="/Gallery" className="header-links">Gallery</a></div>
          <div className="link"><a href="/Data" className="header-links">Data</a></div>
          <div className="link"><a href="/Privacity" className="header-links">Privacity</a></div>
        </div>
      </div>
    </>
  )
}
export default Header;