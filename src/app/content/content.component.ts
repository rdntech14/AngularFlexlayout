import { Component, Input, OnInit } from '@angular/core';
import { ProductDetailService } from '../services/product-detail.service';
import { CakeModel } from '../models/cakeModel';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private productDetailService: ProductDetailService) { }
  @Input() deviceXs: boolean;
  topVal = 0;

  getCakes: CakeModel;
  onScroll(e) {
    let scrollXs = this.deviceXs ? 55 : 73;
    if (e.srcElement.scrollTop < scrollXs) {
      this.topVal = e.srcElement.scrollTop;
    } else {
      this.topVal = scrollXs;
    }
  }
  sideBarScroll() {
    let e = this.deviceXs ? 160 : 130;
    return e - this.topVal;
  }
  ngOnInit() {
    this.getCakes = this.productDetailService.getCakes();
    console.log(this.getCakes.cakes[0].name);
  }
}
