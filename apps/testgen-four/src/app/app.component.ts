import { Component } from '@angular/core';

@Component({
  selector: 'testgen-four-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'testgen-four';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
