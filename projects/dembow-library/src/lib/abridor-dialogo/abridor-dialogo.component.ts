import { Component, OnInit } from '@angular/core';
import { BehaviourServiceService } from 'src/app/behaviour-service.service';

@Component({
  selector: 'lib-abridor-dialogo',
  templateUrl: './abridor-dialogo.component.html',
  styleUrls: ['./abridor-dialogo.component.scss']
})
export class AbridorDialogoComponent implements OnInit {
  private abierto: boolean = false;
  constructor(private sujeto: BehaviourServiceService) { }

  ngOnInit() {
  }

  public onClick() {
    this.sujeto.enviar({ valorDialogo: this.abierto, timestamp: + new Date() });
    this.abierto = !this.abierto;
  }

}
