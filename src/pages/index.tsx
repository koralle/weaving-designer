import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { SyntheticEvent } from 'react';

import { Button } from '../components/Button';

const Home: NextPage = () => {
  const router = useRouter();

  const onClick = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(e);
    await router.push('/draft-editor');
  };

  return (
    <>
      <Button
        appearance='primary'
        onClick={onClick}
      >
        新規作成
      </Button>
    </>
  );
};

export default Home;
