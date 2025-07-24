/* eslint-disable prettier/prettier */

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { useState } from "react";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import routes from "routes";
import bgImage from "assets/images/bg-presentation.png";
import blacklogo from "assets/images/blacklogo.png";
import chalim3 from "assets/images/chalim3.png";
import room1 from "assets/images/room1.jpg";
import room2 from "assets/images/room2.jpg";
import presentFirst from "assets/images/presentSet/first.jpg";
import presentSecond from "assets/images/presentSet/second.jpg";
import presentThird from "assets/images/presentSet/third.jpg";
import presentFour from "assets/images/presentSet/four.jpg";
import presentFive from "assets/images/presentSet/five.jpg";
import presentSix from "assets/images/presentSet/six.jpg";

import LocationInfo from "components/LocationInfo";
import GiftSetSection from "components/GiftSetSection";
import MenuCardGrid from "components/MenuCardGrid";
import MenuSection from "components/MenuSection";
import YakseonMenuSection from "components/YakseonMenuSection";
import { menuItems, yakseonMenuItems } from "data/menuData";
import sliceOne from "assets/images/slice/one.jpg";
import sliceTwo from "assets/images/slice/two.jpg";
import sliceThree from "assets/images/slice/three.jpg";
import sliceFour from "assets/images/slice/four.jpg";
import sliceFive from "assets/images/slice/five.jpg";
import sliceSix from "assets/images/slice/six.jpg";
import sliceSeven from "assets/images/slice/seven.jpg";
import lunchmenu1 from "assets/images/lunchmenu/lunchmenu1.jpg";
import lunchmenu2 from "assets/images/lunchmenu/lunchmenu2.jpg";
import lunchmenu3 from "assets/images/lunchmenu/lunchmenu3.png";




