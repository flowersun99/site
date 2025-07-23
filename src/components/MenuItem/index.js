/* eslint-disable prettier/prettier */

import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function MenuItem({ item, isMobile = false }) {
  const mobileStyles = {
    container: {
      mb: 3,
    },
    content: {
      display: "flex",
      flexDirection: "column",
    },
    header: {
      display: "flex",
      alignItems: "center",
      mb: 1,
    },
    name: {
      fontSize: "1.3rem",
      mr: 1,
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
    },
  };

  const desktopStyles = {
    container: {
      mb: 3,
    },
    content: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    leftSection: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    name: {
      fontSize: "1.5rem",
    },
    englishName: {
      fontSize: "0.8rem",
      ml: 1,
    },
    divider: {
      flex: 1,
      height: "1px",
      background: "repeating-linear-gradient(to right, white 0, white 4px, transparent 4px, transparent 8px)",
    },
    dividerContainer: {
      display: "flex",
      alignItems: "center",
      flex: 1,
      mx: 2,
    },
    price: {
      fontSize: "1.5rem",
    },
  };

  const styles = isMobile ? mobileStyles : desktopStyles;

  if (isMobile) {
    return (
      <MKBox sx={styles.container}>
        <MKBox sx={styles.content}>
          <MKBox sx={styles.header}>
            <MKTypography
              variant="h5"
              color="white"
              fontWeight="bold"
              sx={styles.name}
              style={{
                fontSize: "1.3rem",
                mr: 1,
              }}
            >
              {item.name}
            </MKTypography>
            <MKTypography
              variant="body2"
              color="white"
              opacity={0.8}
              sx={styles.englishName}
              style={{
                fontSize: "0.9rem",
              }}
            >
              {item.englishName}
            </MKTypography>
          </MKBox>
          <MKBox sx={styles.divider} />
          <MKTypography
            variant="h5"
            color="white"
            fontWeight="bold"
            sx={styles.price}
            style={{
              fontSize: "1.2rem",
            }}
          >
            {item.price}
          </MKTypography>
        </MKBox>
      </MKBox>
    );
  }

  return (
    <MKBox sx={styles.container}>
      <MKBox sx={styles.content}>
        <MKBox sx={styles.leftSection}>
          <MKTypography
            variant="h5"
            color="white"
            fontWeight="bold"
            sx={styles.name}
            style={{
              fontSize: "1.5rem",
            }}
          >
            {item.name}
          </MKTypography>
          <MKTypography
            variant="body2"
            color="white"
            opacity={0.8}
            sx={styles.englishName}
            style={{
              fontSize: "0.8rem",
              ml: 1,
            }}
          >
            {item.englishName}
          </MKTypography>
        </MKBox>
        <MKBox sx={styles.dividerContainer}>
          <MKBox sx={styles.divider} />
        </MKBox>
        <MKTypography
          variant="h5"
          color="white"
          fontWeight="bold"
          sx={styles.price}
          style={{
            fontSize: "1.5rem",
          }}
        >
          {item.price}
        </MKTypography>
      </MKBox>
    </MKBox>
  );
}

MenuItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    englishName: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  isMobile: PropTypes.bool,
};

export default MenuItem; 