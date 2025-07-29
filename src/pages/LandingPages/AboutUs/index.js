/* eslint-disable prettier/prettier */
/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";

// Mobile story images
import mobileStory1 from "assets/images/mobile_story/mobile_1.jpg";
import mobileStory2 from "assets/images/mobile_story/mobile_2.jpg";
import mobileStory3 from "assets/images/mobile_story/mobile_3.png";
import mobileStory4 from "assets/images/mobile_story/mobile_4.jpg";
import mobileStory5 from "assets/images/mobile_story/mobile_5.jpg";
import mobileStory6 from "assets/images/mobile_story/mobile_6.jpg";

function AboutUs() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        transparent={false}
        light={false}
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
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          zIndex: 9999,
          display: { xs: "block", md: "none" },
          transform: isMobileMenuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-in-out",
          overflowY: "auto",
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
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon sx={{ fontSize: "4rem", backgroundColor: "white" }}>arrow_back</Icon>
        </MKBox>

        {/* 메뉴 항목들 */}
        <MKBox
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            px: 3,
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
            href="/location"
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
            href="/gift-set"
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
            href="/reviews"
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

      {/* 모바일 금다연 이야기 페이지 */}
      <MKBox
        sx={{
          minHeight: "100vh",
          backgroundColor: "white",
        }}
      >
        {/* 첫 번째 이미지 (히어로 섹션) */}
        <MKBox
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "450px", md: "200px" },
            overflow: "hidden",
          }}
        >
          <MKBox
            component="img"
            src={mobileStory1}
            alt="금다연 이야기 1"
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
        <MKBox sx={{ textAlign: "center", mb: 4, px: 3, pt: 4 }}>
          <MKTypography
            variant="h1"
            color="dark"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: "bold",
              mb: 2,
            }}
          >
            금다연 이야기
          </MKTypography>
          <MKTypography
            variant="body1"
            color="text"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.3rem" },
              lineHeight: 1.6,
              opacity: 0.8,
              mb: 1,
            }}
          >
            전라도 최고의 식당
          </MKTypography>
          <MKTypography
            variant="body1"
            color="text"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.3rem" },
              lineHeight: 1.6,
              opacity: 0.8,
            }}
          >
            광주 한정식 맛집 중 최고
          </MKTypography>
        </MKBox>

        {/* 이미지 2 */}
        <MKBox sx={{ mb: 6, px: { xs: 3, md: 8 } }}>
          <MKBox
            component="img"
            src={mobileStory2}
            alt="금다연 이야기 2"
            sx={{
              width: { xs: "100%", md: "60%" },
              height: "auto",
              display: "block",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              margin: { xs: "0 auto", md: "0 auto" },
            }}
          />
        </MKBox>

        {/* 금다연의 음식철학 */}
        <MKBox sx={{ px: 3, mb: 6, pt: 4 }}>
          <MKTypography
            variant="h3"
            color="dark"
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" },
              fontWeight: "bold",
              mb: 3,
              textAlign: "center",
            }}
          >
            금다연의 음식철학
          </MKTypography>
          <MKTypography
            variant="body1"
            color="text"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.8,
              mb: 2,
              textAlign: "center",
            }}
          >
            질병에 대한 저항력과 <br /> 면역능력을 생각하여 <br />한의학의 기초를 둔<br /> 약선 음식을 제공하고 있습니다.
          </MKTypography>
          <MKTypography
            variant="body1"
            color="text"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.8,
              mb: 2,
              textAlign: "center",
            }}
          >
            현지 직거래한 신선한 식재료로 <br /> 오직 천연양념만을 사용합니다.
          </MKTypography>
          <MKTypography
            variant="body1"
            color="text"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.8,
              mb: 2,
              textAlign: "center",
            }}
          >
            고객님의 건강증진에 <br />온 정성을 다할 것을 약속 드립니다.
          </MKTypography>
        </MKBox>

        {/* 이미지 3 */}
        <MKBox sx={{ mb: 6, px: { xs: 3, md: 8 } }}>
          <MKBox
            component="img"
            src={mobileStory3}
            alt="금다연 이야기 3"
            sx={{
              width: { xs: "100%", md: "60%" },
              height: "auto",
              display: "block",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              margin: { xs: "0 auto", md: "0 auto" },
            }}
          />
        </MKBox>



        {/* 명품 서비스 */}
        <MKBox sx={{ px: 3, mb: 6 }}>
          <MKTypography
            variant="h3"
            color="dark"
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" },
              fontWeight: "bold",
              mb: 3,
              textAlign: "center",
            }}
          >
            명품 서비스
          </MKTypography>
          <MKTypography
            variant="body1"
            color="text"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.8,
              mb: 2,
              textAlign: "center",
            }}
          >
            맛있고 깔끔한 요리, <br />
            전통과 세련미를 살린 인테리어, <br />
            아늑한 분위기 등이 장점입니다. <br />
          </MKTypography>
          <MKTypography
            variant="body1"
            color="text"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.8,
              mb: 2,
              textAlign: "center",
            }}
          >
            상견례, 돌잔치, 회갑연, <br />
            칠순잔치, 비즈니스 미팅 <br />
            등으로 많이 찾아주십니다. <br />
          </MKTypography>
          <MKTypography
            variant="body1"
            color="text"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.8,
              mb: 2,
              textAlign: "center",
            }}
          >
            더 나은 서비스를 위해 <br />
            항상 최선을 다하는 <br />
            금다연이 되겠습니다.
          </MKTypography>
        </MKBox>

        {/* 이미지 4 */}
        <MKBox sx={{ mb: 6, px: { xs: 3, md: 8 } }}>
          <MKBox
            component="img"
            src={mobileStory4}
            alt="금다연 이야기 4"
            sx={{
              width: { xs: "100%", md: "60%" },
              height: "auto",
              display: "block",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              margin: { xs: "0 auto", md: "0 auto" },
            }}
          />
        </MKBox>

        {/* 특허 받은 건강한 음식 */}
        <MKBox sx={{ px: 3, mb: 6 }}>
          <MKTypography
            variant="h3"
            color="dark"
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" },
              fontWeight: "bold",
              mb: 3,
              textAlign: "center",
            }}
          >
            특허 받은 건강한 음식
          </MKTypography>
          <MKTypography
            variant="body1"
            color="text"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.8,
              mb: 2,
              textAlign: "center",
            }}
          >
            약선 신선로 및 그 제조방법, <br/>
            매실 피클의 제조방법이 <br/>
            특허에 등록이 되어 있습니다 <br/>
          </MKTypography>
          <MKTypography
            variant="body1"
            color="text"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.8,
              mb: 2,
              textAlign: "center",
            }}
          >
            건강한 음식을 위한 일념으로 <br/>
            가득찬 곳 금다연 한정식 입니다. <br/>
          </MKTypography>
        </MKBox>



        {/* 이미지 5와 6 (같은 행) */}
        <MKBox sx={{ mb: 6, px: { xs: 3, md: 8 } }}>
          <Grid container spacing={2} sx={{ maxWidth: { xs: "100%", md: "60%" }, margin: { xs: "0 auto", md: "0 auto" } }}>
            <Grid item xs={6}>
              <MKBox
                component="img"
                src={mobileStory5}
                alt="금다연 이야기 5"
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <MKBox
                component="img"
                src={mobileStory6}
                alt="금다연 이야기 6"
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
              />
            </Grid>
          </Grid>
        </MKBox>

        {/* Footer */}
        <DefaultFooter />
      </MKBox>
    </>
  );
}

export default AboutUs;
