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

// Menu images
import menu1 from "assets/images/mobile_menu/menu1.jpg";
import lunchmenu1 from "assets/images/lunchmenu/lunchmenu1.jpg";
import lunchmenu2 from "assets/images/lunchmenu/lunchmenu2.jpg";
import lunchmenu3 from "assets/images/lunchmenu/lunchmenu3.png";

// Menu data
// import { menuItems } from "data/menuData";
import MenuCardGrid from "components/MenuCardGrid";


function Menu() {
  return (
    <PageLayout>
      <HeroSection
        image={menu1}
      />

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
              메뉴 설명
            </MKTypography>
            <MKTypography
              variant="h5"
              color="text"
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                opacity: 0.8,
              }}
            >
              전라도 광주 명품 한정식의 정석 <br /> 건강하고 든든한 점심 특선까지
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
    </PageLayout>
  );
}

export default Menu; 