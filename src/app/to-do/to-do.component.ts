import { Component, OnInit } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { ToDo } from "../to-do";

import { AppComponent } from "../app.component";

@NgModule({
  declarations: [AppComponent, ToDoComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
@Component({
  selector: "app-to-do",
  templateUrl: "./to-do.component.html",
  styleUrls: ["./to-do.component.css"]
}) //
export class ToDoComponent implements OnInit {
  constructor() {}

  tempTask: string;
  list: ToDo[] = [
    { task: "fold clothes", completed: false },
    { task: "put clothes in dresser", completed: true },
    { task: "relax", completed: false },
    { task: "try to pet cat", completed: false },
    { task: "pet dog", completed: false },
    { task: "be awesome", completed: false },
    { task: "one more thing", completed: false }
  ];
  adder(e) {
    this.list.push({ task: e, completed: false });
    this.tempTask = "";
  }
  ngOnInit() {}
}
