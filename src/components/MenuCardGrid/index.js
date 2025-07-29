/* eslint-disable prettier/prettier */
import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Menu card images
import firImage from "assets/images/card/fir.jpg";
import secondImage from "assets/images/card/second.jpg";
import threeImage from "assets/images/card/three.jpg";
import fourImage from "assets/images/card/four.jpg";
import fiveImage from "assets/images/card/five.jpg";
import sixImage from "assets/images/card/six.jpg";

const menuItems = [
  {
    title: "모란상 A",
    subtitle: "Peony table set A",
    description: "부담되지 않은 모임 식사 메뉴",
    image: firImage,
    menuList:
      "죽, 매실절임(특허받음), 수수부꾸미/약밥, 새우장(생김치+생굴), 칠절판, 연어 날치알 샐러드, 계절초무침, 약선신선로(특허받음), 홍어삼합, 생선회(생연어 등), 토란탕/메생이/꽃게탕, 한우 생고기, 가오리찜, 생선탕수, 궁중잡채, 전류(민어, 굴, 고기 등), 갈비찜, 조림류, 메로구이, 새우/야채튀김, 굴비, 식사",
  },
  {
    title: "모란상 B",
    subtitle: "Peony table set B",
    description: "고급스럽고 특별한 메뉴",
    image: fourImage,
    menuList:
      "죽, 매실절임(특허받음), 수수부꾸미/약밥, 새우장(생김치+생굴), 칠절판, 연어 날치알 샐러드, 계절초무침(구체적), 약선신선로(특허받음), 홍어삼합, 생선회(연어, 랍스터), 토란탕/메생이/꽃게탕, 한우 생고기, 낙지, 생마 유자청 전복초/찜, 활우럭탕수, 궁중잡채, 전류(민어, 굴, 고기 등), 갈비찜, 조림류, 메로구이, 새우/야채튀김, 굴비, 식사",
  },
  {
    title: "매화상",
    subtitle: "Plum blossom table set",
    description: "저렴한 가격에 격조 높은 분위기를 선사",
    image: secondImage,
    menuList:
      "죽, 매실절임(특허받음), 약선잡곡밥, 상추삼채 겉절이, 칠절판, 약선 생마청, 계절초무침, 양상치 연어 날치알쌈, 탕평채, 궁중잡채, 전류(민어, 굴, 고기 등), 어탕(민어 등)/메생이, 생선회(전복1개), 홍어삼합, 약선신선로(특허받음), 한우 낙지탕탕이, 우럭탕수, 조림류, 송이버섯마늘갈비, 새우, 야채튀김, 굴비, 식사",
  },
  {
    title: "연꽃상",
    subtitle: "Lotus table set",
    description: "상견례, 접대에서 가장 많이 찾는 상차림",
    image: fiveImage,
    menuList:
      "죽, 매실절임(특허받음), 약선잡곡밥, 상추삼채 겉절이, 칠절판, 약선 생마청, 계절초무침, 양상치 연어 날치알쌈, 탕평채, 궁중잡채, 전류(민어, 굴, 고기 등), 어탕(민어 등)/메생이, 생선회(전복1개), 홍어삼합, 약선신선로(특허받음), 한우 낙지탕탕이, 송이버섯마늘갈비, 생마 유자청 곁들인 전복초, 활우럭탕수, 인삼, 새우튀김, 굴비, 식사",
  },
  {
    title: "무궁화상",
    subtitle: "Rose of sharon table set",
    description: "금다연의 '격'이 보이는 상차림",
    image: threeImage,
    menuList:
      "죽, 매실절임(특허받음), 약선잡곡밥, 상추삼채 겉절이, 칠절판, 약선 생마 산삼청, 계절초무침, 양상치 연어 날치알쌈, 탕평채, 궁중잡채, 전류(민어, 굴, 고기 등), 어탕(민어 등)/메생이, 생선회, 참치회, 홍어삼합, 랍스터, 약선신선로(특허받음), 한우 낙지탕탕이, 생마 유자청 곁들인 전복초, 대하찜, 해신탕, 활우럭탕수, 인삼, 새우튀김, 굴비, 식사",
  },
  {
    title: "금다연상",
    subtitle: "Geumdayeon table set",
    description: "산해진미의 향연, 금다연 최고의 상차림",
    image: sixImage,
    menuList:
      "죽, 매실절임(특허받음), 약선잡곡밥, 도토리상추삼채 겉절이, 약선 생마 산삼청, 계절초무침, 산삼유자청 샐러드, 궁중잡채, 전류(민어, 굴, 고기 등), 낙지연포탕, 스페셜 생선 랍스터회, 홍어삼합, 한우낙지 탕탕이, 한우구이(돌판), 먹갈치조림, 대게찜, 생마 유자청 곁들인 전복초, 낙지 호롱, 자연산송이버섯구이, 해신탕, 활우럭탕수, 인삼, 새우튀김, 굴비, 식사",
  },
];

