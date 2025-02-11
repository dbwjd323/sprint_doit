"use client";

import Image from 'next/image';
import { useState, useEffect } from "react";
import * as S from './Header.styles';
import logoDesktop from '../../assets/logo.png';
import logoMobile from '../../assets/logo-mobile.png';

const Header = () => {
  const [logoSrc, setLogoSrc] = useState(logoDesktop);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 375) {
        setLogoSrc(logoMobile);
      } else {
        setLogoSrc(logoDesktop);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <S.Header>
      <Image src={logoSrc} alt="do it logo" />
    </S.Header>
  )
};

export default Header;
