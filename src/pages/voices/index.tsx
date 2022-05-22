import { GetStaticProps, NextPage } from 'next';

import { client } from '@/libs/client';
import { Voices } from '@/types/Voice';

type Props = { voices: Voices };

const VoicesPage: NextPage<Props> = (props) => {
  const { voices } = props;
  return (
    <div>
      <pre>{JSON.stringify(voices, null, '\t')}</pre>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data: Voices = await client.get({ endpoint: 'voices' });

  return {
    props: {
      voices: data.contents,
    },
  };
};

export default VoicesPage;
