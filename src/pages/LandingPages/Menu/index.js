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
import Grid from "@mui/material/Grid";

// Custom components
import PageLayout from "components/PageLayout";
import HeroSection from "components/HeroSection";

// Menu images
import menu1 from "assets/images/mobile_menu/menu1.jpg";
import menu2 from "assets/images/mobile_menu/menu2.jpg";
import menu3 from "assets/images/mobile_menu/menu3.jpg";
import menu4 from "assets/images/mobile_menu/menu4.jpg";
import menu5 from "assets/images/mobile_menu/menu5.jpg";

function Menu() {
  const menuItems = [
    {
      title: "모란상A",
      subtitle: "Peony table set A",
      price: "2인 전용 | 120,000원",
      description: "부담되지 않은 모임 식사 메뉴",
      image: menu2,
      includes: [
        "죽류", "매실절임(특허받음)", "수수부꾸미/약밥", "새우장(생김치+생굴)",
        "칠절판", "연어 날치알 샐러드", "계절초무침", "약선신선로(특허받음)",
        "홍어삼합", "생선회(생연어 등)", "토란탕/메생이/꽃게탕", "한우 생고기",
        "가오리찜", "생선탕수", "궁중잡채", "전류(민어, 굴, 고기 등)",
        "갈비찜", "조림류", "메로구이", "새우/야채튀김", "굴비", "식사"
      ],
    },
    {
      title: "모란상B",
      subtitle: "Peony table set B",
      price: "2인 전용 | 180,000원",
      description: "고급스럽고 특별한 메뉴",
      image: menu3,
      includes: [
        "죽류", "매실절임(특허받음)", "수수부꾸미/약밥", "새우장(생김치+생굴)",
        "칠절판", "연어 날치알 샐러드", "계절초무침", "약선신선로(특허받음)",
        "홍어삼합", "생선회(생연어 등)", "토란탕/메생이/꽃게탕", "한우 생고기",
        "낙지", "생마 유자청 전복초/찜", "활우럭탕수", "궁중잡채",
        "전류(민어, 굴, 고기 등)", "갈비찜", "조림류", "메로구이",
        "새우/야채튀김", "굴비", "식사"
      ],
    },
    {
      title: "오리백숙",
      subtitle: "Duck Baeksook",
      price: "2인 58,000원",
      description: "영양만점 오리백숙으로 건강을 챙기세요",
      image: menu3,
      includes: ["샐러드", "김치", "국", "밥", "반찬", "소스", "쌈", "후식", "음료", "서비스"],
    },
    {
      title: "뼈찜",
      subtitle: "Braised Pork Ribs",
      price: "2인 58,000원",
      description: "부드럽게 조린 돼지갈비찜",
      image: menu4,
      includes: ["샐러드", "김치", "국", "밥", "반찬", "소스", "쌈", "후식", "음료", "서비스"],
    },
    {
      title: "불고기전골",
      subtitle: "Bulgogi Jeon-gol",
      price: "2인 58,000원",
      description: "매콤달콤한 불고기 전골",
      image: menu5,
      includes: ["샐러드", "김치", "국", "밥", "반찬", "소스", "쌈", "후식", "음료", "서비스"],
    },
  ];

  const lunchMenu = [
    { name: "특 오리훈제정식", price: "28,000원" },
    { name: "오리불고기정식", price: "23,000원" },
    { name: "황칠오리탕/삼계탕", price: "28,000원" },
    { name: "오리훈제전골", price: "30,000원" },
    { name: "오리훈제", price: "싯가" },
    { name: "능이백숙", price: "2인 58,000원" },
    { name: "오리백숙", price: "2인 58,000원, 3인 69,000원, 4인 84,000원" },
  ];

  return (
    <PageLayout>
      <HeroSection
        image={menu1}
        title="메뉴"
        subtitle="금다연만의 특별한 한정식 메뉴를 만나보세요"
      />

      {/* Main Content */}
      <MKBox
        sx={{
          backgroundColor: "white",
          minHeight: "100vh",
          pt: 1,
          pb: 4,
        }}
      >
        {/* Menu Content */}
        <MKBox
          sx={{
            maxWidth: "600px",
            margin: "0 auto",
            px: 2,
          }}
        >
          {/* 메뉴 아이템들 */}
          {menuItems.map((item, index) => (
            <MKBox
              key={index}
              sx={{
                mb: 4,
                borderRadius: "12px",
                overflow: "hidden",
                bgColor: "white",
                shadow: "lg",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                },
              }}
            >
              {/* 이미지 */}
              <MKBox
                component="img"
                src={item.image}
                alt={item.title}
                sx={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                }}
              />

              {/* 메뉴 정보 */}
              <MKBox sx={{ p: 3 }}>
                {/* 제목과 부제목 */}
                <MKBox mb={2}>
                  <MKTypography
                    variant="h4"
                    color="dark"
                    sx={{
                      fontSize: { xs: "1.5rem", md: "1.8rem" },
                      fontWeight: "bold",
                      mb: 0.5,
                    }}
                  >
                    {item.title}
                  </MKTypography>
                  <MKTypography
                    variant="body1"
                    color="text"
                    sx={{
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      opacity: 0.7,
                    }}
                  >
                    {item.subtitle}
                  </MKTypography>
                </MKBox>

                {/* 가격 */}
                <MKTypography
                  variant="h6"
                  color="primary"
                  sx={{
                    fontSize: { xs: "1.1rem", md: "1.2rem" },
                    fontWeight: "bold",
                    mb: 2,
                  }}
                >
                  {item.price}
                </MKTypography>

                {/* 설명 */}
                <MKTypography
                  variant="body2"
                  color="text"
                  sx={{
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    mb: 3,
                    opacity: 0.8,
                  }}
                >
                  {item.description}
                </MKTypography>

                {/* 포함 메뉴 */}
                <MKBox>
                  <MKTypography
                    variant="h6"
                    color="dark"
                    sx={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      mb: 2,
                    }}
                  >
                    포함 메뉴
                  </MKTypography>
                  <Grid container spacing={1}>
                    {item.includes.map((include, idx) => (
                      <Grid item xs={6} sm={4} key={idx}>
                        <MKTypography
                          variant="body2"
                          color="text"
                          sx={{
                            fontSize: "0.85rem",
                            opacity: 0.8,
                            "&::before": {
                              content: '"• "',
                              color: "primary.main",
                              fontWeight: "bold",
                            },
                          }}
                        >
                          {include}
                        </MKTypography>
                      </Grid>
                    ))}
                  </Grid>
                </MKBox>
              </MKBox>
            </MKBox>
          ))}

          {/* 런치 메뉴 섹션 */}
          <MKBox
            sx={{
              mt: 6,
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
                mb: 3,
                textAlign: "center",
              }}
            >
              런치 메뉴 (11:30 - 14:30)
            </MKTypography>

            <Grid container spacing={2}>
              {lunchMenu.map((item, index) => (
                <Grid item xs={12} key={index}>
                  <MKBox
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      py: 1.5,
                      px: 2,
                      borderRadius: "8px",
                      bgColor: "white",
                      border: "1px solid #e9ecef",
                    }}
                  >
                    <MKTypography
                      variant="body1"
                      color="dark"
                      sx={{
                        fontSize: "0.95rem",
                        fontWeight: "500",
                      }}
                    >
                      {item.name}
                    </MKTypography>
                    <MKTypography
                      variant="body1"
                      color="primary"
                      sx={{
                        fontSize: "0.95rem",
                        fontWeight: "bold",
                      }}
                    >
                      {item.price}
                    </MKTypography>
                  </MKBox>
                </Grid>
              ))}
            </Grid>
          </MKBox>
        </MKBox>
      </MKBox>
    </PageLayout>
  );
}

export default Menu; 