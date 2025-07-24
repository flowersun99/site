/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function YakseonMenuItem({ item }) {
  const mobileStyles = {
    container: {
      mb: 4,
      borderRadius: "12px",
      padding: { xs: "20px", sm: "15px", md: "20px" },
      border: "1px solid rgba(255, 255, 255, 0.2)",
      height: { xs: "auto", sm: "auto", md: "320px" },
      display: "flex",
      flexDirection: "column",
    },
    imageContainer: {
      width: "100%",
      height: { xs: "200px", sm: "180px", md: "140px" },
      borderRadius: "8px",
      overflow: "hidden",
      mb: { xs: 2, sm: 1.5, md: 1 },
      flexShrink: 0,
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      flex: 1,
    },
    header: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      mb: { xs: 1, sm: 0.75, md: 0.5 },
    },
    name: {
      fontSize: { xs: "1.3rem", sm: "1.1rem", md: "1.2rem" },
      mb: 0.5,
    },
    englishName: {
      fontSize: { xs: "0.9rem", sm: "0.8rem", md: "0.9rem" },
    },
    divider: {
      width: "100%",
      height: "1px",
      background: "repeating-linear-gradient(to right, white 0, white 4px, transparent 4px, transparent 8px)",
      mb: { xs: 1, sm: 0.75, md: 0.5 },
    },
    price: {
      fontSize: { xs: "1.2rem", sm: "1rem", md: "1.1rem" },
      mb: { xs: 1, sm: 0.75, md: 0.5 },
    },
    description: {
      fontSize: { xs: "0.9rem", sm: "0.8rem", md: "0.9rem" },
      opacity: 0.8,
    },
  };



  return (
    <MKBox sx={mobileStyles.container}>
      <MKBox sx={mobileStyles.imageContainer}>
        <MKBox
          component="img"
          src={item.image}
          alt={item.name}
          sx={mobileStyles.image}
        />
      </MKBox>
      <MKBox sx={mobileStyles.content}>
        <MKBox sx={mobileStyles.header}>
          <MKTypography
            variant="h5"
            color="white"
            fontWeight="bold"
            style={mobileStyles.name}
          >
            {item.name}
          </MKTypography>
          <MKTypography
            variant="body2"
            color="white"
            opacity={0.8}
            style={mobileStyles.englishName}
          >
            {item.englishName}
          </MKTypography>
        </MKBox>
        <MKBox sx={mobileStyles.divider} />
        <MKTypography
          variant="h5"
          color="white"
          fontWeight="bold"
          style={mobileStyles.price}
        >
          {item.price.split('\n').map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </MKTypography>
        {item.description && (
          <MKTypography
            variant="body2"
            color="white"
            style={mobileStyles.description}
          >
            {item.description}
          </MKTypography>
        )}
      </MKBox>
    </MKBox>
  );
}

YakseonMenuItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    englishName: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
  }).isRequired,

};

export default YakseonMenuItem; 