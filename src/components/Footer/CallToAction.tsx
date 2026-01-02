import { BodyText, SubheadingText } from '../Text';
import { Button } from '../Button';
import { LuChevronRight } from 'react-icons/lu';
import { PageContainer } from '../PageContainer';

export const CallToAction = () => (
  <PageContainer>
    <div className="cta">
      <SubheadingText weight="medium" variant="black">
        Ready To Discover And Begin Your Career Path?
      </SubheadingText>
      <BodyText>
        Join people who have found their perfect career path. Start the free test today.
      </BodyText>
      <Button variant="primary" className="mx-auto w-fit">
        <BodyText variant="white">Take Test</BodyText>
        <LuChevronRight size={24} />
      </Button>
    </div>
  </PageContainer>
);
