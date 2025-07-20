/* eslint-disable prettier/prettier */
import { useState } from "react";
import PropTypes from "prop-types";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";

// Custom components
import MobileMenuOverlay from "components/MobileMenuOverlay";

function PageLayout({ children, transparent = false, light = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <MKBox>
      <DefaultNavbar
        routes={routes}
        transparent={transparent}
        light={light}
        sticky
        onMobileMenuToggle={handleMobileMenuToggle}
      />

      <MobileMenuOverlay isOpen={mobileMenuOpen} onClose={closeMobileMenu} />

      {children}

      <DefaultFooter />
    </MKBox>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  transparent: PropTypes.bool,
  light: PropTypes.bool,
};

export default PageLayout; 