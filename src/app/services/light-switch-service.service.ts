import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LightSwitchServiceService {

  isLightOn = false

  lightSwitcher(): void{
    if(this.isLightOn === false){
      this.isLightOn=true
    }else{
      this.isLightOn=false
    }
  }
}
