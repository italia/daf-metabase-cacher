import {AfterContentInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

declare let ga: Function;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterContentInit {

    show: boolean;
    sub: any;
    locale: string;
    lang: string;
    check = true;
    path;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute
    ) {
        this._router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        });
    }

    ngOnInit() {
        this.lang = this._route.snapshot.data['lang'];
        this.path = window.location.pathname;
        // quando si sposta di pagina effettua lo scroll in alto
        this._router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }

    ngAfterContentInit() {
        this.path = this.path.substring(this.path.search('localhost:4200'), this.path.length);
        this._router.navigateByUrl(this.path);
    }
}
