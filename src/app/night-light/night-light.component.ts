import { Component } from '@angular/core';
import { LightSwitchServiceService } from '../services/light-switch-service.service';

@Component({
  selector: 'app-night-light',
  templateUrl: './night-light.component.html',
  styleUrls: ['./night-light.component.css'],
})
export class NightLightComponent {
  constructor(private lightSwitchService: LightSwitchServiceService) {}

  isLightOn = this.lightSwitchService.isLightOn;

  toggleLight() {
    this.lightSwitchService.lightSwitcher();
    this.isLightOn = this.lightSwitchService.isLightOn;
  }
}
