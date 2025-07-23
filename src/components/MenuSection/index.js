/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MenuItem from "components/MenuItem";

function MenuSection({ title, menuItems, isMobile = false }) {
  const mobileContainerStyles = {
    padding: { xs: "40px 30px", md: "50px 60px" },
    maxWidth: "800px",
    width: "90%",
    zIndex: 2,
    display: { xs: "block", md: "none" },
    border: { xs: "2px solid #000", md: "none" },
    borderRadius: "12px",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    margin: { xs: "60px 0", md: 0 },
  };

  const desktopContainerStyles = {
    padding: "50px 60px",
    maxWidth: "800px",
    width: "90%",
    zIndex: 2,
    display: { xs: "none", md: "block" },
  };

  const titleStyles = {
    fontSize: isMobile ? "2rem" : "2.5rem",
    fontWeight: "bold",
  };

  const containerStyles = isMobile ? mobileContainerStyles : desktopContainerStyles;

  return (
    <MKBox sx={containerStyles}>
      <MKTypography
        variant="h2"
        color="white"
        textAlign="center"
        mb={4}
        sx={titleStyles}
        style={{
          fontSize: "2.5rem",
        }}
      >
        {title}
      </MKTypography>

      <MKBox>
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} isMobile={isMobile} />
        ))}
      </MKBox>
    </MKBox>
  );
}

MenuSection.propTypes = {
  title: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      englishName: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
  isMobile: PropTypes.bool,
};

export default MenuSection; 