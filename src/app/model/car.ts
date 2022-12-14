import { carKey } from './key';

export interface car {
  width: number;
  height: number;
  brand: string;
  color: string;
  startTheCar: (key: carKey) => 'start';
}
