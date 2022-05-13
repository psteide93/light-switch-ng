import { Component} from '@angular/core';

@Component({
  selector: 'app-night-light',
  templateUrl: './night-light.component.html',
  styleUrls: ['./night-light.component.css']
})
export class NightLightComponent {
  isLightOn = false

  lightSwitcher(){
    if(this.isLightOn === false){
      this.isLightOn=true
    }else{
      this.isLightOn=false
    }
  }

}
