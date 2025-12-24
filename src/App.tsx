import { ExtraSmallText, SmallText, BodyText, HeadingText, PageTitleText } from './components';

const App = () => (
  <div>
    <ExtraSmallText color="success">Hello World</ExtraSmallText>
    <SmallText>Hello World</SmallText>
    <BodyText>Hello World</BodyText>
    <HeadingText color="error">Hello World</HeadingText>
    <PageTitleText>Hello World</PageTitleText>
  </div>
);

export default App;
