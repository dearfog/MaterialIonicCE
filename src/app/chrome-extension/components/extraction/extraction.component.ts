import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

declare var chrome: any;

@Component({
    selector: 'app-extraction',
    templateUrl: './extraction.component.html',
    styleUrls: ['./extraction.component.scss']
})
export class ExtractionComponent implements OnInit {

    links:Array<string> = []

    constructor() { }
    
    ngOnInit() {
        this.getCurrentTabPage();
    }
    getCurrentTabPage() {
        var that = this;
        chrome.tabs.executeScript({
            file: 'assets/js/background.js'
        }, function (doc) {
            console.log(doc);
            that.links = doc[0];
        });
    }
    download(index){
        chrome.downloads.download({
            url: this.links[index],
        });
    }
}
