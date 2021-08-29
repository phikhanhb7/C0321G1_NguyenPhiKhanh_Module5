import {ServiceType} from './serviceType';
import {RentType} from './rentType';

export interface Service {
  id: number;
  code: string;
  name: string;
  area: number;
  cost: number;
  maxPeople: number;
  rentType: RentType;
  serviceType: ServiceType;
  standardRoom: string;
  description: string;
  numberOfFloors: number;
}
