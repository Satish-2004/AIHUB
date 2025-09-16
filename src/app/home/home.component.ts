import { Component } from '@angular/core';
import { ToolsService } from '../tools.service';
import { Tool } from '../tools.model';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Category } from '../../categories.model';
import { HerosectionComponent } from '../herosection/herosection.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeaderComponent, FooterComponent, HerosectionComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   constructor(private toolservice: ToolsService){}

  featuredTools: Array<Tool> = [];

   categories: Array<Category> = [];
   


  ngOnInit() {
    this.toolservice.getFeaturedTools().subscribe(tools => {
      this.featuredTools = tools;
      console.log(tools);
    });

    console.log(this.featuredTools);
    

    this.toolservice.getCategories().subscribe(categories => {
      this.categories = categories;
    });

    console.log(this.categories);
  }

  AddToCart(toolId: number) {
    this.toolservice.addToCart(toolId).subscribe(response => {
      console.log('Tool added to cart:', response);
    });
  }}

