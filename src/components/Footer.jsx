import React from 'react';

function Footer({ email }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <h3>Contact & Connect</h3>
        <p>Feel free to reach out for collaborations or queries.</p>
        <div className="footer-links">
          <span>Email: <a href={`mailto:${email}`}>{email}</a></span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
