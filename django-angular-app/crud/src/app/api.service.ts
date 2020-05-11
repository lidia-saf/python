import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl = 'http://127.0.0.1:8000';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});


  constructor(private http: HttpClient) { }

  getAllSongs(): Observable<any> {
    return this.http.get(this.baseurl + '/songs', {
      headers: this.httpHeaders
    });
  }

  getOneSong(id): Observable<any> {
    return this.http.get(`${this.baseurl}/songs/${id}/`, {
      headers: this.httpHeaders
    });
  }

  updateSong(song): Observable<any> {
    const body = { name: song.name, artist: song.artist, year: song.year };
    return this.http.put(`${this.baseurl}/songs/${song.id}/`, body, {
      headers: this.httpHeaders
    });
  }

  createSong(song): Observable<any> {
    const body = { name: song.name, artist: song.artist, year: song.year };
    return this.http.post(`${this.baseurl}/songs/`, body, {
      headers: this.httpHeaders
    });
  }

  deleteSong(id): Observable<any> {
    return this.http.delete(`${this.baseurl}/songs/${id}/`, {
      headers: this.httpHeaders
    });
  }
}
