import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Output() toggleEvent = new  EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onSidenavToggle() {
    this.toggleEvent.emit();
  }

}
