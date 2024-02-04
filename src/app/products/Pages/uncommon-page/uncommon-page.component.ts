import {Component} from '@angular/core';
import {interval, Observable, tap} from "rxjs";

type Gender = 'male' | 'female';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'Javier';
  public gender: Gender = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }

  changeClient() {
    this.name = this.name === 'Javier' ? 'Maria' : 'Javier';
    this.gender = this.name === 'Maria' ? 'female' : 'male';
  }

  // i18nPlural
  public clients: string[] = ['Maria', 'Xiomara', 'Dario', 'Xiodary', 'Celeste', 'Javier'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 personas esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  deleteClient() {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Fernando',
    age: 45,
    address: 'Ottawa, canada',
  }

  //Async Pipe
  public observableTimerCount: number = 0;
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => {
      console.log('tap:', value)
      this.observableTimerCount += 1;
    }),
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
      console.log('Tenemos data en la promesa.');
      this.person.name = 'otro nombre';
    }, 3500);
  })

}
