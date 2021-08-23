import {CustomerType} from './customerType';

export interface Customer {
  id: number;
  code: string;
  name: string;
  customerType: CustomerType;
  birthday: string;
  idCard: string;
  phone: string;
  email: string;
  address: string;
}

export interface CustomerResponse {
  customer: Customer[];
}

