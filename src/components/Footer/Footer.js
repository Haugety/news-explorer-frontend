import './Footer.css';
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; 2020 Project, Powered by News API</p>
      <nav className="footer__nav-container">
        <a href="/" className="footer__link">Главная</a>
        <a href="https://praktikum.yandex.ru/" target="_blank" rel="noreferrer" className="footer__link">Яндекс.Практикум</a>
        <div className="footer__favicon-group">
          <a href="https://github.com/Haugety" target="_blank" rel="noreferrer" className="footer__favicon-link">
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.9998 0.894714C5.41678 0.894714 0.894531 5.42316 0.894531 11C0.894531 15.4664 3.7915 19.2504 7.80507 20.5904C8.30754 20.6834 8.49364 20.3732 8.49364 20.1003C8.49364 19.8584 8.48744 19.2256 8.48123 18.382C5.67111 18.9899 5.07559 17.0296 5.07559 17.0296C4.61654 15.8634 3.95278 15.5532 3.95278 15.5532C3.03469 14.9267 4.02102 14.9391 4.02102 14.9391C5.03217 15.0135 5.57186 15.9813 5.57186 15.9813C6.47135 17.5259 7.93534 17.0793 8.51225 16.8187C8.6053 16.1674 8.86584 15.7207 9.15119 15.4664C6.90558 15.2121 4.54831 14.3436 4.54831 10.4727C4.54831 9.36849 4.93912 8.46901 5.59047 7.76183C5.48501 7.50749 5.13762 6.47773 5.68972 5.08818C5.68972 5.08818 6.53958 4.81523 8.46882 6.12414C9.27526 5.90082 10.1375 5.78916 10.9998 5.78296C11.8559 5.78916 12.7243 5.90082 13.5308 6.12414C15.46 4.81523 16.3099 5.08818 16.3099 5.08818C16.862 6.47773 16.5146 7.50749 16.4091 7.76183C17.0543 8.46901 17.4451 9.36849 17.4451 10.4727C17.4451 14.356 15.0816 15.2059 12.8298 15.4602C13.1896 15.7704 13.5184 16.3907 13.5184 17.3336C13.5184 18.6859 13.5059 19.7715 13.5059 20.1065C13.5059 20.3794 13.6858 20.6896 14.2007 20.5904C18.2143 19.2504 21.1051 15.4664 21.1051 11.0062C21.1051 5.42316 16.5828 0.894714 10.9998 0.894714Z" fill="#191717" />
            </svg>
          </a>
          <a href="https://www.facebook.com/stas.haugety" target="_blank" rel="noreferrer" className="footer__favicon-link">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.8958 0H1.10417C0.494167 0 0 0.494167 0 1.10417V18.8967C0 19.5058 0.494167 20 1.10417 20H10.6833V12.255H8.07667V9.23667H10.6833V7.01083C10.6833 4.4275 12.2608 3.02083 14.5658 3.02083C15.67 3.02083 16.6183 3.10333 16.895 3.14V5.84L15.2967 5.84083C14.0433 5.84083 13.8008 6.43667 13.8008 7.31V9.2375H16.79L16.4008 12.2558H13.8008V20H18.8975C19.5058 20 20 19.5058 20 18.8958V1.10417C20 0.494167 19.5058 0 18.8958 0V0Z" fill="black" />
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;