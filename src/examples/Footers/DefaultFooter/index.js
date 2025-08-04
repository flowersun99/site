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

// @mui material components

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import blacklogo from "assets/images/logo.png";

function DefaultFooter() {
  return (
    <MKBox
      component="footer"
      sx={{
        backgroundColor: "#2c3e50",
        color: "white",
        py: 6,
        px: 3,
      }}
    >
      <MKBox
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 2,
          width: "100%",
        }}
      >
        {/* 로고 */}
        <MKBox
          component="img"
          src={blacklogo}
          alt="금다연"
          sx={{
            height: "60px",
            width: "auto",
            objectFit: "contain",
          }}
        />

        {/* 회사 정보 */}
        <MKBox
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            alignItems: "flex-start",
            textAlign: "left",
            width: "100%",
          }}
        >
          <MKTypography
            variant="body1"
            color="white"
            sx={{
              fontSize: "0.9rem",
              fontWeight: 500,
            }}
          >
            상호명 : 금다연 한정식
          </MKTypography>
          <MKTypography
            variant="body1"
            color="white"
            sx={{
              fontSize: "0.9rem",
              fontWeight: 500,
            }}
          >
            사업자 등록번호: 409-05-88741
          </MKTypography>
          <MKTypography
            variant="body1"
            color="white"
            sx={{
              fontSize: "0.9rem",
              fontWeight: 500,
            }}
          >
            주소 : 광주 서구 상무연하로 72 골든유토피아 202호
          </MKTypography>
        </MKBox>

        {/* 저작권 정보 */}
        <MKBox
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
            width: "100%",
          }}
        >
          <MKTypography
            variant="body2"
            color="white"
            textAlign="center"
            sx={{
              fontSize: "0.8rem",
              opacity: 0.8,
            }}
          >
            © Geumdayeon. All rights reserved
          </MKTypography>
        </MKBox>
      </MKBox>
    </MKBox>
  );
}

export default DefaultFooter;
