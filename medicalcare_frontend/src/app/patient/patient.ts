import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-patient',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './patient.html',
  styleUrl: './patient.css',
})
export class Patient {

}
