import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { dialogMessage } from './dialogo/dialogo.component';

@Injectable({
  providedIn: 'root'
})
export class BehaviourServiceService {

  private dembow = new BehaviorSubject<dialogMessage>(null);

  // No se utiliza directamente el BehaviorSubject (buena practica)
  // Se canaliza su uso a través de un observable que será público.
  // Este observable llamará quién quiera ver el último mensaje que se dejó.
  bulma$ = this.dembow.asObservable();

  // Almacenar mensaje, listo para mostrarlo a quién lo pida.
  enviar(mensaje: dialogMessage) {
    // function que llamará quien quiera transmitir un mensaje.
    this.dembow.next(mensaje);
  }

  constructor() { }
}
