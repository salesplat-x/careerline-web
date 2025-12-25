import { Link } from 'react-router-dom';
import { BodyText, HeadingText } from '../Text';

export const Navbar = () => (
  <nav>
    <BodyText>This is navbar</BodyText>
    <div>
      <Link to="/">
        <HeadingText>Home</HeadingText>
      </Link>
      <Link to="/question">
        <HeadingText>Question</HeadingText>
      </Link>
    </div>
  </nav>
);
