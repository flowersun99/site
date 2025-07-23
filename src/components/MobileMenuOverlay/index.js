/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import Icon from "@mui/material/Icon";

function MobileMenuOverlay({ isOpen, onClose }) {
  const menuItems = [
    { name: "금다연 이야기 Story", path: "/about" },
    { name: "위치 Location", path: "/location" },
    { name: "메뉴 Menu", path: "/menu" },
    { name: "명품 선물세트 Premium gift set", path: "/gift-set" },
    { name: "후기 Review", path: "/review" },
  ];

  if (!isOpen) return null;

  return (
    <MKBox
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        zIndex: 9999,
        display: { xs: "block", md: "none" },
        transform: "translateX(0)",
        transition: "transform 0.3s ease-in-out",
        overflowY: "auto",
      }}
    >
      {/* 뒤로가기 버튼 */}
      <MKBox
        onClick={onClose}
        sx={{
          position: "absolute",
          top: "20px",
          left: "20px",
          color: "white",
          cursor: "pointer",
          zIndex: 10000,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon sx={{ fontSize: "4rem", backgroundColor: "white" }}>arrow_back</Icon>
      </MKBox>

      {/* 메뉴 항목들 */}
      <MKBox
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          px: 3,
        }}
      >
        {menuItems.map((item, index) => (
          <MKBox
            key={index}
            component={Link}
            to={item.path}
            onClick={onClose}
            sx={{
              display: "block",
              width: "100%",
              py: 3,
              px: 2,
              color: "white",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
              textAlign: "center",
              fontSize: "1.1rem",
              fontWeight: "bold",
              transition: "all 0.3s ease",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <span style={{ color: "white" }}>{item.name}</span>
          </MKBox>
        ))}
      </MKBox>

      {/* 스크롤 표시 */}
      <MKBox
        sx={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Icon
          sx={{
            color: "white",
            fontSize: "2rem",
            animation: "bounce 2s infinite",
            "@keyframes bounce": {
              "0%, 20%, 50%, 80%, 100%": {
                transform: "translateY(0)",
              },
              "40%": {
                transform: "translateY(-10px)",
              },
              "60%": {
                transform: "translateY(-5px)",
              },
            },
          }}
        >
          keyboard_arrow_down
        </Icon>
      </MKBox>
    </MKBox>
  );
}

MobileMenuOverlay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MobileMenuOverlay; 