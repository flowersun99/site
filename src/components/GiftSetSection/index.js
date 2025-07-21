/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Icon from "@mui/material/Icon";

// Custom components
import GiftSetCard from "components/GiftSetCard";

// Images
import naverLogo from "assets/images/presentSet/naverlogo.png";

function GiftSetSection({ 
  title = "명품 선물세트",
  subtitle = "특허 받은 약선 조리법 소중한 분에게 건강함을 선물하세요",
  giftSets,
  layout = "mobile", // "desktop" | "mobile"
  showTitle = true,
  showSubtitle = true,
  showSmartStoreButton = true,
  smartStoreUrl = "https://smartstore.naver.com/geumdayeon",
  smartStoreButtonText = "금다연 네이버 스마트스토어"
}) {
  const getContainerStyle = () => {
    if (layout === "desktop") {
      return {
        maxWidth: "1200px",
        margin: "0 auto",
        p: 4,
      };
    }
    return {
      maxWidth: "600px",
      margin: "0 auto",
      px: 2,
    };
  };

  return (
    <MKBox
      component="section"
      py={layout === "desktop" ? 12 : 1}
      px={1}
      sx={{
        backgroundColor: layout === "desktop" ? "#f8f9fa" : "white",
        minHeight: layout === "desktop" ? "100vh" : "auto",
      }}
    >
      <MKBox
        variant="contained"
        bgColor="white"
        borderRadius={layout === "desktop" ? "xl" : "none"}
        shadow={layout === "desktop" ? "xl" : "none"}
        sx={getContainerStyle()}
      >
        {/* 제목 섹션 */}
        {showTitle && (
          <MKBox textAlign="center" mb={6}>
            <MKTypography
              variant="h2"
              color="dark"
              mb={2}
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: "bold",
              }}
            >
              {title}
            </MKTypography>
            {showSubtitle && subtitle && (
              <MKTypography
                variant="body1"
                color="text"
                sx={{
                  fontSize: { xs: "1.1rem", md: "1.3rem" },
                  lineHeight: 1.6,
                  opacity: 0.8,
                }}
              >
                {subtitle}
              </MKTypography>
            )}
          </MKBox>
        )}

        {/* 선물세트 카드 그리드 */}
        <GiftSetCard giftSets={giftSets} layout={layout} />

        {/* 네이버 스마트스토어 버튼 */}
        {showSmartStoreButton && (
          <MKBox
            component="a"
            href={smartStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              padding: "16px 20px",
              backgroundColor: "white",
              color: "#03C75A",
              borderRadius: "12px",
              textDecoration: "none",
              marginTop: 4,
              border: "2px solid #03C75A",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#03C75A",
                color: "white",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 12px rgba(3, 199, 90, 0.3)",
              },
            }}
          >
            {/* 네이버 로고 */}
            <MKBox
              component="img"
              src={naverLogo}
              alt="네이버"
              sx={{
                width: "24px",
                height: "24px",
                mr: 2,
                objectFit: "contain",
              }}
            />
            <MKTypography
              variant="body1"
              sx={{
                fontWeight: "bold",
                fontSize: "1rem",
                mr: 1,
              }}
            >
              {smartStoreButtonText}
            </MKTypography>
            <Icon>arrow_forward</Icon>
          </MKBox>
        )}
      </MKBox>
    </MKBox>
  );
}

GiftSetSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
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
  showTitle: PropTypes.bool,
  showSubtitle: PropTypes.bool,
  showSmartStoreButton: PropTypes.bool,
  smartStoreUrl: PropTypes.string,
  smartStoreButtonText: PropTypes.string,
};

export default GiftSetSection; 