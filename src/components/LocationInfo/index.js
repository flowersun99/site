/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid";

function LocationInfo({ 
  title = "금다연 오시는 길",
  mapImage,
  showTitle = true,
  layout = "desktop", // "desktop" | "mobile"
  navigationButtons = [
    {
      name: "네이버 지도",
      icon: "map",
      color: "#03C75A",
      href: "https://naver.me/IFgqBfu9",
    },
    {
      name: "구글 지도",
      icon: "location_on",
      color: "#4285F4",
      href: "https://maps.app.goo.gl/P2iHJpjQjmWEuUcp6",
    },
    {
      name: "카카오맵",
      icon: "place",
      color: "#FEE500",
      href: "https://place.map.kakao.com/8238221",
    },
  ],
  parkingInfo = [
    {
      title: "제 1주차장",
      description: "본 건물 1층 (중, 소형 / 발렛서비스)",
      iconColor: "#007bff",
    },
    {
      title: "제 2주차장",
      description: "대아주차장 (대형 SUV / 평일 6시 이후, 주말 상시)",
      iconColor: "#28a745",
    },
    {
      title: "제 3주차장",
      description: "상무주차장 (대형 SUV / 상시 가능)",
      iconColor: "#dc3545",
    },
  ],
  address = {
    main: "광주 서구 상무연하로 72",
    detail: "골든유토피아 202호",
    note: "* 상무지구역 1번 출구에서 도보 5분",
  }
}) {
  if (layout === "mobile") {
    return (
      <MKBox
        sx={{
          maxWidth: "600px",
          margin: "0 auto",
          px: 2,
        }}
      >
        {/* 지도 이미지 */}
        <MKBox
          sx={{
            mb: 4,
            borderRadius: "12px",
            overflow: "hidden",
            shadow: "lg",
          }}
        >
          <MKBox
            component="img"
            src={mapImage}
            alt={title}
            sx={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
            }}
          />
        </MKBox>

        {/* 주소 정보 */}
        <MKBox
          sx={{
            mb: 4,
            p: 3,
            borderRadius: "12px",
            bgColor: "#f8f9fa",
            border: "1px solid #e9ecef",
          }}
        >
          <MKTypography
            variant="h5"
            color="dark"
            sx={{
              fontSize: { xs: "1.3rem", md: "1.5rem" },
              fontWeight: "bold",
              mb: 2,
            }}
          >
            주소
          </MKTypography>
          <MKTypography
            variant="body1"
            color="text"
            sx={{
              fontSize: "1rem",
              lineHeight: 1.6,
              mb: 1,
            }}
          >
            {address.main}
          </MKTypography>
          <MKTypography
            variant="body1"
            color="text"
            sx={{
              fontSize: "1rem",
              lineHeight: 1.6,
              mb: 2,
            }}
          >
            {address.detail}
          </MKTypography>
          <MKTypography
            variant="body2"
            color="text"
            sx={{
              fontSize: "0.9rem",
              opacity: 0.7,
            }}
          >
            {address.note}
          </MKTypography>
        </MKBox>

        {/* 네비게이션 버튼들 */}
        <MKBox sx={{ mb: 4 }}>
          <MKTypography
            variant="h5"
            color="dark"
            sx={{
              fontSize: { xs: "1.3rem", md: "1.5rem" },
              fontWeight: "bold",
              mb: 3,
              textAlign: "center",
            }}
          >
            길찾기
          </MKTypography>
          <Grid container spacing={2}>
            {navigationButtons.map((button, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <MKBox
                  component="a"
                  href={button.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px",
                    backgroundColor: "white",
                    borderRadius: "12px",
                    textDecoration: "none",
                    border: "2px solid #e9ecef",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                      borderColor: button.color,
                    },
                  }}
                >
                  <Icon
                    sx={{
                      fontSize: "2.5rem",
                      color: button.color,
                      mb: 1,
                    }}
                  >
                    {button.icon}
                  </Icon>
                  <MKTypography
                    variant="body1"
                    color="dark"
                    sx={{
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {button.name}
                  </MKTypography>
                </MKBox>
              </Grid>
            ))}
          </Grid>
        </MKBox>

        {/* 주차 정보 */}
        <MKBox
          sx={{
            p: 3,
            borderRadius: "12px",
            bgColor: "#f8f9fa",
            border: "1px solid #e9ecef",
          }}
        >
          <MKTypography
            variant="h5"
            color="dark"
            sx={{
              fontSize: { xs: "1.3rem", md: "1.5rem" },
              fontWeight: "bold",
              mb: 2,
            }}
          >
            주차 안내
          </MKTypography>
          {parkingInfo.map((parking, index) => (
            <MKBox key={index} sx={{ mb: 2 }}>
              <MKBox display="flex" alignItems="center" mb={1}>
                <Icon sx={{ color: parking.iconColor, mr: 1, fontSize: "1.2rem" }}>
                  local_parking
                </Icon>
                <MKTypography
                  variant="h6"
                  color="dark"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                  }}
                >
                  {parking.title}
                </MKTypography>
              </MKBox>
              <MKTypography
                variant="body1"
                color="text"
                sx={{
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                  ml: 3,
                }}
              >
                {parking.description}
              </MKTypography>
            </MKBox>
          ))}
        </MKBox>
      </MKBox>
    );
  }

  // Desktop layout
  return (
    <MKBox
      component="section"
      py={10}
      width="100%"
      px={1}
      sx={{
        backgroundColor: "white",
      }}
    >
      <MKBox
        variant="contained"
        bgColor="white"
        borderRadius="xl"
        shadow="xl"
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          p: 4,
        }}
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
          </MKBox>
        )}

        {/* 지도와 길안내 섹션 */}
        <Grid container spacing={4} mb={4}>
          {/* 지도 영역 */}
          <Grid item xs={12} md={8}>
            <MKBox
              sx={{
                width: "100%",
                height: "300px",
                borderRadius: "12px",
                overflow: "hidden",
                border: "2px solid #e9ecef",
              }}
            >
              <MKBox
                component="img"
                src={mapImage}
                alt={title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </MKBox>
          </Grid>

          {/* 길안내 버튼들 */}
          <Grid item xs={12} md={4}>
            <MKBox>
              <MKTypography
                variant="h5"
                color="dark"
                mb={3}
                sx={{
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                  fontWeight: "bold",
                }}
              >
                길안내
              </MKTypography>

              {navigationButtons.map((button, index) => (
                <MKBox
                  key={index}
                  component="a"
                  href={button.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    padding: "16px 20px",
                    backgroundColor: button.color,
                    color: button.color === "#FEE500" ? "#3C1E1E" : "white",
                    borderRadius: "12px",
                    textDecoration: "none",
                    marginBottom: "12px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: button.color === "#03C75A" ? "#02A94A" : 
                                   button.color === "#4285F4" ? "#3367D6" : "#FFD700",
                      transform: "translateY(-2px)",
                      boxShadow: `0 4px 12px ${button.color}40`,
                    },
                  }}
                >
                  <MKTypography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                  >
                    {button.name}
                  </MKTypography>
                  <Icon>arrow_forward</Icon>
                </MKBox>
              ))}
            </MKBox>
          </Grid>
        </Grid>

        {/* 주차정보 섹션 */}
        <MKBox>
          <MKTypography
            variant="h5"
            color="dark"
            mb={3}
            sx={{
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              fontWeight: "bold",
            }}
          >
            주차정보
          </MKTypography>

          <Grid container spacing={3}>
            {parkingInfo.map((parking, index) => (
              <Grid item xs={12} md={4} key={index}>
                <MKBox
                  sx={{
                    padding: "20px",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "12px",
                    border: "1px solid #e9ecef",
                    height: "100%",
                  }}
                >
                  <MKBox display="flex" alignItems="center" mb={2}>
                    <Icon sx={{ color: parking.iconColor, mr: 1 }}>local_parking</Icon>
                    <MKTypography
                      variant="h6"
                      color="dark"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "1.1rem",
                      }}
                    >
                      {parking.title}
                    </MKTypography>
                  </MKBox>
                  <MKTypography
                    variant="body1"
                    color="text"
                    sx={{
                      lineHeight: 1.6,
                      fontSize: "0.95rem",
                    }}
                  >
                    {parking.description}
                  </MKTypography>
                </MKBox>
              </Grid>
            ))}
          </Grid>
        </MKBox>
      </MKBox>
    </MKBox>
  );
}

LocationInfo.propTypes = {
  title: PropTypes.string,
  mapImage: PropTypes.string.isRequired,
  showTitle: PropTypes.bool,
  layout: PropTypes.oneOf(["desktop", "mobile"]),
  navigationButtons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
  parkingInfo: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      iconColor: PropTypes.string.isRequired,
    })
  ),
  address: PropTypes.shape({
    main: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
    note: PropTypes.string,
  }),
};

export default LocationInfo; 