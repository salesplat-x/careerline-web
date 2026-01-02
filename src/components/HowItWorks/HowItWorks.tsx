import { HiChartBar } from 'react-icons/hi';
import { MdOutlineRecommend } from 'react-icons/md';
import { AiOutlineGlobal } from 'react-icons/ai';
import { BodyText, HeroText, MediumText, SubheadingText } from '../Text';
import styles from './HowItWorks.module.scss';
import cn from 'classnames';

export const HowItWorks = () => {
  const ICON_SIZE = 40;

  const howItWorks = [
    {
      icon: <HiChartBar size={ICON_SIZE} />,
      step: 'Step 1',
      label: 'Take a test',
      description: 'Answer a few questions about your basic skill and interest',
    },
    {
      icon: <MdOutlineRecommend size={ICON_SIZE} />,
      step: 'Step 2',
      label: 'Get your recommendation',
      description: 'Top 3 recommended tech courses with a personalized fitness score',
    },
    {
      icon: <AiOutlineGlobal size={ICON_SIZE} />,
      step: 'Step 3',
      label: 'Start learning',
      description: 'Begin your tech journey with our carefully structured courses',
    },
  ];

  return (
    <div>
      <div className="text-center py-13">
        <HeroText variant="black" weight="bold">
          How It works
        </HeroText>
        <MediumText weight="medium">
          Discover your tech or business path in 3 simple ways
        </MediumText>
      </div>
      <div
        className={cn(
          styles.howItWorkContainer,
          'd-flex gap-12 py-12 px-20 secondary-bg text-white',
        )}
      >
        {howItWorks.map(({ icon, step, label, description }) => (
          <div key={step} className="">
            <div className="d-flex items-end mb-6 justify-between">
              {icon}
              <BodyText className="text-white">{step}</BodyText>
            </div>
            <div>
              <SubheadingText weight="medium" className="text-white mb-4">
                {label}
              </SubheadingText>
              <BodyText className="text-white" weight="light">
                {description}
              </BodyText>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
