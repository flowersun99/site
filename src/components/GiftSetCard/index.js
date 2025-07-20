/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Grid from "@mui/material/Grid";

function GiftSetCard({ giftSets, layout = "mobile" }) {
  const getGridSize = () => {
    if (layout === "desktop") {
      return { xs: 12, sm: 6, md: 4 };
    }
    return { xs: 12, sm: 6 };
  };

  return (
    <Grid container spacing={3}>
      {giftSets.map((item, index) => (
        <Grid item {...getGridSize()} key={index}>
          <MKBox
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
              },
              borderRadius: "12px",
              overflow: "hidden",
              bgColor: "white",
              shadow: "lg",
            }}
          >
            {/* 이미지 */}
            <MKBox
              component="img"
              src={item.image}
              alt={item.title}
              sx={{
                width: "100%",
                height: "200px",
                objectFit: "contain",
                backgroundColor: "#f8f9fa",
              }}
            />

            {/* 카드 내용 */}
            <MKBox sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
              {/* 제목 */}
              <MKTypography
                variant="h6"
                color="dark"
                mb={2}
                sx={{
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  fontWeight: "bold",
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </MKTypography>

              {/* 가격 정보 */}
              <MKBox sx={{ mt: "auto" }}>
                {item.originalPrice && (
                  <MKTypography
                    variant="body2"
                    color="text"
                    sx={{
                      textDecoration: "line-through",
                      opacity: 0.6,
                      fontSize: "0.8rem",
                    }}
                  >
                    {item.originalPrice}
                  </MKTypography>
                )}
                <MKBox display="flex" alignItems="center" gap={1}>
                  {item.discount && (
                    <MKTypography
                      variant="body2"
                      color="error"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "0.9rem",
                      }}
                    >
                      {item.discount}
                    </MKTypography>
                  )}
                  <MKTypography
                    variant="h6"
                    color="dark"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                    }}
                  >
                    {item.price}
                  </MKTypography>
                </MKBox>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      ))}
    </Grid>
  );
}

GiftSetCard.propTypes = {
  giftSets: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      originalPrice: PropTypes.string,
      discount: PropTypes.string,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
  layout: PropTypes.oneOf(["desktop", "mobile"]),
};

export default GiftSetCard; 