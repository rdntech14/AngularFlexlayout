import { Component, Input } from "@angular/core";
import { GlobalConstants } from 'src/app/globalConstants';
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  deviceXs: boolean;

  ngOnInit() {
    this.deviceXs = GlobalConstants.deviceXs;
  }
}
