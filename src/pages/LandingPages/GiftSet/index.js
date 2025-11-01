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

// Custom components
import PageLayout from "components/PageLayout";
import HeroSection from "components/HeroSection";
import GiftSetSection from "components/GiftSetSection";

// Gift set images
import presentFirst from "assets/images/presentSet/first.jpg";
import presentThird from "assets/images/presentSet/third.jpg";
import presentFour from "assets/images/presentSet/four.jpg";
import presentSix from "assets/images/presentSet/six.jpg";

function GiftSet() {
  const giftSets = [
    {
      title: "영광법성포 구운보리굴비 가정용 (5미)",
      image: presentFirst,
      price: "65,000원",
    },
    {
      title: "(추천상품)국내산 참조기 고추장굴비 1구 + 고추장황태 1구 선물세트 (각 500g)",
      image: presentThird,
      price: "110,000원",
    },
    {
      title: "국내산 참조기 고추장굴비 1구 가정용 (500g)",
      image: presentFour,
      price: "69,000원",
    },
    {
      title: "밥도둑 명품 고추장황태 1구 가정용 (500g)",
      image: presentSix,
      price: "35,000원",
    },
  ];

  return (
    <PageLayout>
      <HeroSection
        image={presentFirst}
        title="명품 선물세트"
        subtitle="특허 받은 약선 조리법 소중한 분에게 건강함을 선물하세요"
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
        <GiftSetSection
          giftSets={giftSets}
          layout="mobile"
          showTitle={false}
          showSubtitle={false}
        />
      </MKBox>
    </PageLayout>
  );
}

export default GiftSet; 