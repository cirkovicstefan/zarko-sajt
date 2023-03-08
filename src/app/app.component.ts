import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor() { }

  ngOnInit(): void {
    var loader = document.querySelector(".loader") as any;
    window.addEventListener("load", vanish);
    function vanish() {
      loader.classList.add("disppear");
    }

  }
  title = 'sajt';

  click() {
    let sidebar_navigation = document.getElementById('sidebar_navigation') as any;
    if (sidebar_navigation.style.left == "" || sidebar_navigation.style.left == "-100%") {
      sidebar_navigation.style.left = "0"
      let x = document.getElementById('sidebar_menu_icon') as any;
      x.classList.add('fa-close');
    }
    else {
      sidebar_navigation.style.left = "-100%"
      let y = document.getElementById('sidebar_menu_icon') as any;
      y.classList.remove('fa-close');
    }


  }
}
