export type Voices = {
  contents: Voice[];
};

export type Voice = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
  customerInfo: CustomerInfo;
  image: {
    url: string;
    height: number;
    width: number;
  };
  tag: string;
};

type CustomerInfo = {
  fieldId: 'customerInfo';
  name: string;
  age: string[];
  gender: string[];
};
