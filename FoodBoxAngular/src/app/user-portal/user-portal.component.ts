import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-portal',
  templateUrl: './user-portal.component.html',
  styleUrls: ['./user-portal.component.css']
})
export class UserPortalComponent {

  constructor(private router: Router) { }

  btnClick(){
    this.router.navigate(['./user-dashboard'])
  }
}
