import { MobileService } from './../../services/mobile.service';
import { Component, OnInit } from '@angular/core';
import { Mobile } from 'src/app/model/mobile';


@Component({
  selector: 'app-liste-mobile',
  templateUrl: './liste-mobile.component.html',
  styleUrls: ['./liste-mobile.component.css']
})
export class ListeMobileComponent implements OnInit {
   mobiles:Mobile[]
   resultSearch:Mobile[]
   showForms:boolean=true
   myMobile = {
     id:0 ,
     name:'',
     prix:0,
     label:'',
     image:""
   }
   search = ""
  constructor(private mobileService:MobileService) { }

  ngOnInit(): void {
    this.mobileService.getAll()
        .subscribe(mobile => {
          this.resultSearch = this.mobiles = mobile
        })
  }
  deleteMobile(id) {
    this.mobileService.delete(id).subscribe(() => {
      this.mobiles = this.mobiles.filter(mobile => mobile.id != id)
    })
  }

  edit(mobile) {
    this.myMobile = mobile
    this.showForms = !this.showForms

  }

  updateMobile() {
    this.mobileService.update(this.myMobile)
         .subscribe(mobile => {
          this.myMobile = {
            id:0 ,
            name:'',
            prix:0,
            label:'',
            image:''
           }
         })
         this.showForms = true
  }

  searchMobile() {
    this.resultSearch = this.mobiles.filter(mobile => mobile.name.toLocaleLowerCase().includes(this.search.toLocaleLowerCase()))
 }

}
