import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { RedProject } from './RedProject';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AddRedService {
  
  API_URL = 'http://127.0.0.1:8000/api/post_proyecto_red/';

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  addRed(name: String, type: String, folder: String, redId: String): Observable<any> {
    var obj = { nombre: name, tipo: type, carpeta: folder, RED: redId};
    this.httpClient.post(this.API_URL, JSON.stringify(obj), httpOptions).subscribe((data: Response) => {
      if (data[0].fields.nombre == name) {
        
      } else {
        
      }
    });
    //this.router.navigate(['/']);
    return of(obj);
  }
}
