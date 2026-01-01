import { Button } from '../Button';
import { BodyText, DisplayText } from '../Text';
import './Hero.scss';
const Hero = () => (
  <div className="hero">
    <div className="hero-main">
      <div className="text-box">
        <DisplayText weight="bold" variant="secondary">
          Find Your Perfect Career Path in
          <span className="red-span-text">Tech and Business</span>
        </DisplayText>

        <BodyText weight="medium">
          Take our simple and quick test to discover the best tech or business course just for you
        </BodyText>
        <div className="btn-box">
          <Button>Take Free Test</Button>
          <Button variant="transparent" border="dotted">
            <img src="whatsapp.svg" alt="whatsapp logo" width="24px" height="24px" /> Take test on
            WhatsApp
          </Button>
        </div>
      </div>
      <div className="hero-img">
        <img src="hero-img.jpg" alt="" />
      </div>
      <img src="Group1.svg" alt="" className="line-decor" />
    </div>
  </div>
);

export default Hero;
