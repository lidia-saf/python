import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ApiService]
})
export class AppComponent {
  songs = [{name: 'test'}];
  selectedSong;

  constructor(private api: ApiService) {
    this.getSongs();
    this.selectedSong = {
      id: -1,
      name: '',
      artist: '',
      year: 0
    };
  }

  getSongs = () => {
    this.api.getAllSongs().subscribe(
      data => {
        this.songs = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  songClicked = (song) => {
    this.api.getOneSong(song.id).subscribe(
      data => {
        this.selectedSong = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  updateSong = () => {
    this.api.updateSong(this.selectedSong).subscribe(
      data => {
        this.getSongs();
      },
      error => {
        console.log(error);
      }
    );
  }

  createSong = () => {
    this.api.createSong(this.selectedSong).subscribe(
      data => {
        this.songs.push(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteSong = () => {
    this.api.deleteSong(this.selectedSong.id).subscribe(
      data => {
        this.getSongs();
      },
      error => {
        console.log(error);
      }
    );
  }
}
