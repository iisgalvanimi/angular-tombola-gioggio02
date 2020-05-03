import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'caneva-tombola';
  nummeriUsciti: Array<number>=[];
  ultimoNumero: string="...";
  generaNumero(){
    var check=false;
    while(check==false){
      var numero= Math.round(Math.random()*99+1);
      check=true;
      for (var i=0; i< this.nummeriUsciti.length; i++){
        if (numero==this.nummeriUsciti[i]){
          check=false;
        }
      }
      if (check){
        this.nummeriUsciti.push(numero);
        console.log(numero);
        var riga=document.getElementById("visuaNumero");
        riga.innerHTML=""+numero;
        this.ultimoNumero=String(numero);
        if (this.nummeriUsciti.length==100){
          console.log("numeri finiti");
          var bottone= document.getElementById("bottone");
          bottone.setAttribute("disabled", "disabled"); //in html <button disabled="disabled">
          alert("tutti i numeri sono stati estratti!!");
          return false;
        }
      }
    }
    return false;
  }
}
