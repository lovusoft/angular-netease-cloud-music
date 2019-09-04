import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  status = true;
  sound = 20;
  music = {
    id: 1379848099,
    type: 4,
    name: 'Save the Night',
    copywriter: null,
    picUrl: null,
    canDislike: true,
    song: {
      name: 'Save the Night',
      id: 1379848099,
      position: 0,
      alias: [],
      status: 0,
      fee: 8,
      copyrightId: 1405820,
      disc: '01',
      no: 1,
      artists: [
        {
          name: 'Far East Movement',
          id: 92526,
          picId: 0,
          img1v1Id: 0,
          briefDesc: '',
          picUrl: 'http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
          img1v1Url: 'http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
          albumSize: 0,
          alias: [],
          trans: '',
          musicSize: 0,
          topicPerson: 0
        },
        {
          name: '李玟',
          id: 8331,
          picId: 0,
          img1v1Id: 0,
          briefDesc: '',
          picUrl: 'http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
          img1v1Url: 'http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
          albumSize: 0,
          alias: [],
          trans: '',
          musicSize: 0,
          topicPerson: 0
        },
        {
          name: 'Shaggy',
          id: 42980,
          picId: 0,
          img1v1Id: 0,
          briefDesc: '',
          picUrl: 'http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
          img1v1Url: 'http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
          albumSize: 0,
          alias: [],
          trans: '',
          musicSize: 0,
          topicPerson: 0
        }
      ],
      album: {
        name: 'Save the Night',
        id: 80585222,
        type: 'EP/Single',
        size: 0,
        picId: 109951164235924540,
        blurPicUrl: 'http://p1.music.126.net/9Gmcnpr4nPK0RfHk-LlTkw==/109951164235924545.jpg',
        companyId: 0,
        pic: 109951164235924540,
        picUrl: 'http://p1.music.126.net/9Gmcnpr4nPK0RfHk-LlTkw==/109951164235924545.jpg',
        publishTime: 1564675200000,
        description: '',
        tags: '',
        company: 'Transparent & 网易云音乐',
        briefDesc: '',
        artist: {
          name: '',
          id: 0,
          picId: 0,
          img1v1Id: 0,
          briefDesc: '',
          picUrl: 'http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
          img1v1Url: 'http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
          albumSize: 0,
          alias: [],
          trans: '',
          musicSize: 0,
          topicPerson: 0
        },
        songs: [],
        alias: [],
        status: 0,
        copyrightId: 1405820,
        commentThreadId: 'R_AL_3_80585222',
        artists: [
          {
            name: 'Far East Movement',
            id: 92526,
            picId: 0,
            img1v1Id: 0,
            briefDesc: '',
            picUrl: 'http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
            img1v1Url: 'http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
            albumSize: 0,
            alias: [],
            trans: '',
            musicSize: 0,
            topicPerson: 0
          },
          {
            name: '李玟',
            id: 8331,
            picId: 0,
            img1v1Id: 0,
            briefDesc: '',
            picUrl: 'http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
            img1v1Url: 'http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
            albumSize: 0,
            alias: [],
            trans: '',
            musicSize: 0,
            topicPerson: 0
          },
          {
            name: 'Shaggy',
            id: 42980,
            picId: 0,
            img1v1Id: 0,
            briefDesc: '',
            picUrl: 'http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
            img1v1Url: 'http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
            albumSize: 0,
            alias: [],
            trans: '',
            musicSize: 0,
            topicPerson: 0
          }
        ],
        subType: '录音室版',
        transName: null,
        mark: 0,
        picId_str: '109951164235924545'
      },
      starred: false,
      popularity: 100,
      score: 100,
      starredNum: 0,
      duration: 225662,
      playedNum: 0,
      dayPlays: 0,
      hearTime: 0,
      ringtone: '',
      crbt: null,
      audition: null,
      copyFrom: '',
      commentThreadId: 'R_SO_4_1379848099',
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      copyright: 0,
      transName: null,
      sign: null,
      mark: 0,
      rtype: 0,
      rurl: null,
      bMusic: {
        name: null,
        id: 3877552937,
        size: 3611629,
        extension: 'mp3',
        sr: 44100,
        dfsId: 0,
        bitrate: 128000,
        playTime: 225662,
        volumeDelta: -41489
      },
      mp3Url: null,
      mvid: 0,
      hMusic: {
        name: null,
        id: 3877552935,
        size: 9029007,
        extension: 'mp3',
        sr: 44100,
        dfsId: 0,
        bitrate: 320000,
        playTime: 225662,
        volumeDelta: -45466
      },
      mMusic: {
        name: null,
        id: 3877552936,
        size: 5417422,
        extension: 'mp3',
        sr: 44100,
        dfsId: 0,
        bitrate: 192000,
        playTime: 225662,
        volumeDelta: -42957
      },
      lMusic: {
        name: null,
        id: 3877552937,
        size: 3611629,
        extension: 'mp3',
        sr: 44100,
        dfsId: 0,
        bitrate: 128000,
        playTime: 225662,
        volumeDelta: -41489
      },
      exclusive: false,
      privilege: {
        id: 1379848099,
        fee: 8,
        payed: 0,
        st: 0,
        pl: 128000,
        dl: 0,
        sp: 7,
        cp: 1,
        subp: 1,
        cs: false,
        maxbr: 999000,
        fl: 128000,
        toast: false,
        flag: 68,
        preSell: false
      }
    },
    alg: 'hot_server'
  };

  constructor(private musicService: MusicService) {
  }

  ngOnInit() {
  }

  get process() {
    return this.sound + '% 100%';
  }
}
