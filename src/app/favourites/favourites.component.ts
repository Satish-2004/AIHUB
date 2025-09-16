import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ToolsService } from '../tools.service';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favourites',
  imports: [HeaderComponent, FooterComponent, FormsModule, CommonModule],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css'
})
export class FavouritesComponent {
  userId: string = localStorage.getItem('userid') || '';
  tools: any[] = []

  constructor(private toolservice: ToolsService){
    console.log(this.userId);
  }

  ngOnInit() {
    this.toolservice.getcartItems(this.userId).subscribe(items => {
      console.log(items);
      this.tools = items;
    });

  }

  removeFromCart(toolId: number) {
    this.toolservice.removeFromCart(toolId).subscribe(response => {
      console.log('Tool removed from cart:', response);
      this.tools = this.tools.filter(tool => tool.id !== toolId);
    });
  }

}
