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
import presentSecond from "assets/images/presentSet/second.jpg";
import presentThird from "assets/images/presentSet/third.jpg";
import presentFour from "assets/images/presentSet/four.jpg";
import presentFive from "assets/images/presentSet/five.jpg";
import presentSix from "assets/images/presentSet/six.jpg";

function GiftSet() {
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