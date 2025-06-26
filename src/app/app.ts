import { Component } from '@angular/core';
import { Navbar } from "./navbar/navbar";
import { RouterOutlet } from '@angular/router';
import { Sidebar } from "./sidebar/sidebar";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Navbar, RouterOutlet, Sidebar]
})
export class App {
  protected title = 'aesthetic-vibes';
}
