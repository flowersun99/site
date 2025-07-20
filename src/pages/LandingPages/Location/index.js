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
import LocationInfo from "components/LocationInfo";

// Location images
import location1 from "assets/images/mobile_location/1.jpg";
import location2 from "assets/images/mobile_location/2.png";

function Location() {
  return (
    <PageLayout>
      <HeroSection
        image={location1}
        title="위치"
        subtitle="금다연을 찾아오시는 길"
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
        <LocationInfo
          mapImage={location2}
          layout="mobile"
          showTitle={false}
        />
      </MKBox>
    </PageLayout>
  );
}

export default Location; 