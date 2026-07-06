import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

function PricingCard({ name, price }) {
  return (
    <div className="pricing-card">
      <p className="plan-name">{name}</p>
      <p className="plan-price">{price}</p>
      <button className="select-button">SELECT</button>
    </div>
  )
}

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="faq-item">
      <div className="faq-question-row" onClick={() => setIsOpen(!isOpen)}>
        <p className="faq-question">{question}</p>
        <p className="faq-plus">{isOpen ? '-' : '+'}</p>
      </div>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  )
}

function DeviceCard({ title, description, imageSeed }) {
  return (
    <div className="device-card">
      <img className="device-image" src={`https://picsum.photos/seed/${imageSeed}/300/150`} alt={title} />
      <p className="device-title">{title}</p>
      <p className="device-description">{description}</p>
    </div>
  )
}

function FooterLink({ text }) {
  return <a className="footer-link" href="#">{text}</a>
}

function MovieSection() {
  const [activeTab, setActiveTab] = useState('TRENDING')
  const tabs = ['COMING SOON', 'NEW ON DISNEY+', 'TRENDING']

  return (
    <div className="movie-section">
      <div className="movie-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={tab === activeTab ? 'movie-tab movie-tab-active' : 'movie-tab'}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <p className="movie-tab-note">Showing: {activeTab}</p>
      <div className="movie-grid">
        {['movie1', 'movie2', 'movie3', 'movie4', 'movie5', 'movie6'].map((seed) => (
          <img
            key={seed}
            className="movie-poster"
            src={`https://picsum.photos/seed/${seed}/400/250`}
            alt="Movie poster"
          />
        ))}
      </div>
    </div>
  )
}

function Home() {
  return (
    <div>
      <div className="top-bar">
        <Link className="login-button" to="/signin">LOG IN</Link>
      </div>

      <div className="hero">
        <h1 className="hero-headline">
          Get your favorite stories, originals and live sports with Disney+, Hulu, and ESPN+
        </h1>
        <button className="hero-button">GET ALL THREE</button>
        <p className="hero-terms">Terms Apply.</p>
      </div>

      <h2 className="plan-heading">Choose Your Plan</h2>

      <div className="pricing-row">
        <PricingCard name="Trio Premium No Ads on Disney+ & Hulu" price="$19.99/month" />
        <PricingCard name="Trio Basic With Ads" price="$12.99/month" />
        <PricingCard name="Duo Basic With Ads" price="$9.99/month" />
      </div>

      <h2 className="faq-heading">Frequently Asked Questions</h2>

      <div className="faq-list">
        <FaqItem question="What is Disney+?" answer="Disney+ is a streaming service with movies, shows, and Originals from Disney, Pixar, Marvel, Star Wars, and more." />
        <FaqItem question="How much does Disney+ cost?" answer="Plans start at $9.99/month, with bundle options available for Disney+, Hulu, and ESPN+." />
        <FaqItem question="What can I watch on Disney+?" answer="Thousands of movies, series, and exclusive Originals across every major Disney-owned brand." />
        <FaqItem question="Where can I watch Disney+?" answer="On phones, tablets, computers, game consoles, and most smart TVs." />
        <FaqItem question="What's included on the Disney+ plans with and without ads?" answer="The ad-supported plan includes ads during playback; the no-ads plan removes them and adds 4K/Dolby support on select titles." />
        <FaqItem question="What is the Disney Bundle?" answer="A combined subscription to Disney+, Hulu, and ESPN+ at a discounted price." />
      </div>

      <h2 className="device-heading">Available on your favorite devices</h2>

      <div className="device-row">
        <DeviceCard title="Game Consoles" description="PS4 PS5 Xbox One Xbox Series X Xbox Series S" imageSeed="consoles" />
        <DeviceCard title="Mobile & Tablet" description="Amazon Fire Tablets Android Phones & Tablets iPhone and iPad" imageSeed="mobile" />
        <DeviceCard title="Computer" description="Chrome OS MacOS Windows PC" imageSeed="computer" />
        <DeviceCard title="TV" description="Amazon Fire TV Android TV devices AppleTV Chromecast LG TV Roku Samsung" imageSeed="tv" />
      </div>

      <MovieSection />

      <footer className="site-footer">
        <div className="footer-links">
          <FooterLink text="Closed Captioning" />
          <FooterLink text="Interest-Based Ads" />
          <FooterLink text="Supported Devices" />
          <FooterLink text="Help" />
          <FooterLink text="Gift Disney+" />
          <FooterLink text="About Us" />
          <FooterLink text="Disney+ Partner Program" />
          <FooterLink text="Disney Bundle" />
          <FooterLink text="Subscriber Agreement" />
          <FooterLink text="Privacy Policy" />
          <FooterLink text="Your California Privacy Rights" />
          <FooterLink text="Do Not Sell My Personal Information" />
        </div>
        <p className="footer-copyright">
          Content and platform availability may vary by region. &copy; Disney. All Rights Reserved.
        </p>
      </footer>
    </div>
  )
}

function SignIn() {
  return (
    <div className="signin-page">
      <h1>Sign In</h1>
      <p>This is a separate page, reached without a full page reload.</p>
      <Link className="footer-link" to="/">Back to Home</Link>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  )
}

export default App
