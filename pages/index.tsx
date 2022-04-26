import type { NextPage } from 'next';
import tw from 'tailwind-styled-components';

const Text = tw.span`
  text-teal-500
`;

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="text-4xl underline font-light">Hello world!</h1>
      <Text>Text red</Text>
    </div>
  );
};

export default Home;
