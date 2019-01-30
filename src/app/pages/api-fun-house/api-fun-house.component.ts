import { Component, OnInit } from '@angular/core';
import { APIFunHouseService } from '../../services/api-fun-house.service';

@Component({
  selector: 'ngx-my-menu',
  templateUrl: './api-fun-house.component.html',
  styleUrls: ['./api-fun-house.component.scss']
})


export class APIFunHouseComponent implements OnInit {

  jeopardyQuestion: any;
  selectedItem: string = '1';
  numberFact: string;
  nasaImgSrc: string;
  nasaJSON: any;
  maxNum: number;
  loading = true;

  constructor(public myMenuService: APIFunHouseService) {
  }

  ngOnInit() {
    this.getRandomQuestion();
    this.getNumberFact();
    this.getNasaData();
  }

  getRandomQuestion() {
    this.myMenuService.getRandomQuestion().subscribe(res => {
      this.jeopardyQuestion = res[0];
    });
  }

  getNumberFact() {
    this.myMenuService.getNumberFact(this.selectedItem).subscribe(res => {
      this.numberFact = res;
    })
  }

  getNasaData() {
    this.myMenuService.getNasaImg().subscribe(res => {
      this.nasaJSON = res
      this.nasaJSON = this.nasaJSON.photos.filter(x =>{
        return x.camera.name === 'MAST';
      });
      console.log(this.nasaJSON);
      this.maxNum = this.nasaJSON.length;
      console.log(this.maxNum);
      this.getRandomPhoto();

    })
  }

  getRandomPhoto() {
    let index = Math.floor(Math.random() * (this.maxNum - 1)) + 0;
    this.nasaImgSrc = this.nasaJSON[index].img_src;
    this.loading = false;
  }
}
