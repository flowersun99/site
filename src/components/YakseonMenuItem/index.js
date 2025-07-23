/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function YakseonMenuItem({ item }) {
  const mobileStyles = {
    container: {
      mb: 4,
      borderRadius: "12px",
      padding: "20px",
      border: "1px solid rgba(255, 255, 255, 0.2)",
    },
    imageContainer: {
      width: "100%",
      height: "200px",
      borderRadius: "8px",
      overflow: "hidden",
      mb: 2,
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
    },
    header: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      mb: 1,
    },
    name: {
      fontSize: "1.3rem",
      mb: 0.5,
    },
    englishName: {
      fontSize: "0.9rem",
    },
    divider: {
      width: "100%",
      height: "1px",
      background: "repeating-linear-gradient(to right, white 0, white 4px, transparent 4px, transparent 8px)",
      mb: 1,
    },
    price: {
      fontSize: "1.2rem",
      mb: 1,
    },
    description: {
      fontSize: "0.9rem",
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