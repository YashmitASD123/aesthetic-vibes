import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";

@Component({
  selector: 'app-homepage',
  imports: [Sidebar],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {

}
