import { autoGeneratesIdNumber } from '../tools/autoGeneratesIdNumber';

export const configNavBar = [
  {
    id: autoGeneratesIdNumber(),
    icon: '../../../assets/icon/profile-off.svg',
    type: 'menuItem',
    textNavContent: 'Member management',
    path: 'user/userList',
    children: [],
  },
  {
    id: autoGeneratesIdNumber(),
    icon: '../../../assets/icon/contents-inactive.svg',
    type: 'group',
    textNavContent: 'Content management',
    children: [
      {
        id: autoGeneratesIdNumber(),
        icon: '',
        type: 'group',
        textNavContent: 'Main management',
        children: [
          {
            id: autoGeneratesIdNumber(),
            icon: '',
            type: 'finalItem',
            textNavContent: 'Banner',
            path: 'content/banner/bannerList',
          },
          {
            id: autoGeneratesIdNumber(),

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
    id: autoGeneratesIdNumber(),
    icon: '../../../assets/icon/setting-inactive.svg',
    type: 'group',
    textNavContent: 'system management',
    children: [
      {
        id: autoGeneratesIdNumber(),
        icon: '',
        type: 'group',
        textNavContent: 'custom center management',
        children: [
          {
            id: autoGeneratesIdNumber(),
            icon: '',
            type: 'finalItem',
            textNavContent: 'notice',
            path: 'content/banner/bannerList',
          },
          {
            id: autoGeneratesIdNumber(),
            icon: '',
            type: 'finalItem',
            textNavContent: 'FAQ',
            path: 'content/main/recommendList',
          },
        ],
      },
    ],
  },
  {
    id: autoGeneratesIdNumber(),
    icon: '../../../assets/icon/chart-inactive.svg',
    type: 'group',
    textNavContent: 'Statistical management',
    children: [],
  },

  //
  {
    id: autoGeneratesIdNumber(),
    icon: '../../../assets/icon/printAnalysis-inactive.svg',
    type: 'group',
    textNavContent: 'Print analysis',
    children: [
      {
        id: autoGeneratesIdNumber(),
        icon: '',
        type: 'menuItem',
        textNavContent: 'Print information',
        path: 'printAnalysis/printAnalysisStatics',
        children: [],
      },
      {
        id: autoGeneratesIdNumber(),
        icon: '',
        type: 'menuItem',
        textNavContent: 'Print count',
        path: 'printAnalysis/printAnalysisCnt',
        children: [],
      },
      {
        id: autoGeneratesIdNumber(),
        type: 'menuItem',
        textNavContent: 'Print error analysis',
        path: 'printAnalysis/printErrAnalysis',
        children: [],
      },
    ],
  },
  {
    id: autoGeneratesIdNumber(),
    icon: '../../../assets/icon/push-inactive.svg',
    type: 'group',
    textNavContent: 'Push alarm',

    children: [],
  },
  {
    id: autoGeneratesIdNumber(),
    icon: '../../../assets/icon/setting-inactive.svg',
    type: 'group',
    textNavContent: 'Test account management',

    children: [],
  },
  {
    id: autoGeneratesIdNumber(),
    icon: '../../../assets/icon/admin-inactive.svg',
    type: 'group',
    textNavContent: 'Admin right',

    children: [],
  },
];
