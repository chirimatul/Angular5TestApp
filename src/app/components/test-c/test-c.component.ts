import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-test-c',
  templateUrl: './test-c.component.html',
  styleUrls: ['./test-c.component.css']
})
export class TestCComponent implements OnInit {
  constructor() { }
  @Input()
  userAge: string;
  ngOnChanges() {
    this.writeLog("TestCComponent onchanges");
  }
  ngOnInit() {
    this.writeLog("TestCComponent on it ");
  }
  ngDoCheck() {
    this.writeLog("TestCComponent do check");
  }
  ngAfterContentInit() {
    this.writeLog("TestCComponent after content init");
  }
  ngAfterContentChecked() {
    this.writeLog("TestCComponent after content checked");
  }
  ngAfterViewInit() {
    this.writeLog("TestCComponent after view init");
  }
  ngAfterViewChecked() {
    this.writeLog("TestCComponent after view checked");
  }
  ngOnDestroy() {
    this.writeLog("TestCComponent ng destroy");
  }
  private writeLog(msg: string) {
    console.log(msg);
  }
}
