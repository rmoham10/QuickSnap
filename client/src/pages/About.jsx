import PageWrapper from './PageWrapper';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="box">
          <div className="logo">
            <h1>BeFit</h1>
          </div>
        </div>

        <nav>
          <ul className="nav-links">
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* PAGE BODY */}
      <div className="page-container">
        <div className="about-card">
          <h2 className="form-title">About BeFit</h2>

          <p>
            BeFit is your go-to solution for accessing gyms at airports and other locations
            using your membership or partnered cards. We aim to provide seamless, convenient,
            and flexible fitness options for our members wherever they are.
          </p>
          <p>
            <br />Our mission is to promote health and wellness while making it easy for travelers
            and cardholders to stay active. Partnering with banks and card providers, we allow
            their clients to enjoy our services without hassle, just like redeeming loyalty
            points or using special benefits with their cards.
          </p>
          <p>
            <br />With BeFit, you can track your gym usage, manage your profile, and even link
            multiple membership or partner cards for a personalized experience. Whether
            you are a frequent traveler, a casual gym-goer, or someone looking for flexible
            fitness options, BeFit makes staying active simple and rewarding.
          </p>
          <p>
            <br />We are committed to delivering a safe, hygienic, and enjoyable fitness environment,
            equipped with high-quality gym equipment and easy-to-use access for all members.
          </p>
        </div>
      </div>

      {/* CSS */}
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* FIXED BACKGROUND IMAGE */
body {
  background-image: url('/backgroundImage.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

/* HEADER */
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 22vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-image: url('/gymequip.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-bottom: 1px solid rgb(87, 5, 5);
  z-index: 1000;
}

/* LOGO BOX */
.box {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 110px;
  height: 110px;
  background-color: rgb(231, 10, 10);
  padding: 10px;
  display: flex;
  align-items: flex-end;
}

.logo h1 {
  color: white;
  margin: 0;
  font-size: 1.8rem;
  line-height: 1;
}

/* NAV */
nav,
.nav-links {
  display: flex;
}

.nav-links {
  position: absolute;
  right: 60px;
  bottom: 20px;
  gap: 2rem;
  list-style: none;
  font-size: 1.5rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
}

.nav-links a:hover {
  color: rgb(173, 166, 166);
}

/* PAGE CONTAINER */
.page-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 22vh;
}

/* ABOUT CARD */
.about-card {
  background: white;
  padding: 40px;
  border-radius: 16px;
  width: 100%;
  max-width: 900px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  font-family: 'Noto Serif', serif;
  color: #1a1a1a;
  line-height: 1.7;
}

/* FORM TITLE / CARD TITLE */
.form-title {
  text-align: center;
  margin-bottom: 25px;
  margin-top: -10px;
  color: rgb(173, 50, 50);
}

/* LINKS */
a:hover {
  color: rgb(173, 166, 166);
}
      `}</style>
    </>
  );
}