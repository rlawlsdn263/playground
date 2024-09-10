"use client";

import { useEffect } from "react";

const NaverLoginRedirectPage = () => {
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    console.log(code);
  }, []);

  return <div>네이버 로그인 콜백 URL 페이지</div>;
};

export default NaverLoginRedirectPage;
