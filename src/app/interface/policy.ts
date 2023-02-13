import { Beneficiary } from './beneficiary';
import { Client } from './client';
import { Product } from './product';

export interface Policy {
  id: number;
  client: Client;
  product: Product;
  policyNumber: string;
  beneficiaries: Beneficiary[];
  issueDate: Date;
  coverageStartDate: Date;
  coverageEndDate: Date;
}