const MenuCard = ({ item }) => (
  <Grid item xs={12} md={6}>
    <MKBox
      sx={{
        height: "100%",
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
      {/* 모바일 레이아웃 */}
      <MKBox sx={{ display: { xs: "block", md: "none" } }}>
        {/* 이미지 */}
      <MKBox
        component="img"
        src={item.image}
        alt={item.title}
        sx={{
            width: "100%",
            height: "200px",
          objectFit: "cover",
        }}
      />

      {/* 카드 내용 */}
        <MKBox sx={{ p: 4 }}>
          {/* 제목과 영문 제목 */}
          <MKBox sx={{ display: "flex", alignItems: "center", mb: 2, gap: 1 }}>
            <MKTypography
              variant="h5"
              color="dark"
              sx={{
                fontSize: "1.1rem",
                fontWeight: "bold",
              }}
            >
              {item.title}
            </MKTypography>
            <MKTypography
              variant="body2"
              color="text"
              sx={{
                fontSize: "0.8rem",
                opacity: 0.7,
                fontStyle: "italic",
              }}
            >
              {item.subtitle}
            </MKTypography>
          </MKBox>

          {/* 설명 */}
          <MKTypography
            variant="body1"
            color="dark"
            mb={3}
            sx={{
              fontSize: "0.9rem",
              fontWeight: 500,
              lineHeight: 1.4,
            }}
          >
            {item.description}
          </MKTypography>

          {/* 메뉴 목록 */}
          <MKTypography
            variant="body2"
            color="text"
            sx={{
              fontSize: "0.75rem",
              lineHeight: 1.5,
              opacity: 0.8,
            }}
          >
            {item.menuList}
          </MKTypography>
        </MKBox>
      </MKBox>

      {/* PC 레이아웃 */}
      <MKBox sx={{ display: { xs: "none", md: "flex" }, height: "100%" }}>
        {/* 텍스트 영역 */}
      <MKBox
        sx={{
            flex: 1,
          display: "flex",
          flexDirection: "column",
          p: 4,
        }}
      >
          {/* 제목과 영문 제목 */}
          <MKBox sx={{ display: "flex", alignItems: "center", mb: 2, gap: 1 }}>
        <MKTypography
          variant="h5"
          color="dark"
          sx={{
                fontSize: "1.3rem",
            fontWeight: "bold",
          }}
        >
          {item.title}
        </MKTypography>
        <MKTypography
          variant="body2"
          color="text"
          sx={{
                fontSize: "0.9rem",
            opacity: 0.7,
            fontStyle: "italic",
          }}
        >
          {item.subtitle}
        </MKTypography>
          </MKBox>

        {/* 설명 */}
        <MKTypography
          variant="body1"
          color="dark"
          mb={3}
          sx={{
              fontSize: "1rem",
            fontWeight: 500,
            lineHeight: 1.4,
          }}
        >
          {item.description}
        </MKTypography>

        {/* 메뉴 목록 */}
          <MKTypography
            variant="body2"
            color="text"
            sx={{
              fontSize: "0.8rem",
              lineHeight: 1.5,
              opacity: 0.8,
            }}
          >
            {item.menuList}
          </MKTypography>
        </MKBox>

        {/* 이미지 */}
        <MKBox
          component="img"
          src={item.image}
          alt={item.title}
          sx={{
            width: "30%",
            height: "130px",
            objectFit: "cover",
            alignSelf: "flex-start",
            mt: 4,
            mr: 4,
          }}
        />
      </MKBox>
    </MKBox>
  </Grid>
);

MenuCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    menuList: PropTypes.string.isRequired,
  }).isRequired,
};

const MenuCardGrid = () => {
  return (
    <Grid container spacing={4}>
      {menuItems.map((item, index) => (
        <MenuCard key={index} item={item} />
      ))}
    </Grid>
  );
};

export default MenuCardGrid; 