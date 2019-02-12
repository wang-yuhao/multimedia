import {Component,Input,Output,EventEmitter} from '@angular/core';
import {CustomizedMeme, Meme} from "./mememuc.component";

@Component({
  selector: 'mmn-memehistory',
  // template: `
  // Say {{ message }}
  //   `,
  templateUrl: './mememuc.history.component.html',
  styleUrls: [ './mememuc.history.component.css' ],
})
/**
 * the MemeMUCHistoryComponent is a horizontal bar located at the webpage bottom
 */
export class MemeMUCHistoryComponent {
  // TODO this property should contain all saved memes, which already exists in the same-named parent component's property. Use data-binding
  @Input() savedMemes:CustomizedMeme;
  
  @Output() messageEvent = new EventEmitter<CustomizedMeme>();
  public flag = 0;
  public selectMeme(meme: CustomizedMeme) {
    if(this.flag === 0){
      this.messageEvent.emit(meme)
    }else(
      this.flag  = 0
    )
    
  }
  
  public deleteMeme(meme:CustomizedMeme){
    var savedMemes:CustomizedMeme[] = [];
    savedMemes=JSON.parse(JSON.stringify(this.savedMemes));
      for( var i = 0; i < savedMemes.length-1; i++){ 
      if (savedMemes[i].link === JSON.parse(JSON.stringify(meme.link))) {
         savedMemes.splice(i,1);
       }
    }
    console.log(savedMemes[0].link)
    console.log(meme.link)
    console.log(savedMemes[0])
    this.flag = 1;
    this.messageEvent.emit(savedMemes[0])
  }
  // @Output() public selectBaseImageChange = new EventEmitter();
  // public change(userName: string) {
  //   this.selectBaseImageChange.emit(this.selectBaseImage);
  // }
}
