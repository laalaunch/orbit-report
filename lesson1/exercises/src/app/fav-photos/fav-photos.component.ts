import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Movie Photos';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://www.dorisdaymagic.com/uploads/1/1/6/0/11608548/8445995.png?602';
  image3 = 'http://www.gstatic.com/tv/thumb/v22vodart/34314/p34314_v_v8_ak.jpg';

  constructor() { }

  ngOnInit() {
  }

}