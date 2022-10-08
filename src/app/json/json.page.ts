import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json',
  templateUrl: './json.page.html',
  styleUrls: ['./json.page.scss'],
})
export class JsonPage implements OnInit {
  alphabetList=[];
  selectedItem: any;
  selectedAccordion: string[];

  constructor() {}

  ngOnInit() {
    this.selectedAccordion=['first'];
    this.alphabetList = [
      {
        alphabetName: 'A',
        images: [
          { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'Apple' },
          { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'Aeroplane' },
        ],
      },
      {
        alphabetName: 'A',
        images: [
          { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'Ball' },
          { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'Bat' },
        ],
      },
      {
        alphabetName: 'c',
        images: [
          { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'cat' },
          { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'cow' },
        ],
      },
      {

          alphabetName: 'd',
          images: [
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dog' },
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dull' },
          ],
        },
        {

          alphabetName: 'E',
          images: [
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dog' },
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dull' },
          ],
        },
        {
          alphabetName: 'f',
          images: [
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dog' },
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dull' },
          ],
        },{
          alphabetName: 'g',
          images: [
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dog' },
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dull' },
          ],
        },{
          alphabetName: 'h',
          images: [
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dog' },
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dull' },
          ],
        },{
          alphabetName: 'i',
          images: [
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dog' },
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dull' },
          ],
        },{
          alphabetName: 'j',
          images: [
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dog' },
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dull' },
          ],
        },{
          alphabetName: 'k',
          images: [
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dog' },
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dull' },
          ],
        },{
          alphabetName: 'l',
          images: [
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dog' },
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dull' },
          ],
        },{
          alphabetName: 'm',
          images: [
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dog' },
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dull' },
          ],
        },{
          alphabetName: 'n',
          images: [
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dog' },
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dull' },
          ],
        },{
          alphabetName: 'o',
          images: [
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dog' },
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dull' },
          ],
        },{
          alphabetName: 'p',
          images: [
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dog' },
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dull' },
          ],
        },{
          alphabetName: 'j',
          images: [
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dog' },
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dull' },
          ],
        },{
          alphabetName: 'k',
          images: [
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dog' },
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dull' },
          ],
        },{
          alphabetName: 'l',
          images: [
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dog' },
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dull' },
          ],
        },{
          alphabetName: 'm',
          images: [
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dog' },
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dull' },
          ],
        },{
          alphabetName: 'n',
          images: [
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dog' },
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dull' },
          ],
        },{
          alphabetName: 'o',
          images: [
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dog' },
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dull' },
          ],
        },{
          alphabetName: 'p',
          images: [
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dog' },
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dull' },
          ],
        },{
          alphabetName: 'q',
          images: [
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dog' },
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dull' },
          ],
        },{
          alphabetName: 'r',
          images: [
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dog' },
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dull' },
          ],
        },{
          alphabetName: 's',
          images: [
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dog' },
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dull' },
          ],
        },{
          alphabetName: 't',
          images: [
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dog' },
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dull' },
          ],
        },{
          alphabetName: 'u',
          images: [
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dog' },
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dull' },
          ],
        },{
          alphabetName: 'v',
          images: [
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dog' },
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dull' },
          ],
        },{
          alphabetName: 'w',
          images: [
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dog' },
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dull' },
          ],
        },{
          alphabetName: 'x',
          images: [
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dog' },
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dull' },
          ],
        },{
          alphabetName: 'y',
          images: [
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dog' },
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dull' },
          ],
        },{
          alphabetName: 'z',
          images: [
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dog' },
            { src: 'https://thumbs.dreamstime.com/b/animal-alphabet-letter-e-elephant-illustration-vector-45363961.jpg', name: 'dull' },
          ],
        },
    ];
  }
  select(member){
    this.selectedItem=member;
    this.alphabetList.forEach(item=>{
      item.active=false;
    });
    member.active=true;
    this.selectedAccordion=['second'];
    this.findAlphabet(this.alphabetList,member.alphabetName);
  }
  findAlphabet(list,char){
    const findValue=list.filter(item=>item.alphabetName===char);
    console.log(findValue);
    list.forEach(element => {
      if(element.alphabetName===char){
        console.log(element);
      }
    });

  }
}
