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
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid";

// Custom components
import PageLayout from "components/PageLayout";
import HeroSection from "components/HeroSection";

// Review images
import review1 from "assets/images/mobile_review/review1.jpg";
import review2 from "assets/images/mobile_review/review2.png";
import review3 from "assets/images/mobile_review/review3.png";
import review4 from "assets/images/mobile_review/review4.jpg";
import review5 from "assets/images/mobile_review/review5.jpg";
import review6 from "assets/images/mobile_review/review6.jpg";

function Review() {
  const reviews = [
    {
      id: 1,
      reviewer: "NAVER 러브**",
      content: "진정한 맛집! 진정성이 가득한 웰빙 한정식 맛집을 찾으신다면 꼭 드셔보시길 추천드립니다",
      image: review2,
    },
    {
      id: 2,
      reviewer: "NAVER 대장금****",
              content: "✔️코스요리 잘되어있음\n✔️가격도 양호\n✔️상견례장소로 딱임!\n✔️엄청 친절하심",
      image: review3,
    },
    {
      id: 3,
      reviewer: "NAVER sky8*****",
      content: "가족모임으로 갔고... 음식도 빨리나오고 따뜻해서 시부모님이 너무 맛있다고 칭찬을 많이 해주셔서 기분이 좋았네요",
      image: review4,
    },
    {
      id: 4,
      reviewer: "NAVER Drea*****",
      content: "상견례, 가족모임, 각종 행사에도 추천드려요! 분위기 넘 고품격스럽고 대접 받는 느낌을 확 받을 수 있었어요~",
      image: review5,
    },
    {
      id: 5,
      reviewer: "NAVER 13***",
      content: "아빠 생신으로 가족들 간단히 밥한끼 하자고 하여 모였는데 분위기도 좋고 특히 엄마가 입이 까다로운데 잘 드시더라고요",
      image: review6,
    }
  ];

  const positiveAspects = [
    { emoji: "😊", text: "음식이 맛있어요", count: 175 },
    { emoji: "💕", text: "친절해요", count: 90 },
    { emoji: "👥", text: "단체모임 하기 좋아요", count: 79 },
    { emoji: "🌿", text: "재료가 신선해요", count: 73 },
    { emoji: "👨‍🍳", text: "코스요리가 알차요", count: 73 },
    { emoji: "🍚", text: "반찬이 잘 나와요", count: 61 },
  ];

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <PageLayout>
      <HeroSection
        image={review1}
        title="후기"
        subtitle="모두가 인정하는 광주 한정식 맛집!"
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
        {/* Content Container */}
        <MKBox
          sx={{
            maxWidth: "600px",
            margin: "0 auto",
            px: 2,
          }}
        >
          {/* 긍정적인 점 섹션 */}
          <MKBox
            sx={{
              mb: 4,
              p: 3,
              borderRadius: "12px",
              bgColor: "#f8f9fa",
              border: "1px solid #e9ecef",
            }}
          >
            <MKBox display="flex" alignItems="center" mb={2}>
              <Icon sx={{ color: "#007bff", mr: 1 }} translate="no" className="notranslate">
                info
              </Icon>
              <MKTypography
                variant="h5"
                color="dark"
                sx={{
                  fontSize: { xs: "1.3rem", md: "1.5rem" },
                  fontWeight: "bold",
                }}
              >
                이런 점이 좋았어요
              </MKTypography>
            </MKBox>
            
            <MKBox display="flex" alignItems="center" mb={3}>
              <Icon sx={{ color: "#28a745", mr: 1 }} translate="no" className="notranslate">
                check_circle
              </Icon>
              <MKTypography
                variant="body2"
                color="text"
                sx={{
                  fontSize: "0.9rem",
                  opacity: 0.8,
                }}
              >
                273회 257명 참여
              </MKTypography>
            </MKBox>

            <Grid container spacing={2}>
              {positiveAspects.map((aspect, index) => (
                <Grid item xs={12} key={index}>
                  <MKBox
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: 1,
                    }}
                  >
                    <MKBox display="flex" alignItems="center">
                      <MKTypography
                        variant="body1"
                        sx={{
                          fontSize: "1.2rem",
                          mr: 1,
                        }}
                      >
                        {aspect.emoji}
                      </MKTypography>
                      <MKTypography
                        variant="body1"
                        color="dark"
                        sx={{
                          fontSize: "0.9rem",
                          fontWeight: "500",
                        }}
                      >
                        {aspect.text}
                      </MKTypography>
                    </MKBox>
                    <MKTypography
                      variant="body2"
                      color="primary"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "0.8rem",
                      }}
                    >
                      {aspect.count}
                    </MKTypography>
                  </MKBox>
                  <MKBox
                    sx={{
                      width: "100%",
                      height: "6px",
                      backgroundColor: "#e9ecef",
                      borderRadius: "3px",
                      overflow: "hidden",
                    }}
                  >
                    <MKBox
                      sx={{
                        width: `${(aspect.count / 175) * 100}%`,
                        height: "100%",
                        backgroundColor: "#007bff",
                        borderRadius: "3px",
                      }}
                    />
                  </MKBox>
                </Grid>
              ))}
            </Grid>
          </MKBox>

          {/* 리뷰 카드들 */}
          <Grid container spacing={3}>
            {reviews.map((review) => (
              <Grid item xs={12} key={review.id}>
                <MKBox
                  sx={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    bgColor: "white",
                    shadow: "lg",
                    border: "1px solid #e9ecef",
                    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  {/* 리뷰 이미지 */}
                  <MKBox
                    component="img"
                    src={review.image}
                    alt={`리뷰 ${review.id}`}
                    sx={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />

                  {/* 리뷰 내용 */}
                  <MKBox sx={{ p: 3 }}>
                    {/* 리뷰어 정보 */}
                    <MKBox display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                                             <MKTypography
                         variant="h6"
                         sx={{
                           fontSize: "1.2rem",
                           fontWeight: "bold",
                           color: "#4CAF50",
                         }}
                       >
                         {review.reviewer}
                       </MKTypography>
                      <MKTypography
                        variant="body2"
                        color="warning"
                        sx={{
                          fontSize: "0.9rem",
                          fontWeight: "bold",
                        }}
                      >
                        {renderStars(review.rating)}
                      </MKTypography>
                    </MKBox>

                    {/* 리뷰 텍스트 */}
                    <MKTypography
                      variant="body1"
                      color="text"
                      sx={{
                        fontSize: "0.95rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {review.content}
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </Grid>
            ))}
          </Grid>
        </MKBox>
      </MKBox>
    </PageLayout>
  );
}

export default Review; 