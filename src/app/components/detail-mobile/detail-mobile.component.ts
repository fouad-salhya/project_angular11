import { MobileService } from './../../services/mobile.service';
import { Component, OnInit } from '@angular/core';
import { Mobile } from 'src/app/model/mobile';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessage } from 'flash-messages-angular/module/flash-message';
import { FlashMessagesService } from 'flash-messages-angular';

@Component({
  selector: 'app-detail-mobile',
  templateUrl: './detail-mobile.component.html',
  styleUrls: ['./detail-mobile.component.css']
})
export class DetailMobileComponent implements OnInit {
  mobiles:Mobile
  show:boolean=true
  constructor(
              private mobileService:MobileService,
              private activate:ActivatedRoute,
              private router:Router,
              private flashMessages:FlashMessagesService
              ) { }

  ngOnInit(): void {
    this.activate.params.subscribe(params => {
      this.mobileService.getOne(params.id)
          .subscribe(mobile => {
            this.mobiles = mobile
          })
    })
  }
   
   ajouterPanier() {
     this.show=!this.show
     this.flashMessages.show('produit a ete ajouter au panier',{cssClass:'alert alert-success', timeout:4000})
  
   }  

   Acheter() {
      this.router.navigate(['/'])
   }
        


}
