import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home.component';
import { DayPickerComponent } from './components/day-picker.component';
import { ColorPickerComponent } from './components/color-picker.component';
import { SelectComponent } from './components/select.component';
import { HighChartsComponent } from './components/high-charts.component';
import { OverlayersComponent } from './components/overlayers.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'day-picker', component: DayPickerComponent },
  { path: 'select', component: SelectComponent },
  { path: 'color-picker', component: ColorPickerComponent },
  { path: 'highcharts', component: HighChartsComponent },
  { path: 'overlayers', component: OverlayersComponent },
  { path: '',  redirectTo: '/home', pathMatch: 'full' }
];

export const APP_ROUTER_PROVIDERS: ModuleWithProviders = RouterModule.forRoot(routes);
export const APP_ROUTER_COMPONENTS = [
  HomeComponent,
  DayPickerComponent,
  ColorPickerComponent,
  SelectComponent,
  HighChartsComponent,
  OverlayersComponent
];