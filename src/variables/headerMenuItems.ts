type MenuItem = Readonly<{
  path: string,
  text: string,
}>

export const headerMenuItems: readonly MenuItem[] = [
  {
    path: '/',
    text: 'ホーム',
  },
  {
    path: '/beginner/',
    text: '初めての方へ',
  },
  {
    path: '/price/',
    text: '料金',
  },
  {
    path: '/about/',
    text: '当院について',
  },
  {
    path: '/voices/',
    text: 'お客様の声',
  },
  {
    path: '/knowledge/',
    text: '頭痛・肩こりの豆知識',
  },
  {
    path: '/access/',
    text: 'アクセス',
  },
  {
    path: '/faq/',
    text: 'よくあるご質問',
  },
];
