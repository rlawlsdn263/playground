"use client";

const NaverLoginButton = () => {
  const NAVER_CLIENT_ID = process.env.NEXT_PUBLIC_API_NAVER_CLIENT_ID; // 발급받은 클라이언트 아이디
  const REDIRECT_URI = "http://localhost:3000/naverLogin"; // Callback URL
  const STATE = "false";
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;

  const handleNaverLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  };

  return (
    <>
      <button onClick={handleNaverLogin}>네이버 로그인</button>
    </>
  );
};

export default NaverLoginButton;
