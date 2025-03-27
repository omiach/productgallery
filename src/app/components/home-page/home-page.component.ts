import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { WishlistComponent } from '../wishlist/wishlist.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [HeaderComponent, WishlistComponent, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  public showWishlist: boolean = true;

  toggleDarkTheme() {
    document.body.classList.toggle('dark-theme');
  }
}
