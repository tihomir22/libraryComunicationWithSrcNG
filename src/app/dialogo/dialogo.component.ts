import { Component, OnInit } from '@angular/core';
import { BehaviourServiceService } from '../behaviour-service.service';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.scss']
})


export class DialogoComponent implements OnInit {

  constructor(private sujeto: BehaviourServiceService) { }

  ngOnInit() {
    this.sujeto.bulma$.subscribe((data: dialogMessage) => {
      if (data != null) {
        console.log(data.valorDialogo)
        this.display = data.valorDialogo;
        this.miraMiHuevo = data.timestamp + "";
      }
    })
  }



  display: boolean = false;
  public miraMiHuevo: string = '';

}

export interface dialogMessage {
  valorDialogo: boolean;
  timestamp: number;
}

