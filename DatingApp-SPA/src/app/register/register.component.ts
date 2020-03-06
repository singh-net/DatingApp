import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  
  constructor(private authServeice: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.authServeice.register(this.model).subscribe(() =>{
      console.log('Rehistration Successfull');
    }, error => {
      console.log('Errpor');
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('cancel it');
  }

}
