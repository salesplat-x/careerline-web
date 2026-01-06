import { Button } from '../Button';
import { DisplayText, MediumText } from '../Text';
import whatsapp from '../../assests/whatsapp.svg';
import heroImg from '../../assests/hero-img.svg';
import group1 from '../../assests/Group1.svg';
import './Hero.scss';
import { PageContainer } from '../PageContainer';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <PageContainer className="hero-main">
        <div className="text-box">
          <DisplayText weight="bold" variant="secondary">
            Find Your Perfect Career Path in
            <span className="red-span-text">Tech and Business</span>
          </DisplayText>

          <MediumText weight="medium">
            Take our simple and quick test to discover the best tech or business course just for you
          </MediumText>
          <div className="btn-box">
            <Button variant="primary" onClick={() => navigate('/question')}>
              Take Free Test
            </Button>
            <Button variant="transparent" border="dotted">
              <img src={whatsapp} alt="whatsapp logo" width="24px" height="24px" /> Take test on
              WhatsApp
            </Button>
          </div>
        </div>
        <div className="hero-img">
          <img src={heroImg} alt="group staff picture" />
        </div>
        <img src={group1} alt="group background image" className="line-decor" />
      </PageContainer>
    </div>
  );
};
