/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function HeroSection({ image, title, subtitle, imageHeight = "450px" }) {
  return (
    <MKBox
      sx={{
        backgroundColor: "white",
      }}
    >
      {/* 이미지 (히어로 섹션) */}
      <MKBox
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: imageHeight, md: "200px" },
          overflow: "hidden",
        }}
      >
        <MKBox
          component="img"
          src={image}
          alt={title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />

        {/* Shadow 오버레이 */}
        <MKBox
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0.3) 100%)",
            zIndex: 1,
          }}
        />
      </MKBox>

      {/* 제목 (사진 밑에) */}
      <MKBox sx={{ textAlign: "center", mb: 1, px: 3, pt: 4 }}>
        <MKTypography
          variant="h1"
          color="dark"
          sx={{
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            fontWeight: "bold",
            mb: 1,
          }}
        >
          {title}
        </MKTypography>
        {subtitle && (
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
    </MKBox>
  );
}

HeroSection.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  imageHeight: PropTypes.string,
};

export default HeroSection; 