import { ExtraSmallText, SmallText, BodyText, HeadingText, PageTitleText } from './components';
import Button from './components/Button/Button.tsx';

const App = () => (
  <div className="pl-4">
    <ExtraSmallText>Hello World</ExtraSmallText>
    <SmallText>Hello World</SmallText>
    <BodyText>Hello World</BodyText>
    <HeadingText>Hello World</HeadingText>
    <PageTitleText onClick={() => console.warn('clicked')}>Hello World</PageTitleText>
    <div className="w-fit">
      <Button variant="transparent" border="solid">
        Hello World
      </Button>
    </div>
  </div>
);

export default App;
