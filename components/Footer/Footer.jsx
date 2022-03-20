import React from "react";

import Image from "next/image";

import styled from "styled-components";
import Link from "next/link";
import { Instagram } from "@styled-icons/bootstrap/Instagram";
import { Facebook2 } from "@styled-icons/icomoon/Facebook2";

const Insta = styled(Instagram)`
  height: 25px;
`;
const Face = styled(Facebook2)`
  height: 25px;
`;

const FooterContainer = styled.footer`
  background-color: ${(props) => props.footercolor};
`;

const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;
const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;
const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;
const FooterLinksTitles = styled.h1`
  font-size: 22.62px;
  margin-bottom: 16px;
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 16px;

  &:hover {
    transition: 0.3s ease-out;
  }
`;

const FooterLinkSocial = styled.h2`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 16px;

  &:hover {
    transition: 0.3s ease-out;
  }
`;

const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
  margin-left: 5px;
  font-size: 16px;
`;
const NextLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 16px;

  &:hover {
    transition: 0.3s ease-out;
  }
`;

const Footer = ({ footerColor }) => {
  return (
    <>
      <FooterContainer footercolor={footerColor}>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinksTitles>Services</FooterLinksTitles>
                <FooterLink passHref href="/kills-boosting">
                  <NextLink>Kills Boost</NextLink>
                </FooterLink>
                <FooterLink passHref href="/rank-boosting">
                  <NextLink>Rank Boost</NextLink>
                </FooterLink>
                <FooterLink passHref href="/acheivement-badges">
                  <NextLink> Acheivment Badges</NextLink>
                </FooterLink>
                <FooterLink passHref href="/Arenas-Boost">
                  <NextLink> Arenas Boost</NextLink>
                </FooterLink>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinksTitles>Explore</FooterLinksTitles>
                <FooterLink passHref href="/">
                  <NextLink> Home</NextLink>
                </FooterLink>
                <FooterLink passHref href="/Authentication/Register">
                  <NextLink> Sign Up</NextLink>
                </FooterLink>
                <FooterLink passHref href="/Authentication/Login">
                  <NextLink> Log-in</NextLink>
                </FooterLink>
                <FooterLink passHref href="/Profile">
                  <NextLink> Profile</NextLink>
                </FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinksTitles>Contact Us</FooterLinksTitles>
                <FooterLink passHref href="/ContactUs">
                  <NextLink> USA</NextLink>
                </FooterLink>
                <FooterLink passHref href="/ContactUs">
                  <NextLink> EU</NextLink>
                </FooterLink>
                <FooterLink passHref href="/ContactUs">
                  <NextLink> Asia</NextLink>
                </FooterLink>
                <FooterLink passHref href="/ContactUs">
                  <NextLink> World-Wide</NextLink>
                </FooterLink>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinksTitles>Socials</FooterLinksTitles>
                <a
                  href="https://www.instagram.com/boostifyofficial/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FooterLinkSocial style={{ marginLeft: "22px" }}>
                    <Insta />
                  </FooterLinkSocial>
                </a>

                <a
                  href="https://www.facebook.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FooterLinkSocial style={{ marginLeft: "21px" }}>
                    <Face />
                  </FooterLinkSocial>
                </a>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <Image
            width={75}
            height={50}
            src={"/assets/images/ssls.png"}
            alt="ssl secured"
          ></Image>
          <p>SSL SECURED</p>
          <Image
            width={300}
            height={100}
            src={"/assets/images/payment-methods.png"}
            alt="ssl secured"
          ></Image>
          <SocialMedia>
            <SocialMediaWrap>
              <WebsiteRights>
                Boostify © {new Date().getFullYear()}. All rights reserved.
              </WebsiteRights>{" "}
            </SocialMediaWrap>{" "}
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
