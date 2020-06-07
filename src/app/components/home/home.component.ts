import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ProductDetailService } from 'src/app/services/product-detail.service';
import { CakeModel } from 'src/app/models/cakeModel';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  mediaSub: Subscription;
  deviceXs: boolean;
  topVal = 0;

  getCakes: CakeModel;

  constructor(public mediaObserver: MediaObserver, private productDetailService: ProductDetailService) { }

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

    this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
      console.log(res.mqAlias);
      this.deviceXs = res.mqAlias === "xs" ? true : false;
    })


    this.getCakes = this.productDetailService.getCakes();
    console.log(this.getCakes.cakes[0].name);
  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }

}
