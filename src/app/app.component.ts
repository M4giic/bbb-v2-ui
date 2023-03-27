import { Component, OnInit } from '@angular/core';
import { User } from './src/models/user';
import { AccountService } from './src/service/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bbb-ui';


constructor( private accountService: AccountService)
{

}
ngOnInit()
  {
    this.setCurrentUser();
  }

  setCurrentUser(){
    const user = localStorage.getItem('user');
    if(user)
    {
      this.accountService.setUser(JSON.parse(user));
    }
  }
}
