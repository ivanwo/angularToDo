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
  sortInput: string;
  list: ToDo[] = [
    { task: "fold clothes", completed: false },
    { task: "put clothes in dresser", completed: true },
    { task: "relax", completed: false },
    { task: "try to pet cat", completed: false },
    { task: "pet dog", completed: false },
    { task: "be awesome", completed: false },
    { task: "one more thing", completed: false }
  ];
  sortedList: ToDo[] = this.list;
  adder(e) {
    this.list.push({ task: e, completed: false });
    this.tempTask = "";
  }
  sorter() {
    this.sortedList = [];
    if (this.sortInput === "") {
      for (let todo of this.list) {
        this.sortedList.push({ task: todo.task, completed: todo.completed });
      }
    } else {
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].task.includes(this.sortInput)) {
          this.sortedList.push({
            task: this.list[i].task,
            completed: this.list[i].completed
          });
        }
      }
    }
  }
  editor(task: string) {
    // let newContent:string = prompt("new task content: ");
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].task === task) {
        this.list[i].task = prompt("new task content: ");
      }
    }
    if (this.sortInput !== "") this.sorter();
  }
  clearSort() {
    this.sortInput = "";
    this.sorter();
  }
  delete(task: string) {
    // alert(task);
    let index: number;
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].task === task) {
        index = i;
      }
    }
    if (index >= 0) {
      this.list.splice(index, 1);
      if (!this.sortInput) this.sortInput = "";
      this.sorter();
    }
  }
  ngOnInit() {}
}
