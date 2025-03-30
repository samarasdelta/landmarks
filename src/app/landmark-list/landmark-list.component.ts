import { Component, OnInit } from '@angular/core';
import { LandmarkService } from '../services/landmark.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-landmark-list',
  standalone: true,
  templateUrl: './landmark-list.component.html',
  styleUrls: ['./landmark-list.component.css'],
  imports: [CommonModule, RouterModule, FormsModule]  // Add FormsModule here
})
export class LandmarkListComponent implements OnInit {
  landmarks: any[] = [];
  searchTerm: string = ''; // for storing the search input

  constructor(private landmarkService: LandmarkService) {}

  ngOnInit(): void {
    this.loadLandmarks();
  }

  async loadLandmarks() {
    this.landmarks = await this.landmarkService.getLandmarks();
  }

  // Filter function for the search
  filterLandmarks() {
    if (this.searchTerm) {
      return this.landmarks.filter(landmark =>
        landmark.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    return this.landmarks;
  }
}
