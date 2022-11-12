import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular list of prohibited words:';
  placeholder = 'write your word here...';
  placeholderTextAr = 'text here..';

  public newWord!: string;
  public isInput = true;
  public badWords = '';
  public isText = true;
  public textArea: any;

  ngOnInit() {}

  addWord() {
    if (this.newWord) {
      this.isInput = true;
      this.badWords += ' ' + this.newWord;
      this.newWord = '';
    } else {
      this.isInput = false;
    }
  }

  resetAll() {
    this.badWords = '';
    this.newWord = '';
    this.textArea = '';
  }


  cenzorBtn(): void {
    if (this.textArea) {
      this.isText = true;
      this.cenzorText()
      this.placeholderTextAr = 'text here..';
    } else {
      this.isText = false;
      this.placeholderTextAr = 'Please write a text!';
    }
  }

  cenzorText() {
    let text = this.textArea.split(' ');
    let words = this.badWords.split(' ');
  
    words.map((bad) => {
      text = text.map((word: string) =>
        word.toLowerCase() === bad
          ? (word = word
              .split('')
              .map((letter) => (letter = '*'))
              .join(''))
          : word
      );
    });
    this.textArea = text.join(' ');
    
  }
}

