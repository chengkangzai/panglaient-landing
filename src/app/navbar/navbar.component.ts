import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isOpen = false;

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'zh', 'ms'])
    const local = localStorage.getItem('local');
    local ? translate.setDefaultLang(local) : translate.setDefaultLang('en');
  }

  ngOnInit(): void {
  }

  changeLang(lang: string) {
    this.translate.use(lang);
    this.isOpen = !this.isOpen;
    localStorage.setItem('local', lang);
  }
}
