import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    userName: string | null = "";
    showMenu = false;

  ngOnInit() {
    this.userName = JSON.parse(localStorage.getItem('userName') || 'null');
  }

    logout(){
      localStorage.clear();
      console.log("Logged out successfully");
    }

    
}
