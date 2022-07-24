import React from 'react';

type Props = {
  question: string;
  answer: string;
};

const Faq = (props: Props) => {
  const { question, answer } = props;
  return (
    <div className={`mt-10`}>
      <dt className={`flex`}>
        <span className={`text-green03 text-[24px] md:text-[30px]`}>Q.</span>
        <span className={`ml-2 md:ml-4 mt-3 md:mt-4`}>{question}</span>
      </dt>
      <dd className={`flex mt-1`}>
        <span className={`text-accent text-[24px] md:text-[30px]`}>A.</span>
        <span className={`ml-2 md:ml-4 mt-3 md:mt-4`}>{answer}</span>
      </dd>
    </div>
  );
};

export default Faq;
