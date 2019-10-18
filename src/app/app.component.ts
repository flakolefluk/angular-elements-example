import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('comp', { static: true }) comp;

  ngAfterViewInit() {
    this.comp.nativeElement.addEventListener('myOutput', (e) => {
      console.log(e.detail );
    });
  }
}
