import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  value: string;

  constructor(private musicService: MusicService) { }

  ngOnInit() {
    this.默认搜索关键词();
  }

  默认搜索关键词() {
    this.musicService.get默认搜索关键词().subscribe(res => {
      // tslint:disable-next-line: no-string-literal
      this.value = res['data'].realkeyword;
    });
  }

  search() {
    if (this.value !== '') {
      this.musicService.搜索歌曲(this.value).subscribe(res => {
        console.log(res);
      });
    }
  }
}
