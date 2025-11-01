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
    title: "모란 A",
    subtitle: "Peony table set A",
    description: "부담되지 않은 모임 식사 메뉴",
    image: firImage,
    menuList:
      "죽류, 매실절임, 칠절판, 영양찰밥, 연어유자청샐러드, 새우장, 홍어삼합, 궁중잡채, 계절초무침, 생선회, 전복구이, 고등어무조림, 낙지탕탕이(숙회), 한우생고기(육회), 장어구이, 소갈비찜, 전류, 대구지리탕, 표고버섯탕수, 새우·고구마튀김, 보리굴비(부세) 4찬, 누룽지(밥), 계절과일, 차류",
  },
  {
    title: "모란 B",
    subtitle: "Peony table set B",
    description: "고급스럽고 특별한 메뉴",
    image: fourImage,
    menuList:
      "죽류,  매실절임, 칠절판, 영양찰밥, 연어유자청샐러드, 새우장, 홍어삼합, 궁중잡채, 계절초무침, 낙지탕탕이(숙회), 한우생고기(육회), 생선회, 전복회, 1차 랍스터회, 2차 랍스터볶음, 고등어무조림, 신선로, 장어구이,  소갈비찜, 전류,  대구지리탕,  표고버섯탕수, 새우·고구마튀김, 보리굴비(부세) 4찬, 누룽지(밥), 계절과일, 차류",
  },
  {
    title: "매화상",
    subtitle: "Plum blossom table set",
    description: "저렴한 가격에 격조 높은 분위기를 선사",
    image: secondImage,
    menuList:
      "죽류,  매실절임, 칠절판, 영양찰밥, 연어유자청샐러드, 두부선, 새우장, 홍어삼합, 궁중잡채, 계절초무침, 전복구이, 생선회, 고등어무조림, 장어구이, 한우생고기(육회), 소갈비찜, 전류, 대구지리탕, 표고버섯탕수, 새우·고구마튀김, 보리굴비(부세) 4찬, 누룽지(밥), 계절과일, 차류",
  },
  {
    title: "연꽃상",
    subtitle: "Lotus table set",
    description: "상견례, 접대에서 가장 많이 찾는 상차림",
    image: fiveImage,
    menuList:
      "죽류,  매실절임, 칠절판, 영양찰밥, 연어유자청샐러드, 새우장, 홍어삼합, 궁중잡채, 계절초무침, 생선회, 전복구이, 고등어무조림, 신선로, 장어구이, 낙지탕탕이(숙회), 한우생고기(육회), 소갈비찜, 전류, 대구지리탕, 표고버섯탕수, 새우·고구마튀김, 보리굴비(부세) 4찬, 누룽지(밥), 계절과일, 차류",
  },
  {
    title: "무궁화상",
    subtitle: "Rose of sharon table set",
    description: "금다연의 '격'이 보이는 상차림",
    image: threeImage,
    menuList:
      "죽류,  매실절임, 칠절판, 영양찰밥, 연어유자청샐러드, 새우장, 홍어삼합, 궁중잡채, 계절초무침, 생선회, 전복구이, 낙지탕탕이(숙회), 한우생고기(육회), 1차 랍스터회, 2차 랍스터볶음, 고등어무조림, 신선로, 장어구이,  소갈비찜, 전류, 대구지리탕,  우럭탕수, 새우·고구마튀김, 보리굴비(부세) 4찬, 누룽지(밥), 계절과일, 차류",
  },
  {
    title: "금다연상",
    subtitle: "Geumdayeon table set",
    description: "산해진미의 향연, 금다연 최고의 상차림",
    image: sixImage,
    menuList:
      "죽, 매실절임, 영양찰밥, 연어유자청샐러드, 새우장, 홍어삼합, 궁중잡채,  계절초무침, 생선회, 전복구이, 1차랍스터회, 2차 랍스터볶음, 고등어무조림, 장어구이, 낙지탕탕이(숙회), 한우생고기(육회), 해신탕, 전류,  대하구이, 한우안창(토시)/버섯 구이, 우럭탕수, 새우·고구마튀김, 보리굴비(부세) 4찬, 누룽지(밥), 계절과일, 차류",
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