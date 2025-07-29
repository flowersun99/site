/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import { useMediaQuery } from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Grid from "@mui/material/Grid";
import YakseonMenuItem from "components/YakseonMenuItem";

function YakseonMenuSection({ title, subtitle, menuItems }) {
  // 1350px 이상에서 2개씩 보이도록 설정
  const isLargeScreen = useMediaQuery("(min-width:1350px)");
  const isMediumScreen = useMediaQuery("(min-width:900px)");

  const containerStyles = {
    padding: { xs: "40px 30px", sm: "30px 20px", md: "20px 15px" },
    maxWidth: { xs: "1500px", sm: "1400px", md: "1400px" },
    width: { xs: "85%", sm: "90%", md: "90%" },
    zIndex: 2,
    borderRadius: "12px",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    margin: { xs: "20px 0", sm: "15px 0", md: 0 },
  };

  // 화면 크기에 따른 Grid 설정
  const getGridSize = () => {
    if (isLargeScreen) {
      return 3; // 1350px 이상: 2개씩
    } else if (isMediumScreen) {
      return 6; // 900px 이상: 2개씩
    } else {
      return 12; // 모바일: 1개씩
    }
  };

  return (
    <MKBox sx={containerStyles}>
      <MKTypography
        variant="h2"
        color="white"
        textAlign="center"
        mb={2}
        sx={{ fontSize: { xs: "1.7rem", sm: "1.5rem", md: "1.6rem" } }}
      >
        {title}
      </MKTypography>
      
      {subtitle && (
        <MKTypography
          variant="body1"
          color="white"
          textAlign="center"
          mb={3}
          sx={{ 
            fontSize: { xs: "0.9rem", sm: "0.85rem", md: "0.9rem" },
            opacity: 0.8
          }}
        >
          {subtitle}
        </MKTypography>
      )}

      <Grid container spacing={2}>
        {menuItems.map((item) => (
          <Grid item xs={12} md={getGridSize()} key={item.id}>
            <YakseonMenuItem item={item} />
          </Grid>
        ))}
      </Grid>
    </MKBox>
  );
}

YakseonMenuSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
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