import { Component } from '@angular/core';
import { ShipmentChartsComponent } from "./shipment-charts/shipment-charts.component";
import { ShipmentStatisticsComponent } from "./shipment-statistics/shipment-statistics.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ShipmentChartsComponent, ShipmentStatisticsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  
}
