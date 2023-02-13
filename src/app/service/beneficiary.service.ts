import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Beneficiary } from '../interface/beneficiary';

@Injectable({
  providedIn: 'root',
})
export class BeneficiaryService {
  private apiUrl = 'http://localhost:8081/api/v1/';

  constructor(private http: HttpClient) {}

  getBeneficiaries(): Observable<Beneficiary[]> {
    return this.http
      .get<Beneficiary[]>(this.apiUrl + 'beneficiaries')
      .pipe(tap((beneficiary) => console.log('Beneficiary:::', beneficiary)));
  }
}
