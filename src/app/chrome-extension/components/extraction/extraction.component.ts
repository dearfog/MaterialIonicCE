import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

declare var chrome: any;

@Component({
    selector: 'app-extraction',
    templateUrl: './extraction.component.html',
    styleUrls: ['./extraction.component.scss']
})
export class ExtractionComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        this.getCurrentTabPage();
    }
    getCurrentTabPage() {
        chrome.tabs.executeScript({
            file: 'assets/js/background.js'
        }, function (doc) {
            console.log(doc);            
        });
    }
}
