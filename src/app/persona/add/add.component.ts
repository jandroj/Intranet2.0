import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../../modelo/persona';
import { ServiceService } from '../../service/service.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }
  Guardar(persona:Persona){
    this.service.createPersona(persona)
    .subscribe(data=>{
      alert("se agrego usuario");
      this.router.navigate(["listar"]);
    })
  }
}