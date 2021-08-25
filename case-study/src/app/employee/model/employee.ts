import {Division} from './division';
import {EducationDegree} from './educationDegree';
import {Positions} from './position';

export interface Employee {
  id: number;
  code: string;
  name: string;
  birthday: string;
  idCard: string;
  salary: string;
  phone: string;
  email: string;
  address: string;
  position: Positions;
  division: Division;
  educationDegree: EducationDegree;
}
