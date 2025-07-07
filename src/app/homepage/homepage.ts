import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Navbar } from "../navbar/navbar";

@Component({
  selector: 'app-homepage',
  imports: [Navbar],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {

}
