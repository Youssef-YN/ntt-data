import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ButtonModule } from 'primeng/button';
import { LayoutService } from "../../layout/service/app.layout.service";
import { Router } from "@angular/router";
import { DividerModule } from "primeng/divider";
import { StyleClassModule } from "primeng/styleclass";
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ButtonModule, DividerModule, CommonModule, StyleClassModule, ChartModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  constructor(public layoutService: LayoutService, public router: Router) {
  }

  activeChart = 'line';

  chartTypes = [
    { label: 'Line', value: 'line' },
    { label: 'Bar', value: 'bar' },
    { label: 'Stacked Area', value: 'stackedArea' },
    { label: 'Pie', value: 'pie' },
    { label: 'Scatter', value: 'scatter' }
  ];

  lineData: any;
  barData: any;
  stackedAreaData: any;
  pieData: any;
  scatterData: any;

  lineOptions: any;
  barOptions: any;
  stackedAreaOptions: any;
  pieOptions: any;
  scatterOptions: any;

  ngOnInit() {
    this.initializeLineChart();
    this.initializeBarChart();
    this.initializeStackedAreaChart();
    this.initializePieChart();
    this.initializeScatterChart();
  }

  initializeLineChart() {
    this.lineData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr'],
      datasets: [
        {
          label: 'Sales',
          data: [65, 59, 80, 81],
          fill: false,
          borderColor: '#42A5F5',
          tension: 0.4
        }
      ]
    };

    this.lineOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top'
        }
      }
    };
  }

  initializeBarChart() {
    this.barData = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          label: 'Votes',
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          data: [12, 19, 3]
        }
      ]
    };

    this.barOptions = {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        }
      }
    };
  }

  initializeStackedAreaChart() {
    this.stackedAreaData = {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        {
          label: 'Mobile',
          data: [100, 150, 180, 200],
          borderColor: '#66BB6A',
          backgroundColor: 'rgba(102,187,106,0.4)',
          fill: true,
          tension: 0.4,
          stack: 'stack1'
        },
        {
          label: 'Desktop',
          data: [120, 130, 140, 160],
          borderColor: '#FFA726',
          backgroundColor: 'rgba(255,167,38,0.4)',
          fill: true,
          tension: 0.4,
          stack: 'stack1'
        }
      ]
    };

    this.stackedAreaOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {},
        y: {
          stacked: true
        }
      }
    };
  }

  initializePieChart() {
    this.pieData = {
      labels: ['Chrome', 'Safari', 'Firefox'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726']
        }
      ]
    };

    this.pieOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    };
  }

  initializeScatterChart() {
    this.scatterData = {
      datasets: [
        {
          label: 'Scatter Dataset',
          data: [
            { x: -10, y: 0 },
            { x: 0, y: 10 },
            { x: 10, y: 5 },
            { x: 15, y: -10 }
          ],
          backgroundColor: '#42A5F5'
        }
      ]
    };

    this.scatterOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          type: 'linear',
          position: 'bottom'
        }
      }
    };
  }
}

