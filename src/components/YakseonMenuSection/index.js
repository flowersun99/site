/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Grid from "@mui/material/Grid";
import YakseonMenuItem from "components/YakseonMenuItem";

function YakseonMenuSection({ title, menuItems }) {
  const containerStyles = {
    padding: { xs: "40px 30px", md: "50px 60px" },
    maxWidth: "1200px",
    width: "90%",
    zIndex: 2,
    borderRadius: "12px",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    margin: { xs: "20px 0", md: 0 },
  };

  const titleStyles = {
    fontSize: { xs: "1.2rem", md: "2rem" },
    fontWeight: "bold",
  };

  return (
    <MKBox sx={containerStyles}>
      <MKTypography
        variant="h2"
        color="white"
        textAlign="center"
        mb={4}
        style={titleStyles}
      >
        {title}
      </MKTypography>

      <Grid container spacing={3}>
        {menuItems.map((item) => (
          <Grid item xs={12} md={6} key={item.id}>
            <YakseonMenuItem item={item} />
          </Grid>
        ))}
      </Grid>
    </MKBox>
  );
}

YakseonMenuSection.propTypes = {
  title: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      englishName: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,

};

export default YakseonMenuSection; 