function Presentation() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sliceImages = [sliceOne, sliceTwo, sliceThree, sliceFour, sliceFive, sliceSix, sliceSeven];

  const giftSets = [
    {
      title: "영광 법성포 보리굴비 선물세트",
      image: presentFirst,
      originalPrice: "210,000원",
      discount: "64%",
      price: "75,000원",
    },
    {
      title: "금다연 맛보장 배추김치 5kg",
      image: presentSecond,
      price: "75,000원",
    },
    {
      title: "[추천상품] 고추장굴비1구 + 고추장황태1구 선물세트",
      image: presentThird,
      originalPrice: "210,000원",
      discount: "64%",
      price: "75,000원",
    },
    {
      title: "영광법성포 참조기 고추장 굴비 500g 선물세트",
      image: presentFour,
      originalPrice: "170,000원",
      discount: "59%",
      price: "69,000원",
    },
    {
      title: "금다연 특허받은 매실절임 1구 500g",
      image: presentFive,
      originalPrice: "70,000원",
      discount: "50%",
      price: "35,000원",
    },
    {
      title: "밥도둑 명품 금다연 고추장 황태 500g 선물세트",
      image: presentSix,
      originalPrice: "100,000원",
      discount: "65%",
      price: "35,000원",
    },
  ];


  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? sliceImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === sliceImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <DefaultNavbar
        routes={routes}
        transparent
        light
        sticky
        onMobileMenuToggle={toggleMobileMenu}
      />

      {/* 모바일 메뉴 오버레이 */}
      <MKBox
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          zIndex: 9999,
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          pt: 8,
          transform: isMobileMenuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {/* 뒤로가기 버튼 */}
        <MKBox
          onClick={closeMobileMenu}
          sx={{
            position: "absolute",
            top: "20px",
            left: "20px",
            color: "white",
            cursor: "pointer",
            zIndex: 10000,
          }}
        >
          <Icon sx={{ fontSize: "4rem", color: "white !important" }}>close</Icon>
        </MKBox>

        {/* 메뉴 항목들 */}
        <MKBox
          sx={{
            width: "100%",
            maxWidth: "400px",
            mt: 4,
          }}
        >
          {/* 금다연 이야기 */}
          <MKBox
            component="a"
            href="/about"
            onClick={closeMobileMenu}
            sx={{
              display: "block",
              width: "100%",
              py: 3,
              px: 2,
              color: "white",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
              textAlign: "center",
              fontSize: "1.1rem",
              fontWeight: "bold",
              transition: "all 0.3s ease",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <span style={{ color: "white" }}>금다연 이야기 Story</span>
          </MKBox>

          {/* 메뉴 */}
          <MKBox
            component="a"
            href="/menu"
            onClick={closeMobileMenu}
            sx={{
              display: "block",
              width: "100%",
              py: 3,
              px: 2,
              color: "white",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
              textAlign: "center",
              fontSize: "1.1rem",
              fontWeight: "bold",
              transition: "all 0.3s ease",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <span style={{ color: "white" }}>메뉴 Menu</span>
          </MKBox>

          {/* 위치 */}
          <MKBox
            component="a"
            href="#location"
            onClick={closeMobileMenu}
            sx={{
              display: "block",
              width: "100%",
              py: 3,
              px: 2,
              color: "white",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
              textAlign: "center",
              fontSize: "1.1rem",
              fontWeight: "bold",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <span style={{ color: "white" }}>위치 Location</span>
          </MKBox>

          {/* 명품 선물세트 */}
          <MKBox
            component="a"
            href="#gift-set"
            onClick={closeMobileMenu}
            sx={{
              display: "block",
              width: "100%",
              py: 3,
              px: 2,
              color: "white",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
              textAlign: "center",
              fontSize: "1.1rem",
              fontWeight: "bold",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <span style={{ color: "white" }}>명품 선물세트 Premium gift set</span>
          </MKBox>

          {/* 후기 */}
          <MKBox
            component="a"
            href="#reviews"
            onClick={closeMobileMenu}
            sx={{
              display: "block",
              width: "100%",
              py: 3,
              px: 2,
              color: "white",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
              textAlign: "center",
              fontSize: "1.1rem",
              fontWeight: "bold",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <span style={{ color: "white" }}>후기 Review</span>
          </MKBox>
        </MKBox>

        {/* 스크롤 표시 */}
        <MKBox
          sx={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Icon
            sx={{
              color: "white",
              fontSize: "2rem",
              animation: "bounce 2s infinite",
              "@keyframes bounce": {
                "0%, 20%, 50%, 80%, 100%": {
                  transform: "translateY(0)",
                },
                "40%": {
                  transform: "translateY(-10px)",
                },
                "60%": {
                  transform: "translateY(-5px)",
                },
              },
            }}
          >
            keyboard_arrow_down
          </Icon>
        </MKBox>
      </MKBox>



      <MKBox
        minHeight={{ xs: "100vh", md: "75vh" }}
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center 35%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: { xs: "100%", md: "400px" },
            background: "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 80%, transparent 100%)",
            zIndex: 1,
            pointerEvents: "none",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: { xs: "100%", md: "400px" },
            background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 80%, transparent 100%)",
            zIndex: 1,
            pointerEvents: "none",
          },
        }}
      >
        {/* 메인 타이틀 - 모바일에서만 표시 */}
        <MKBox
          sx={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            mb: { xs: 6, md: 0 },
            display: { xs: "block", md: "none" },
          }}
        >
          <MKTypography
            variant="h1"
            color="white"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
              mb: { xs: 1, md: 2 },
            }}
          >
            건강을 위한
          </MKTypography>
          <MKTypography
            variant="h1"
            color="white"
            sx={{
              fontSize: { xs: "2.2rem", md: "3rem" },
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
              mb: { xs: 4, md: 2 },
            }}
          >
            약선 한정식
          </MKTypography>
        </MKBox>

        {/* PC용 반투명 오버레이 */}
        <MKBox
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            borderRadius: "12px",
            padding: "40px 60px",
            minWidth: "80%",
            maxWidth: "1200px",
            zIndex: 2,
            display: { xs: "none", md: "block" },
          }}
        >
          <Grid container spacing={4} justifyContent="center">
            {/* 첫 번째 컬럼 */}
            <Grid item xs={12} md={4} textAlign="center">
              <MKTypography
                variant="h3"
                color="white"
                fontWeight="bold"
                mb={1}
                sx={{
                  fontSize: { xs: "1.5rem", md: "2.25rem" }
                }}
              >
                약선 한정식
              </MKTypography>
              <MKTypography
                variant="body1"
                color="white"
                opacity={0.9}
                sx={{
                  fontSize: { xs: "0.875rem", md: "1rem" }
                }}
              >
                특허받은 웰빙 메뉴
              </MKTypography>
            </Grid>

            {/* 두 번째 컬럼 */}
            <Grid item xs={12} md={4} textAlign="center">
              <MKTypography
                variant="h3"
                color="white"
                fontWeight="bold"
                mb={1}
                sx={{
                  fontSize: { xs: "1.5rem", md: "2.25rem" }
                }}
              >
                최대 60명 수용
              </MKTypography>
              <MKTypography
                variant="body1"
                color="white"
                opacity={0.9}
                sx={{
                  fontSize: { xs: "0.875rem", md: "1rem" }
                }}
              >
                상견례, 피로연, 돌잔치 등
              </MKTypography>
            </Grid>

            {/* 세 번째 컬럼 */}
            <Grid item xs={12} md={4} textAlign="center">
              <MKTypography
                variant="h3"
                color="white"
                fontWeight="bold"
                mb={1}
                sx={{
                  fontSize: { xs: "1.5rem", md: "2.25rem" }
                }}
              >
                명품 선물세트
              </MKTypography>
              <MKTypography
                variant="body1"
                color="white"
                opacity={0.9}
                sx={{
                  fontSize: { xs: "0.875rem", md: "1rem" }
                }}
              >
                보리굴비, 고추장굴비 등
              </MKTypography>
            </Grid>
          </Grid>
        </MKBox>

        {/* 예약문의 버튼 - 모바일에서만 표시 */}
        <MKBox
          component="a"
          href="tel:062-374-1000"
          sx={{
            position: "relative",
            zIndex: 2,
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            backgroundColor: "transparent",
            border: "2px solid white",
            borderRadius: "8px",
            padding: { xs: "16px 32px", md: "20px 40px" },
            color: "white",
            textDecoration: "none",
            transition: "all 0.3s ease",
            mb: { xs: 8, md: 0 },
            mt: { xs: 4, md: 0 },
            "&:hover": {
              backgroundColor: "white",
              color: "black",
            },
          }}
        >
          <Icon sx={{ color: "white !important", "& *": { color: "white !important" } }}>phone</Icon>
          <MKTypography
            variant="body1"
            color="white"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1rem", md: "1.1rem" },
            }}
          >
            예약문의
          </MKTypography>
          <Icon sx={{ color: "white !important", "& *": { color: "white !important" } }}>arrow_forward</Icon>
        </MKBox>

        {/* 정보 카드들 */}
        <MKBox
          sx={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: "1200px",
            px: { xs: 1, md: 4 }, // 모바일에서 패딩 줄임
            display: { xs: "block", md: "none" },
          }}
        >
          <Grid container spacing={{ xs: 1, md: 4 }} justifyContent="center">
            {/* 첫 번째 컬럼 */}
            <Grid item xs={4} sm={4} textAlign="center">
              <MKBox
                sx={{
                  backgroundColor: { xs: "transparent", md: "rgba(255, 255, 255, 0.1)" },
                  borderRadius: { xs: 0, md: "12px" },
                  padding: { xs: "8px 4px", md: "30px 20px" }, // 모바일에서 패딩 줄임
                  backdropFilter: { xs: "none", md: "blur(10px)" },
                  border: { xs: "none", md: "1px solid rgba(255, 255, 255, 0.2)" },
                }}
              >
                <MKTypography
                  variant="h4"
                  color="white"
                  fontWeight="bold"
                  mb={1}
                  sx={{
                    fontSize: { xs: "0.75rem", md: "1rem" },
                    lineHeight: { xs: "1.1", md: "1.2" },
                    wordBreak: "keep-all" // 단어 단위로 줄바꿈 방지
                  }}
                >
                  약선 한정식
                </MKTypography>
                <MKTypography
                  variant="body1"
                  color="white"
                  opacity={0.9}
                  sx={{
                    fontSize: { xs: "0.7rem", md: "1rem" },
                    lineHeight: { xs: "1.1", md: "1.2" },
                    wordBreak: "keep-all"
                  }}
                >
                  특허받은 웰빙 메뉴
                </MKTypography>
              </MKBox>
            </Grid>

            {/* 두 번째 컬럼 */}
            <Grid item xs={4} sm={4} textAlign="center">
              <MKBox
                sx={{
                  backgroundColor: { xs: "transparent", md: "rgba(255, 255, 255, 0.1)" },
                  borderRadius: { xs: 0, md: "12px" },
                  padding: { xs: "8px 4px", md: "30px 20px" },
                  backdropFilter: { xs: "none", md: "blur(10px)" },
                  border: { xs: "none", md: "1px solid rgba(255, 255, 255, 0.2)" },
                }}
              >
                <MKTypography
                  variant="h4"
                  color="white"
                  fontWeight="bold"
                  mb={1}
                  sx={{
                    fontSize: { xs: "0.75rem", md: "1rem" },
                    lineHeight: { xs: "1.1", md: "1.2" },
                    wordBreak: "keep-all"
                  }}
                >
                  최대 60명 수용
                </MKTypography>
                <MKTypography
                  variant="body1"
                  color="white"
                  opacity={0.9}
                  sx={{
                    fontSize: { xs: "0.7rem", md: "1rem" },
                    lineHeight: { xs: "1.1", md: "1.2" },
                    wordBreak: "keep-all"
                  }}
                >
                  상견례,피로연,돌잔치 등
                </MKTypography>
              </MKBox>
            </Grid>

            {/* 세 번째 컬럼 */}
            <Grid item xs={4} sm={4} textAlign="center">
              <MKBox
                sx={{
                  backgroundColor: { xs: "transparent", md: "rgba(255, 255, 255, 0.1)" },
                  borderRadius: { xs: 0, md: "12px" },
                  padding: { xs: "8px 4px", md: "30px 20px" },
                  backdropFilter: { xs: "none", md: "blur(10px)" },
                  border: { xs: "none", md: "1px solid rgba(255, 255, 255, 0.2)" },
                }}
              >
                <MKTypography
                  variant="h4"
                  color="white"
                  fontWeight="bold"
                  mb={1}
                  sx={{
                    fontSize: { xs: "0.75rem", md: "1rem" },
                    lineHeight: { xs: "1.1", md: "1.2" },
                    wordBreak: "keep-all"
                  }}
                >
                  명품 선물세트
                </MKTypography>
                <MKTypography
                  variant="body1"
                  color="white"
                  opacity={0.9}
                  sx={{
                    fontSize: { xs: "0.7rem", md: "1rem" },
                    lineHeight: { xs: "1.1", md: "1.2" },
                    wordBreak: "keep-all"
                  }}
                >
                  보리굴비, 고추장굴비 등
                </MKTypography>
              </MKBox>
            </Grid>
          </Grid>
        </MKBox>

        {/* 스크롤 표시 */}
        <MKBox
          sx={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
            display: { xs: "block", md: "none" },
          }}
        >
          <Icon
            sx={{
              color: "white",
              fontSize: "2rem",
              animation: "bounce 2s infinite",
              "@keyframes bounce": {
                "0%, 20%, 50%, 80%, 100%": {
                  transform: "translateY(0)",
                },
                "40%": {
                  transform: "translateY(-10px)",
                },
                "60%": {
                  transform: "translateY(-5px)",
                },
              },
            }}
          >
            keyboard_arrow_down
          </Icon>
        </MKBox>
      </MKBox>

      {/* 정보 섹션 - 자연스럽게 연결 */}
      <MKBox
        sx={{
          width: "100%",
          backgroundColor: "white",
          padding: { xs: "40px 20px", md: "60px 0" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <MKBox
          sx={{
            width: { xs: "100%", md: "1115.71px" },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "center" },
            justifyContent: { xs: "center", md: "space-between" },
            gap: { xs: 3, md: 0 },
          }}
        >
          {/* 로고 부분 */}
          <MKBox
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              width: { xs: "100%", md: "404.43px" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <MKBox
              component="img"
              src={blacklogo}
              alt="금다연"
              sx={{
                width: { xs: "135px", md: "404.43px" },
                height: { xs: "67px", md: "200px" },
                objectFit: "contain",
                mb: { xs: 2, md: 0 },
              }}
            />
            <MKBox
              sx={{
                display: { xs: "block", md: "none" },
                textAlign: "center",
                mb: 2,
              }}
            >
            </MKBox>
          </MKBox>

          {/* 글자 부분 */}
          <MKBox
            sx={{
              width: { xs: "100%", md: "584px" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <MKBox
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 2, md: 1 },
                width: "100%",
              }}
            >
              <MKBox>
                <MKTypography
                  variant="h6"
                  color="dark"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "1.1rem", md: "1rem" },
                    mb: { xs: 1, md: 0.5 },
                  }}
                >
                  주소 : 광주 서구 상무연하로 72 골든유토피아 202호
                </MKTypography>
              </MKBox>

              <MKBox>
                <MKTypography
                  variant="h6"
                  color="dark"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "1.1rem", md: "1rem" },
                    mb: { xs: 1, md: 0.5 },
                  }}
                >
                  영업시간 : 매일 11:30 - 22:00<br />(15:00 - 17:00 브레이크타임)
                </MKTypography>
              </MKBox>

              <MKBox>
                <MKTypography
                  variant="h6"
                  color="dark"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "1.1rem", md: "1rem" },
                    mb: { xs: 1, md: 0.5 },
                  }}
                >
                  예약전화번호 <br /> 062-374-1000
                </MKTypography>
              </MKBox>
            </MKBox>
          </MKBox>
        </MKBox>
      </MKBox>

      {/* 한정식 메뉴 섹션 */}
      <MKBox
        sx={{
          width: "100%",
          height: { xs: "auto", md: "700px" },
          minHeight: { xs: "100vh", md: "700px" },
          backgroundImage: `url(${chalim3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* PC용 전체 배경 오버레이 */}
        <MKBox
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 1,
            display: { xs: "none", md: "block" },
          }}
        />

        {/* 모바일용 메뉴 섹션 */}
        <MenuSection
          title="한정식 메뉴"
          menuItems={menuItems}
          isMobile={true}
        />

        {/* PC용 메뉴 섹션 */}
        <MenuSection
          title="한정식 메뉴"
          menuItems={menuItems}
          isMobile={false}
        />
      </MKBox>

      {/* 메뉴 카드 섹션 */}
      <MKBox
        component="section"
        py={12}
        px={1}
        sx={{
          backgroundColor: "#f8f9fa",
          minHeight: "100vh",
        }}
      >
        <MKBox
          variant="contained"
          bgColor="white"
          borderRadius="xl"
          shadow="xl"
          sx={{
            maxWidth: "100%",
            margin: "0 auto",
            p: 4,
          }}
        >
          {/* 제목 섹션 */}
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
              금다연 메뉴
            </MKTypography>
            <MKTypography
              variant="h5"
              color="text"
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                opacity: 0.8,
              }}
            >
              전통 한식의 정성을 담은 다양한 상차림
            </MKTypography>

          </MKBox>

          <MenuCardGrid />
        </MKBox>

        {/* 메뉴 변경 안내 */}
        <MKBox sx={{ mt: 6 }}>
          <MKTypography
            variant="body2"
            color="text"
            textAlign="center"
            sx={{
              fontSize: "0.9rem",
              opacity: 0.8,
            }}
          >
            *메뉴는 구매사정과 계절적 특성에따라 변경될수 있습니다
          </MKTypography>
        </MKBox>

      </MKBox>

      {/* 약선보양 단품 메뉴 섹션 */}
      <MKBox
        sx={{
          width: "100%",
          height: { xs: "auto", md: "100vh" },
          minHeight: { xs: "100vh", md: "100vh" },
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          py: { xs: 4, md: 0 },
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: { xs: "transparent", md: "rgba(0, 0, 0, 0.5)" },
          },
        }}
      >
        {/* 약선보양 메뉴 섹션 */}
        <YakseonMenuSection
          title="약선보양 단품 메뉴"
          menuItems={yakseonMenuItems}
        />
      </MKBox>

      {/* 모바일 점심 특선 메뉴 섹션 */}
      <MKBox
        sx={{
          width: "100%",
          display: { xs: "block", md: "none" },
          backgroundColor: "white",
          py: 4,
        }}
      >
        <MKBox
          sx={{
            maxWidth: "600px",
            margin: "0 auto",
            px: 2,
          }}
        >
          {/* 제목 */}
          <MKTypography
            variant="h3"
            color="dark"
            textAlign="center"
            mb={2}
            sx={{
              fontSize: "1.8rem",
              fontWeight: "bold",
            }}
          >
            점심 특선 메뉴
          </MKTypography>

          {/* 구분선 */}
          <MKBox
            sx={{
              width: "100%",
              height: "1px",
              backgroundColor: "#e0e0e0",
              mb: 2,
            }}
          />

          {/* 메뉴 설명 */}
          <MKTypography
            variant="body2"
            color="text"
            textAlign="center"
            mb={4}
            sx={{
              fontSize: "0.9rem",
              opacity: 0.8,
            }}
          >
            * 11:30 ~ 14:30 주문 / 토·일·공휴일 제외
          </MKTypography>

          {/* 메뉴 항목들 */}
          <MKBox sx={{ mb: 4 }}>
            {/* 특 굴비(부세)정식 */}
            <MKBox sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
              <MKTypography variant="body1" sx={{ fontSize: "1rem", fontWeight: "500" }}>
                특 굴비(부세)정식
              </MKTypography>
              <MKBox sx={{ display: "flex", alignItems: "center", flex: 1, mx: 2 }}>
                <MKBox
                  sx={{
                    flex: 1,
                    height: "1px",
                    background: "repeating-linear-gradient(to right, #000 0, #000 2px, transparent 2px, transparent 4px)",
                  }}
                />
              </MKBox>
              <MKTypography variant="body1" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                26,000원
              </MKTypography>
            </MKBox>

            {/* 굴비(부세)정식 */}
            <MKBox sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
              <MKTypography variant="body1" sx={{ fontSize: "1rem", fontWeight: "500" }}>
                굴비(부세)정식
              </MKTypography>
              <MKBox sx={{ display: "flex", alignItems: "center", flex: 1, mx: 2 }}>
                <MKBox
                  sx={{
                    flex: 1,
                    height: "1px",
                    background: "repeating-linear-gradient(to right, #000 0, #000 2px, transparent 2px, transparent 4px)",
                  }}
                />
              </MKBox>
              <MKTypography variant="body1" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                23,000원
              </MKTypography>
            </MKBox>

            {/* 활우럭 지리 / 매운탕 */}
            <MKBox sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
              <MKTypography variant="body1" sx={{ fontSize: "1rem", fontWeight: "500" }}>
                활우럭 지리 / 매운탕
              </MKTypography>
              <MKBox sx={{ display: "flex", alignItems: "center", flex: 1, mx: 2 }}>
                <MKBox
                  sx={{
                    flex: 1,
                    height: "1px",
                    background: "repeating-linear-gradient(to right, #000 0, #000 2px, transparent 2px, transparent 4px)",
                  }}
                />
              </MKBox>
              <MKTypography variant="body1" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                20,000원
              </MKTypography>
            </MKBox>

            {/* 속풀이 전복 해물탕 */}
            <MKBox sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
              <MKTypography variant="body1" sx={{ fontSize: "1rem", fontWeight: "500" }}>
                속풀이 전복 해물탕
              </MKTypography>
              <MKBox sx={{ display: "flex", alignItems: "center", flex: 1, mx: 2 }}>
                <MKBox
                  sx={{
                    flex: 1,
                    height: "1px",
                    background: "repeating-linear-gradient(to right, #000 0, #000 2px, transparent 2px, transparent 4px)",
                  }}
                />
              </MKBox>
              <MKTypography variant="body1" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                20,000원
              </MKTypography>
            </MKBox>

            {/* 연포탕 */}
            <MKBox sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
              <MKTypography variant="body1" sx={{ fontSize: "1rem", fontWeight: "500" }}>
                연포탕
              </MKTypography>
              <MKBox sx={{ display: "flex", alignItems: "center", flex: 1, mx: 2 }}>
                <MKBox
                  sx={{
                    flex: 1,
                    height: "1px",
                    background: "repeating-linear-gradient(to right, #000 0, #000 2px, transparent 2px, transparent 4px)",
                  }}
                />
              </MKBox>
              <MKTypography variant="body1" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                싯가
              </MKTypography>
            </MKBox>

            {/* 능이버섯 전복 삼계탕 */}
            <MKBox sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
              <MKTypography variant="body1" sx={{ fontSize: "1rem", fontWeight: "500" }}>
                능이버섯 전복 삼계탕(계절메뉴)
              </MKTypography>
              <MKBox sx={{ display: "flex", alignItems: "center", flex: 1, mx: 2 }}>
                <MKBox
                  sx={{
                    flex: 1,
                    height: "1px",
                    background: "repeating-linear-gradient(to right, #000 0, #000 2px, transparent 2px, transparent 4px)",
                  }}
                />
              </MKBox>
              <MKTypography variant="body1" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                25,000원
              </MKTypography>
            </MKBox>

            {/* 금다연 점심특선 */}
            <MKBox sx={{ mb: 2 }}>
              <MKBox sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                <MKTypography variant="body1" sx={{ fontSize: "1rem", fontWeight: "500" }}>
                  금다연 점심특선
                </MKTypography>
              </MKBox>
              <MKBox sx={{ pl: 2 }}>
                <MKBox sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                  <MKTypography variant="body2" sx={{ fontSize: "0.9rem" }}>
                    2인
                  </MKTypography>
                  <MKBox sx={{ display: "flex", alignItems: "center", flex: 1, mx: 2 }}>
                    <MKBox
                      sx={{
                        flex: 1,
                        height: "1px",
                        background: "repeating-linear-gradient(to right, #000 0, #000 2px, transparent 2px, transparent 4px)",
                      }}
                    />
                  </MKBox>
                  <MKTypography variant="body2" sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>
                    56,000원
                  </MKTypography>
                </MKBox>
                <MKBox sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                  <MKTypography variant="body2" sx={{ fontSize: "0.9rem" }}>
                    3인
                  </MKTypography>
                  <MKBox sx={{ display: "flex", alignItems: "center", flex: 1, mx: 2 }}>
                    <MKBox
                      sx={{
                        flex: 1,
                        height: "1px",
                        background: "repeating-linear-gradient(to right, #000 0, #000 2px, transparent 2px, transparent 4px)",
                      }}
                    />
                  </MKBox>
                  <MKTypography variant="body2" sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>
                    69,000원
                  </MKTypography>
                </MKBox>
                <MKBox sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <MKTypography variant="body2" sx={{ fontSize: "0.9rem" }}>
                    4인
                  </MKTypography>
                  <MKBox sx={{ display: "flex", alignItems: "center", flex: 1, mx: 2 }}>
                    <MKBox
                      sx={{
                        flex: 1,
                        height: "1px",
                        background: "repeating-linear-gradient(to right, #000 0, #000 2px, transparent 2px, transparent 4px)",
                      }}
                    />
                  </MKBox>
                  <MKTypography variant="body2" sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>
                    84,000원
                  </MKTypography>
                </MKBox>
              </MKBox>
            </MKBox>
          </MKBox>

          {/* 음식 이미지들 */}
          <MKBox
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
            }}
          >
            <MKBox
              component="img"
              src={lunchmenu3}
              alt="음식 이미지 1"
              sx={{
                width: "30%",
                height: "80px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <MKBox
              component="img"
              src={lunchmenu2}
              alt="음식 이미지 2"
              sx={{
                width: "30%",
                height: "80px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <MKBox
              component="img"
              src={lunchmenu1}
              alt="음식 이미지 3"
              sx={{
                width: "30%",
                height: "80px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </MKBox>
        </MKBox>
      </MKBox>

      {/* 방 정보 섹션 */}
      <MKBox
        sx={{
          width: "100%",
          height: "620px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // position: "relative",
        }}
      >
        {/* 배경 이미지들 */}
        <MKBox
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "620px",
            display: "flex",
            zIndex: 1,
          }}
        >
          {/* 왼쪽 배경 */}
          <MKBox
            sx={{
              width: "50%",
              height: "100%",
              backgroundImage: `url(${room2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          {/* 오른쪽 배경 */}
          <MKBox
            sx={{
              width: "50%",
              height: "100%",
              backgroundImage: `url(${room1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </MKBox>

        {/* 전체 배경 오버레이 */}
        <MKBox
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 1,
          }}
        />

        {/* 중앙 콘텐츠 */}
        <MKBox
          sx={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "1200px",
            width: "90%",
            padding: "40px 20px",
            marginTop: "20px",
          }}
        >
          {/* 제목 */}
          <MKTypography
            variant="h1"
            color="white"
            textAlign="center"
            mb={2}
            sx={{
              fontSize: { xs: "1.3rem", md: "1.5rem" },
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
            }}
          >
            방 정보
          </MKTypography>

          {/* 정보 텍스트 */}
          <MKBox
            sx={{
              borderRadius: "16px",
              padding: { xs: "15px 10px", md: "20px 30px" },
              marginBottom: "20px",
              maxWidth: "700px",
              width: "100%",
            }}
          >
            <MKBox
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
              }}
            >
              <MKTypography
                variant="body1"
                color="white"
                sx={{
                  fontSize: { xs: "0.8rem", md: "0.9rem" },
                  lineHeight: 1.6,
                  textAlign: "center",
                }}
              >
                최대 인원 60명까지 수용 가능 한 방 보유
              </MKTypography>
              <MKTypography
                variant="body1"
                color="white"
                sx={{
                  fontSize: { xs: "0.8rem", md: "0.9rem" },
                  lineHeight: 1.6,
                  textAlign: "center",
                }}
              >
                비즈니스 PT, 피로연 돌잔치 등에
                <br />많이들 찾아 주십니다.
                <br />
                (빔프로젝터, 무선마이크 사용 가능 합니다.)
              </MKTypography>
              <MKTypography
                variant="body1"
                color="white"
                sx={{
                  fontSize: { xs: "0.8rem", md: "0.9rem" },
                  lineHeight: 1.6,
                  textAlign: "center",
                }}
              >
                고품격 상견례, 중요한 미팅
                <br />
                회갑연, 돌잔치 등 행사에 많이들 찾아 주십니다.
              </MKTypography>
              <MKTypography
                variant="body1"
                color="white"
                sx={{
                  fontSize: { xs: "0.8rem", md: "0.9rem" },
                  lineHeight: 1.6,
                  textAlign: "center",
                }}
              >
                맛과 멋이 있는 금다연에서
                <br />
                격조 있고 품격 있는 시간을 보내세요.
              </MKTypography>
            </MKBox>
          </MKBox>

          {/* 중앙 이미지 갤러리 */}
          <MKBox
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {/* 중앙 이미지 */}
            <MKBox
              sx={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
              }}
            >
              <MKBox
                component="img"
                src={sliceImages[currentImageIndex]}
                alt={`방 이미지 ${currentImageIndex + 1}`}
                sx={{
                  width: "361px",
                  height: "240px",
                  display: "block",
                  objectFit: "cover",
                  transition: "opacity 0.3s ease",
                }}
              />

              {/* 왼쪽 화살표 */}
              <MKBox
                onClick={handlePreviousImage}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "10px",
                  transform: "translateY(-50%)",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    transform: "translateY(-50%) scale(1.1)",
                  },
                }}
              >
                <Icon sx={{ color: "black", fontSize: "1.2rem" }}>chevron_left</Icon>
              </MKBox>

              {/* 오른쪽 화살표 */}
              <MKBox
                onClick={handleNextImage}
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    transform: "translateY(-50%) scale(1.1)",
                  },
                }}
              >
                <Icon sx={{ color: "black", fontSize: "1.2rem" }}>chevron_right</Icon>
              </MKBox>

              {/* 이미지 인디케이터 */}
              <MKBox
                sx={{
                  position: "absolute",
                  bottom: "10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: "8px",
                }}
              >
                {sliceImages.map((_, index) => (
                  <MKBox
                    key={index}
                    sx={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: index === currentImageIndex
                        ? "rgba(255, 255, 255, 1)"
                        : "rgba(255, 255, 255, 0.5)",
                      transition: "all 0.3s ease",
                    }}
                  />
                ))}
              </MKBox>
            </MKBox>
          </MKBox>
        </MKBox>
      </MKBox>

      {/* 명품 선물세트 섹션 */}
      <GiftSetSection
        giftSets={giftSets}
        layout="desktop"
        showTitle={true}
        showSubtitle={false}
        showSmartStoreButton={true}
        smartStoreUrl="https://smartstore.naver.com/gdycokr?NaPm=ct%3Dmdcghdrw%7Cci%3Dshopn%7Ctr%3Dnslsl%7Chk%3Dda31df3d77ca393e48fddca66c3cc7e941aa6df5%7Ctrx%3Dundefined"
      />

      {/* 금다연 오시는 길 섹션 */}
      <LocationInfo
        layout="desktop"
        showTitle={true}
      />

      {/* Footer */}
      <DefaultFooter />
    </>
  );
}

export default Presentation;
