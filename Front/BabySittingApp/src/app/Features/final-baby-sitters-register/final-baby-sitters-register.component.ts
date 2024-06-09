import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-final-baby-sitters-register',
  templateUrl: './final-baby-sitters-register.component.html',
  styleUrls: ['./final-baby-sitters-register.component.css']
})
export class FinalBabySittersRegisterComponent {
  
  constructor(private router: Router, private formBuilder: FormBuilder) {} 

  images: any = ["./assets/User.png"];
  uploadedImages: string[] = ["./assets/User.png"];
  textoCarga: string = '';
  
  nameAndLast: string = "";
  mail: string = "";
  pass: string = "";
  pass2: string = "";
  location: string = "";
  telNumber: string = "";
  userInfo: any[] = [];


  reemplazarImagen(event: any): void {
    const files = event.target.files;
    this.images = files;
    this.uploadedImages.length = 0;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            this.uploadedImages.push(reader.result as string);
          }; 
        }
        if (i == files.length-1) {
          this.textoCarga = '(' + files.length + ') Imágenes seleccionadas'
        }
      }    
    }
   
  }


  submitButton() {
    if (this.nameAndLast != "" && this.mail != "" && this.pass != "" && this.pass2 != "" && this.location != "" && this.telNumber != "") {
      if (this.pass != this.pass2) {
        alert("Las contraseñas no coinciden");
      } else {
        this.userInfo.push(localStorage.getItem("expInfo"));
        this.userInfo.push(localStorage.getItem("hoursChoosed"));
        this.userInfo.push(localStorage.getItem("skillsChoosed"));
        this.userInfo.push(localStorage.getItem("daysChoosed"));
        let nameArray= [];
        nameArray.push(this.nameAndLast.split(" "));
        if(nameArray.length > 0) {
          this.userInfo.push(nameArray[0][0]);
          this.userInfo.push(nameArray[0][nameArray.length]);
        } else {
          this.userInfo.push(nameArray[0][0]);
          this.userInfo.push(nameArray[0][1]);
        }
        this.userInfo.push(this.mail);
        this.userInfo.push(this.pass);
        this.userInfo.push(this.location);
        this.userInfo.push(this.telNumber);
        alert("Se ha registrado correctamente");
        this.router.navigateByUrl('HomePage')
      }
    }
  }
}
