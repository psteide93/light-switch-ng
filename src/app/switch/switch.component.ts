import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
})
export class SwitchComponent {

  @Input() isLightOn!: boolean;

  @Output() onToggleLightSwitch = new EventEmitter<Event>();

  toggleLightSwitch(isLightOn: boolean) {
    this.onToggleLightSwitch.emit();
  }
}
