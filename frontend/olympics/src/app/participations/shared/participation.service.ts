import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Participation} from './participation.model';

@Injectable()
export class ParticipationService {

  private participationsUrl = 'https://localhost:44397/api/Participation';

  constructor(private httpClient: HttpClient) {
  }

  getParticipations(): Observable<Participation[]> {
    return this.httpClient
      .get<Participation[]>(this.participationsUrl);
  }

  deleteParticipation(participationId: number): Observable<any> {
    return this.httpClient
      .delete<any>(this.participationsUrl + '/' + participationId);
  }

  updateParticipation(participation: Participation): Observable<any> {
    return this.httpClient
      .put<any>(this.participationsUrl, participation);
  }

  addParticipation(participation: Participation): Observable<any> {
    return this.httpClient
      .post<any>(this.participationsUrl, participation);
  }

}
