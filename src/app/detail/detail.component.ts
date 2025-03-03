import { Component, OnInit } from '@angular/core';
import { DataService,Detail} from '../data.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  username=this.authService.getLoggedInUserName();
  details:any;
  constructor(private dataService: DataService,private authService: AuthService) { }

  ngOnInit() {
    this.displayListDetail();
  }
  displayListDetail() {
    this.dataService.getListDetail(this.username)
    .subscribe((data: Array<Detail>) => this.details = data)
    }
    
}
