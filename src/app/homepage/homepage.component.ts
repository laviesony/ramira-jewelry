import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less']
})
export class HomepageComponent implements OnInit {
  mainCategories = [
    { name: 'Rings', imageUrl: 'assets/50D2I2FFSAA02_2.webp' },
    { name: 'Necklaces', imageUrl: 'assets/50D2I2FFSAA02_2.webp' },
    { name: 'Bracelets', imageUrl: 'assets/50D2I2FFSAA02_2.webp' },
    { name: 'Earrings', imageUrl: 'assets/50D2I2FFSAA02_2.webp' },
    { name: 'Pendants', imageUrl: 'assets/50D2I2FFSAA02_2.webp' }
  ];

  subCategories = [
    // Assuming 8-10 categories with similar structure
    { name: 'Category 1', imageUrl: 'assets/50D2I2FFSAA02_2.webp' },
    { name: 'Category 2', imageUrl: 'assets/50D2I2FFSAA02_2.webp' }
    // Add more categories as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
