import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ToolsService } from '../tools.service';
import { Tool } from '../tools.model';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directory',
  imports: [HeaderComponent, CommonModule, FooterComponent, FormsModule],
  templateUrl: './directory.component.html',
  styleUrl: './directory.component.css'
})
export class DirectoryComponent {
  constructor(private toolservice: ToolsService) { }

  featuredTools: Array<Tool> = [];

  categories: Array<string> = ["image", "video", "chatbots", "codeing", "audio", "3D", "analytics", "productivity", "marketing", "education", "health", "finance"];

  filteredTools: Array<Tool> = [];
  searchQuery: string = '';
  selectedCategory: string = 'All Categories';
  selectedPricing: string = 'All Pricing';

  ngOnInit() {
    this.toolservice.getFeaturedTools().subscribe(tools => {
      this.featuredTools = tools;
      this.filteredTools = this.featuredTools;
    });
  }


  filterTools() {
    this.filteredTools = this.featuredTools.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        tool.category.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesCategory = this.selectedCategory === 'All Categories' || tool.category.toLowerCase() === this.selectedCategory.toLowerCase();
      const matchesPricing = this.selectedPricing === 'All Pricing' || tool.plan.toLowerCase() === this.selectedPricing.toLowerCase();
      return matchesSearch && matchesCategory && matchesPricing;
    });
  }
}
