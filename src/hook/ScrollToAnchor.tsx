import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToAnchor = () => {
  const location = useLocation();
  const lastHash = useRef('');
  const navbarHeight = 110;

  useEffect(() => {
    if (location.hash.length > 0) {
      lastHash.current = location.hash.slice(1);
    }

    if (
      lastHash.current.length > 0 &&
      document.getElementById(lastHash.current) != null
    ) {
      setTimeout(() => {
        const element = document.getElementById(lastHash.current);
        if (element) {
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - navbarHeight,
            behavior: 'smooth',
          });
        }
      }, 100);
    }
  }, [location]);

  return { location, lastHash };
};

export default ScrollToAnchor;
