import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DadsRegisterService } from 'src/app/Services/dads-register.service';

@Component({
  selector: 'app-final-dads-register',
  templateUrl: './final-dads-register.component.html',
  styleUrls: ['./final-dads-register.component.css']
})
export class FinalDadsRegisterComponent {

  constructor(private router: Router, private formBuilder: FormBuilder, private registerService: DadsRegisterService) {} 

  images: any = ["./assets/User.png"];
  uploadedImages: string[] = ["./assets/User.png"];
  uploadedImage: string[] = [];
  textoCarga: string = '';

  nameAndLast: string = "";
  mail: string = "";
  pass: string = "";
  pass2: string = "";
  location: string = "";
  telNumber: string = "";
  telNumber2: number = 0;
  userInfo: any[] = [];
  daysChoos: boolean[] = [];
  daysArray: string[] = [];

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

  submitButton(event: any) {
    if (this.nameAndLast != "" && this.mail != "" && this.pass != "" && this.pass2 != "" && this.location != "" && this.telNumber != "") {
      if (this.pass != this.pass2) {
        alert("Las contraseñas no coinciden");
      } else {
        let infoBaby = localStorage.getItem("babysInfo");
        if (infoBaby) {
          let newObject3 = JSON.parse(infoBaby);
          newObject3[0] = Number(newObject3[0])
          this.userInfo.push(newObject3);
        }

        let infoSkills = localStorage.getItem('skillsChoosed');
        if (infoSkills) {
          let newObject = JSON.parse(infoSkills);
          this.userInfo.push(newObject);
        }

        let infoDays = localStorage.getItem('daysChoosed');
        if (infoDays) {
          let newObject = JSON.parse(infoDays);
          if(newObject[0] == true) {
            this.daysArray.push("MONDAY");
          }
          if(newObject[1] == true) {
            this.daysArray.push("TUESDAY");
          }
          if(newObject[2] == true) {
            this.daysArray.push("WEDNESDAY");
          }
          if(newObject[3] == true) {
            this.daysArray.push("THURSDAY");
          }
          if(newObject[4] == true) {
            this.daysArray.push("FRIDAY");
          }
          if(newObject[5] == true) {
            this.daysArray.push("SATURDAY");
          }
          if(newObject[6] == true) {
            this.daysArray.push("SUNDAY");
          }
          this.userInfo.push(this.daysArray);
        }

        let infoHours = localStorage.getItem('hoursChoosed');
        if (infoHours) {
          let newObject2 = JSON.parse(infoHours);
          if(newObject2[0] == true) {
            newObject2[1] = false;
            newObject2[2] = false;
            this.userInfo.push("MORNING");  
          }
          if(newObject2[1] == true) {
            newObject2[0] = false;
            newObject2[2] = false;
            this.userInfo.push("AFTERNOON");  
          }
          if(newObject2[2] == true) {
            newObject2[1] = false;
            newObject2[0] = false;
            this.userInfo.push("NIGHT");  
          }
        }
        
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
        this.userInfo.push(JSON.stringify(this.uploadedImages));
        
        console.log(this.userInfo);

        this.registerService.register(this.userInfo).subscribe(res => {
          if(res) {
            console.log("respuesta de servicio: ", res)
          }
        });
      }
      alert("Se ha registrado correctamente");
      this.router.navigateByUrl('HomePage')
    }
  }
}