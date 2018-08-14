import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
    quotes = [
        new Quote('Good things comes with hardwork and persistsnce.','Evans Kedi','kedi.com',new Date(),),
        new Quote('Working code is beautiful.','Evoh Mike',' evohmike.comes',new Date(),),
        new Quote('Don’t hurry, don’t worry. .',
        'Victor Mosh','Mosh.com',new Date(),)
      ]
      addNewQuote(quote){
        let quoteLength = this.quotes.length;
        quote.dateAdded = new Date();
        this.quotes.push(quote);
        console.log(this.quotes);

      }
      removeQuote(complete,index){
        if(complete){
          this.quotes.splice(index,1);
        }
      }

      toggleDetails(index){
        this.quotes[index].showDetails = !this.quotes[index].showDetails;
      }
  constructor() { }

  ngOnInit() {
  }

}
