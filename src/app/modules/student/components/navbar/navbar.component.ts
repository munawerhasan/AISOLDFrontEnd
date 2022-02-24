import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-msw-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss',
    '../../../../../assets/icon/icofont/css/icofont.scss']
})

export class NavbarComponent implements OnInit {

  page = 'Account Detail';
    constructor(private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.router.events
            .filter(event => event instanceof NavigationEnd)
            .subscribe(event => {
                let currentRoute = this.route.root;
                while (currentRoute.children[0] !== undefined) {
                    currentRoute = currentRoute.children[0];
                }
                this.page = currentRoute.snapshot.data['title'];
                console.log(this.page)
            });
    }
}
