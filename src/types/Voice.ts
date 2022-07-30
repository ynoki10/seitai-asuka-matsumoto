export type Voice = Readonly<{
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
  customerInfo: CustomerInfo;
  image: Readonly<{
    url: string;
    height: number;
    width: number;
  }>;
  showTopPage: boolean;
}>;

type CustomerInfo = Readonly<{
  fieldId: 'customerInfo';
  name: string;
  age: string;
  gender: string;
}>;
