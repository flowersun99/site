/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid";

// Images
import naverLogo from "assets/images/mobile_location/naverlogo.png";
import kakaoLogo from "assets/images/mobile_location/kakologo.png";
import googleLogo from "assets/images/mobile_location/googlelogo.png";

function LocationInfo({ 
  title = "금다연 오시는 길",
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
      links: {
        naver: "https://naver.me/IFgqBfu9",
        kakao: "https://place.map.kakao.com/8238221"
      }
    },
    {
      title: "제 2주차장",
      description: "대아주차장 (대형 SUV / 평일 6시 이후, 주말 상시)",
      iconColor: "#28a745",
      links: {
        naver: "https://naver.me/GDam2Xve",
        kakao: "https://kko.kakao.com/FRYyX-KoLT"
      }
    },
    {
      title: "제 3주차장",
      description: "상무주차장 (대형 SUV / 상시 가능)",
      iconColor: "#dc3545",
      links: {
        naver: "https://naver.me/FPUXEP5y",
        kakao: "https://kko.kakao.com/2FRPBMiWsn"
      }
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
                {/* 구글 지도 iframe */}
        <MKBox
          sx={{
            mb: 4,
            borderRadius: "12px",
            overflow: "hidden",
            shadow: "lg",
            position: "relative",
            width: "100%",
            height: "100%",
            border: "2px solid #e9ecef",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.0765104876596!2d126.84791537728286!3d35.15471257276185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357189463dc0c66d%3A0xb61e913f2d15e736!2z6riI64uk7Jew!5e0!3m2!1sko!2skr!4v1753080287558!5m2!1sko!2skr"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
            title="금다연 위치"
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
        <MKBox sx={{ mb: 6 }}>
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
                    padding: "16px",
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
                  <MKBox
                    component="img"
                    src={
                      button.name === "네이버 지도" ? naverLogo :
                      button.name === "구글 지도" ? googleLogo :
                      kakaoLogo
                    }
                    alt={button.name}
                    sx={{
                      width: "32px",
                      height: "32px",
                      objectFit: "contain",
                      mb: 1,
                    }}
                  />
                  <MKTypography
                    variant="body1"
                    color="dark"
                    sx={{
                      fontSize: "0.85rem",
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
            mt: 4,
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
            <MKBox key={index} sx={{ mb: 3 }}>
              <MKBox sx={{ mb: 2 }}>
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
                {/* 주차장 링크 버튼들 */}
                <MKBox sx={{ display: "flex", gap: 1, ml: 3 }}>
                  <MKBox
                    component="a"
                    href={parking.links.naver}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "28px",
                      height: "28px",
                      backgroundColor: "white",
                      borderRadius: "6px",
                      textDecoration: "none",
                      border: "1px solid #e0e0e0",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-1px)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      },
                    }}
                  >
                    <MKBox
                      component="img"
                      src={naverLogo}
                      alt="네이버"
                      sx={{
                        width: "16px",
                        height: "16px",
                        objectFit: "contain",
                      }}
                    />
                  </MKBox>
                  <MKBox
                    component="a"
                    href={parking.links.kakao}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "28px",
                      height: "28px",
                      backgroundColor: "white",
                      borderRadius: "6px",
                      textDecoration: "none",
                      border: "1px solid #e0e0e0",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-1px)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      },
                    }}
                  >
                    <MKBox
                      component="img"
                      src={kakaoLogo}
                      alt="카카오"
                      sx={{
                        width: "16px",
                        height: "16px",
                        objectFit: "contain",
                      }}
                    />
                  </MKBox>
                </MKBox>
              </MKBox>
              <MKTypography
                variant="body1"
                color="text"
                sx={{
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                  ml: 3,
                  mt: 1,
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
                borderRadius: "12px",
                overflow: "hidden",
                border: "2px solid #e9ecef",
                height: "450px",
                position: "relative",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.076334632167!2d126.8479153762408!3d35.15471695871648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357189463dc0c66d%3A0xb61e913f2d15e736!2z6riI64uk7Jew!5e0!3m2!1sko!2skr!4v1753077229309!5m2!1sko!2skr"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  transform: "scale(1.1)",
                  transformOrigin: "center center",
                }}
                title="금다연 위치"
              />
            </MKBox>
          </Grid>

          {/* 길안내 섹션 */}
          <Grid item xs={12} md={4}>
            <MKBox sx={{ height: "400px", display: "flex", flexDirection: "column" }}>
              {/* 위치 정보 텍스트 */}
              <MKBox
                sx={{
                  mb: 3,
                  p: 3,
                  backgroundColor: "#f8f9fa",
                  borderRadius: "12px",
                  border: "1px solid #e9ecef",
                  flex: "0 0 auto",
                }}
              >
                <MKTypography
                  variant="body2"
                  color="dark"
                  sx={{
                    fontWeight: 500,
                    lineHeight: 1.6,
                    textAlign: "center",
                    fontSize: "0.9rem",
                  }}
                >
                  광주광역시청과 직선거리 500M
                  <br />
                  주변 특급호텔, 비지니스호텔과 200M 이내에 위치
                  <br />
                  광주상무지구 중심상업지역에 자리하여
                  <br />
                  고속도로 및 기타지역에서 사통팔달 접근이 용이함.
                </MKTypography>
              </MKBox>

              {/* 길안내 버튼들 */}
              <MKBox sx={{ flex: "1 1 auto" }}>
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
                    backgroundColor: "white",
                    color: "dark",
                    borderRadius: "12px",
                    textDecoration: "none",
                    marginBottom: "12px",
                    border: "2px solid #e9ecef",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      borderColor: button.color,
                    },
                  }}
                >
                  <MKBox sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <MKBox
                      component="img"
                      src={
                        button.name === "네이버 지도" ? naverLogo :
                        button.name === "구글 지도" ? googleLogo :
                        kakaoLogo
                      }
                      alt={button.name}
                      sx={{
                        width: "24px",
                        height: "24px",
                        objectFit: "contain",
                      }}
                    />
                    <MKTypography
                      variant="body1"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "1rem",
                      }}
                    >
                      {button.name}
                    </MKTypography>
                  </MKBox>
                  <Icon sx={{ color: button.color }}>arrow_forward</Icon>
                </MKBox>
              ))}
            </MKBox>
          </MKBox>
        </Grid>
        </Grid>

        

        {/* 주차정보 섹션 */}
        <MKBox>
          <MKTypography
            variant="h5"
            textAlign="center"
            color="dark"
            mb={4}
            sx={{
              mt: 14,
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
                    display: "flex",
                    flexDirection: "column",
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
                        flexGrow: 1,
                      }}
                    >
                      {parking.title}
                    </MKTypography>
                    {/* 주차장 링크 버튼들 */}
                    <MKBox sx={{ display: "flex", gap: 1 }}>
                      <MKBox
                        component="a"
                        href={parking.links.naver}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "32px",
                          height: "32px",
                          backgroundColor: "white",
                          borderRadius: "6px",
                          textDecoration: "none",
                          border: "1px solid #e0e0e0",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-1px)",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                          },
                        }}
                      >
                        <MKBox
                          component="img"
                          src={naverLogo}
                          alt="네이버"
                          sx={{
                            width: "18px",
                            height: "18px",
                            objectFit: "contain",
                          }}
                        />
                      </MKBox>
                      <MKBox
                        component="a"
                        href={parking.links.kakao}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "32px",
                          height: "32px",
                          backgroundColor: "white",
                          borderRadius: "6px",
                          textDecoration: "none",
                          border: "1px solid #e0e0e0",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-1px)",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                          },
                        }}
                      >
                        <MKBox
                          component="img"
                          src={kakaoLogo}
                          alt="카카오"
                          sx={{
                            width: "18px",
                            height: "18px",
                            objectFit: "contain",
                          }}
                        />
                      </MKBox>
                    </MKBox>
                  </MKBox>
                  <MKTypography
                    variant="body1"
                    color="text"
                    sx={{
                      lineHeight: 1.6,
                      fontSize: "0.95rem",
                      flexGrow: 1,
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
      links: PropTypes.shape({
        naver: PropTypes.string.isRequired,
        kakao: PropTypes.string.isRequired,
      }),
    })
  ),
  address: PropTypes.shape({
    main: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
    note: PropTypes.string,
  }),
};

export default LocationInfo; 