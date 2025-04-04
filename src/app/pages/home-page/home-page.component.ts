import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ButtonModule } from 'primeng/button';
import { LayoutService } from "../../layout/service/app.layout.service";
import { Router } from "@angular/router";
import { DividerModule } from "primeng/divider";
import { StyleClassModule } from "primeng/styleclass";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ButtonModule, DividerModule, CommonModule, StyleClassModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(public layoutService: LayoutService, public router: Router) {
  }
}
