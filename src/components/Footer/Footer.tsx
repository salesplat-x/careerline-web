import { BodyText, SmallText } from '../Text';
import './Footer.scss';

export const Footer = () => (
  <footer className="footer-container text-white d-flex flex-column justify-center items-center gap-4 px-6 text-center">
    {/* Brand */}
    <div className="footer-brand d-flex gap-2 items-center">
      <img src="/image 3.png" alt="CareerLine logo" />
      <BodyText className="text-xl font-semibold text-white">CareerLine AL</BodyText>
    </div>

    {/* Links */}
    <div className="footer-links d-flex gap-4 text-sm flex-wrap justify-center">
      <SmallText className="text-white">Overview</SmallText>
      <SmallText className="text-white">Features</SmallText>
      <SmallText className="text-white">Pricing</SmallText>
      <SmallText className="text-white">Careers</SmallText>
      <SmallText className="text-white">Help</SmallText>
      <SmallText className="text-white">Privacy</SmallText>
    </div>

    {/* Divider */}
    <hr className="hr-divider" />

    {/* Bottom Section */}
    <div className="footer-bottom w-full mt-4 px-6">
      <BodyText className="text-sm footer-color">© 2025 CareerLine. All rights reserved.</BodyText>

      <div className="footer-legal d-flex gap-4">
        <SmallText className="footer-color">Terms</SmallText>
        <SmallText className="footer-color">Privacy</SmallText>
        <SmallText className="footer-color">Cookies</SmallText>
      </div>
    </div>
  </footer>
);

export default Footer;
