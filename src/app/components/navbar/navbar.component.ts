import { MobileService } from './../../services/mobile.service';
import { Component, OnInit } from '@angular/core';
import { Mobile } from 'src/app/model/mobile';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
