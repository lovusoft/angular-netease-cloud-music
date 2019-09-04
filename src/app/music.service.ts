import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  get默认搜索关键词() {
    return this.http.get('/search/default')
      .pipe(
        retry(3),
        catchError(this.handleError<object>('get默认搜索关键词', [])));
  }

  搜索歌曲(keywords: string) {
    return this.http.get('/search?keywords=' + keywords)
      .pipe(
        retry(3),
        catchError(this.handleError<object>('搜索歌曲', [])));
  }
}

