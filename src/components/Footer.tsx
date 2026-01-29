import React from 'react';

const Footer = () => {
  return (
    <footer style={{ background: '#3162b9', color: '#fff', padding: '40px 0 0 0', fontFamily: 'inherit' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <div style={{ flex: '1 1 200px', marginBottom: '30px' }}>
            <h1 style={{ fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '0.5rem', color: '#fff' }}>Yasitha Shyamantha</h1>
          </div>
          <div style={{ flex: '1 1 150px', marginBottom: '30px' }}>
            <h3 style={{ fontWeight: 'bold', marginBottom: '1rem', color: '#fff' }}>MENU</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: '2' }}>
              <li><a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About</a></li>
              <li><a href="#portfolio" style={{ color: '#fff', textDecoration: 'none' }}>Portfolio</a></li>
              <li><a href="#blog" style={{ color: '#fff', textDecoration: 'none' }}>Blog</a></li>
              <li><a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
            </ul>
          </div>
          <div style={{ flex: '1 1 150px', marginBottom: '30px' }}>
            <h3 style={{ fontWeight: 'bold', marginBottom: '1rem', color: '#fff' }}>SERVICE</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: '2' }}>
              <li><a href="#marketing" style={{ color: '#fff', textDecoration: 'none' }}>Marketing</a></li>
              <li><a href="#branding" style={{ color: '#fff', textDecoration: 'none' }}>Branding</a></li>
              <li><a href="#consulting" style={{ color: '#fff', textDecoration: 'none' }}>Consulting</a></li>
              <li><a href="#design" style={{ color: '#fff', textDecoration: 'none' }}>Design</a></li>
            </ul>
          </div>
          <div style={{ flex: '1 1 150px', marginBottom: '30px' }}>
            <h3 style={{ fontWeight: 'bold', marginBottom: '1rem', color: '#fff' }}>SOCIAL</h3>
            <div style={{ display: 'flex', gap: '20px' }}>
              <a href="#" style={{ background: '#f3c94c', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3162b9', fontSize: '1.5rem', textDecoration: 'none' }} aria-label="Facebook">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
              </a>
              <a href="#" style={{ background: '#f3c94c', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#474e8a', fontSize: '1.5rem', textDecoration: 'none' }} aria-label="Twitter">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.015-.633A9.936 9.936 0 0 0 24 4.557z"/></svg>
              </a>
              <a href="#" style={{ background: '#f3c94c', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#474e8a', fontSize: '1.5rem', textDecoration: 'none' }} aria-label="Instagram">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.602.388 3.635 1.355 2.668 2.322 2.41 3.495 2.352 4.772.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.058 1.277.316 2.45 1.283 3.417.967.967 2.14 1.225 3.417 1.283C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.277-.058 2.45-.316 3.417-1.283.967-.967 1.225-2.14 1.283-3.417.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.058-1.277-.316-2.45-1.283-3.417-.967-.967-2.14-1.225-3.417-1.283C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <hr style={{ border: 'none', borderTop: '1px solid #6c72a6', margin: '30px 0 20px 0' }} />
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', fontSize: '1rem', color: '#e0e0e0', paddingBottom: '20px' }}>
          <div style={{ marginBottom: '10px' }}>©20XX Codedesign.ai. All rights reserved</div>
          <div style={{ display: 'flex', gap: '30px' }}>
            <a href="#terms" style={{ color: '#fff', textDecoration: 'none' }}>Terms of Use</a>
            <a href="#privacy" style={{ color: '#fff', textDecoration: 'none' }}>Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
