import { Component, OnInit } from '@angular/core';
import { Role, User } from '@app/_models';
import { AuthenticationService } from '@app/_services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {
  
  user: User;
  constructor(private authenticationService: AuthenticationService) { 
    this.authenticationService.user.subscribe(x => this.user = x);
  }

  ngOnInit(): void {
    
  }

  logout() {
    this.authenticationService.logout();
}

get isAdmin() {
  return this.user && this.user.role === Role.Admin;
}

}
