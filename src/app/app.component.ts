import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private typedSubject$ = new Subject<string>();
  typedValue$ = this.typedSubject$.asObservable();

  title = 'beers';

  emitValue(): void {
    this.typedSubject$.next(Math.random().toString());
  }
}
