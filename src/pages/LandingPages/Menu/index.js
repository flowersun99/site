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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Custom components
import PageLayout from "components/PageLayout";
import HeroSection from "components/HeroSection";
import MenuSection from "components/MenuSection";

// Menu images
import menu1 from "assets/images/mobile_menu/menu1.jpg";
import chalim3 from "assets/images/chalim3.png";
import lunchmenu1 from "assets/images/lunchmenu/lunchmenu1.jpg";
import lunchmenu2 from "assets/images/lunchmenu/lunchmenu2.jpg";
import lunchmenu3 from "assets/images/lunchmenu/lunchmenu3.png";

// Menu data
import { menuItems } from "data/menuData";

function Menu() {
  return (
    <PageLayout>
      <HeroSection
        image={menu1}
        title="메뉴"
        subtitle="금다연만의 특별한 한정식 메뉴를 만나보세요"
      />

      {/* 모바일용 메뉴 섹션 */}
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
                28,000원
              </MKTypography>
            </MKBox>

                         {/* 활우럭탕수 */}
             <MKBox sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
               <MKTypography variant="body1" sx={{ fontSize: "1rem", fontWeight: "500" }}>
                 활우럭탕수
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
                 28,000원
               </MKTypography>
             </MKBox>
           </MKBox>

           {/* 점심 메뉴 이미지들 */}
           <MKBox sx={{ mt: 4 }}>
             <MKBox
               component="img"
               src={lunchmenu1}
               alt="점심 메뉴 1"
               sx={{
                 width: "100%",
                 height: "200px",
                 objectFit: "cover",
                 borderRadius: "8px",
                 mb: 2,
               }}
             />
             <MKBox
               component="img"
               src={lunchmenu2}
               alt="점심 메뉴 2"
               sx={{
                 width: "100%",
                 height: "200px",
                 objectFit: "cover",
                 borderRadius: "8px",
                 mb: 2,
               }}
             />
             <MKBox
               component="img"
               src={lunchmenu3}
               alt="점심 메뉴 3"
               sx={{
                 width: "100%",
                 height: "200px",
                 objectFit: "cover",
                 borderRadius: "8px",
                 mb: 2,
               }}
             />
           </MKBox>
         </MKBox>
       </MKBox>
    </PageLayout>
  );
}

export default Menu; 