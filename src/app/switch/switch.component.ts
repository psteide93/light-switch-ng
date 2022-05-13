import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
})
export class SwitchComponent {

  @Output() onToggleLightSwitch = new EventEmitter<Event>();

  toggleLightSwitch() {
    this.onToggleLightSwitch.emit();
  }
}
