import { MobileService } from './../../services/mobile.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { Mobile } from 'src/app/model/mobile';

@Component({
  selector: 'app-add-mobile',
  templateUrl: './add-mobile.component.html',
  styleUrls: ['./add-mobile.component.css']
})
export class AddMobileComponent implements OnInit {
  mobiles:Mobile[]
  myMobile = {
    id:0 ,
    name:'',
    prix:0,
    label:'',
    image:""
  }
  constructor( 
              private mobileService:MobileService,
              private router:Router,
              private flashMessage:FlashMessagesService
              ) { }

  ngOnInit(): void {
  }

  createMobile() {
    this.mobileService.create(this.myMobile)
        .subscribe(mobile => {
          this.mobiles = [mobile , ...this.mobiles]
        })
        this.router.navigate(['./'])
  }

}
