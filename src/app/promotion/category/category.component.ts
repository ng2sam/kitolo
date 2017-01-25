import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(category: string) {
    this.router.navigate(['/promotion', category]);
  }
}
