import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css'],
  inputs: ["video"]
})
export class VideoDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
