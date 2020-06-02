import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.scss']
})
export class CreateAdComponent implements OnInit {

  fileList = [
    {
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ];

  used: boolean;
  new: boolean;

  previewImage: string | undefined = '';
  previewVisible = false;



  constructor() { }

  ngOnInit() {
    this.new = true;
  }

  usedButton() {
    this.new = false;
    this.used = true;

  }

  newButton() {
    this.new = true;
    this.used = false;
  }

}
