import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shipment } from '../models/Shipment';

@Injectable({
  providedIn: 'root',
})
export class ShipmentService {
  private apiUrl = 'http://localhost:3000/api/shipments'; // URL to the Node.js API

  constructor(private http: HttpClient) {}

  // Fetch shipment data from Node.js API
  getShipments(): Observable<any[]> {
    return this.http.get<Shipment[]>(this.apiUrl);
  }
}
