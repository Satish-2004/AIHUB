import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-herosection',
  imports: [CommonModule, FormsModule],
  templateUrl: './herosection.component.html',
  styleUrl: './herosection.component.css'
})
export class HerosectionComponent {
  searchQuery = '';

  onSearch() {
    // Implement your search logic here
    // For example: this.router.navigate(['/directory'], { queryParams: { q: this.searchQuery } });
  }
}
