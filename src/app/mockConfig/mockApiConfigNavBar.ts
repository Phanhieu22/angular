export const mockApiConfigNavBar = [
  {
    id: 1,
    icon: '',
    type: 'menuItem',
    textNavContent: 'Member management',
    path: 'user/userList',
    children: [],
  },
  {
    id: 2,
    icon: '',
    type: 'group',
    textNavContent: 'Content management',
    children: [
      {
        id: 3,
        icon: '',
        type: 'group',
        textNavContent: 'Main management',
        children: [
          {
            id: 4,
            icon: '',
            type: 'finalItem',
            textNavContent: 'Banner',
            path: 'content/banner/bannerList',
          },
          {
            id: 5,

            icon: '',
            type: 'finalItem',
            textNavContent: 'recommended content',
            path: 'content/main/recommendList',
          },
        ],
      },
    ],
  },
  {
    id: 6,

    icon: '',
    type: 'group',
    textNavContent: 'system management',
    children: [
      {
        id: 7,
        icon: '',
        type: 'group',
        textNavContent: 'custom center management',
        children: [
          {
            id: 8,
            icon: '',
            type: 'finalItem',
            textNavContent: 'notice',
            path: 'content/banner/bannerList',
          },
          {
            id: 9,
            icon: '',
            type: 'finalItem',
            textNavContent: 'FAQ',
            path: 'content/main/recommendList',
          },
        ],
      },
    ],
  },
];
