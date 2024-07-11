import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Demo Project';
  date = '6/07/24';
  // interpolation ts => html {{ }}
  // event bindig  ts => html ( )
  // property binding  ts => html [ ]
  // two way binding  ts <=> html [( )]
  name = 'parikshat';
  age = 26;
  sport = 'football';
  isDisable = false;

  valueOfInput = 'something';

  getDetails() {
    console.log(this.name, this.age, this.sport);
    this.isDisable = true;
  }
  changeName(name: string) {
    this.name = name;
  }

  enableButton() {
    this.isDisable = false;
  }

  showInputVal() {
    console.log(this.valueOfInput, 'value of input');
  }
}
