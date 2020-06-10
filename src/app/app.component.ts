import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { GlobalConstants } from 'src/app/globalConstants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'custom-cakes';
  mediaSub: Subscription;
  constructor(public mediaObserver: MediaObserver) {

  }
  ngOnInit() {
    this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
      console.log(res.mqAlias);
      GlobalConstants.deviceXs = res.mqAlias === "xs" ? true : false;
    });
  }
  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }
}
