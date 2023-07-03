import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(){}

  scrollToProjects(){
    const projectsSection = document.getElementById('projects-section');
    projectsSection?.scrollIntoView({behavior: 'smooth'});
  }
  
}
