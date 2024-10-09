import { Component } from '@angular/core';
import Parallax from"parallax-js"
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {
  constructor(private router: Router) {}

  ngAfterViewInit() {
    const scene = document.getElementById('scene');
    if (scene) {
      const parallaxInstance = new Parallax(scene);
    }
  }
  navigateToPageHome() {
    this.router.navigate(['/']);
  }
  onClikHome(){
      this.navigateToPageHome()
  }
}
