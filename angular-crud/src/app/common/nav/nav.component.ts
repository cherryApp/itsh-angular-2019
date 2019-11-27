import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  links;
  currentUrl = '';

  constructor(
    private config: ConfigService,
    private router: Router
  ) {
    this.links = this.config.links;

    this.router.events.subscribe(
      ev => {
        if (ev instanceof NavigationEnd) {
          this.currentUrl = ev.url;
        }
      }
    );
  }

  ngOnInit() {
  }

  checkActiveLink(link): boolean {
    if (this.currentUrl === '/') {
      return link.href === this.currentUrl;
    }
    return new RegExp('^' + this.currentUrl).test(link.href);
  }

}
