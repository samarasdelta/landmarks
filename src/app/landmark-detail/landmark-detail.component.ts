import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LandmarkService } from '../services/landmark.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-landmark-detail',
  templateUrl: './landmark-detail.component.html',
  styleUrls: ['./landmark-detail.component.css'],
  imports: [CommonModule, RouterModule]
})
export class LandmarkDetailComponent implements OnInit {
  landmark: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private landmarkService: LandmarkService
  ) {}

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title');
    
    if (title) {
      this.landmarkService.getLandmarks().then((landmarks) => {
        this.landmark = landmarks.find((l) => l.title === title);
      });
    }
  }

  openImage(imageUrl: string): void {
    window.open(imageUrl, '_blank');
  }

  openUrl(url: string): void {
    window.open(url, '_blank');
  }

  goBack(): void {
    this.location.back();
  }
}
