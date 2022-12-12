

export interface groupNavigation {
  id: number;
  icon: string;
  type: 'group';
  path : string | undefined;
  textNavContent: string;
  children: any[];
}
