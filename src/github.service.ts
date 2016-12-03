import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import "rxjs/add/operator/catch";
import 'rxjs/add/observable/of';
import { Http } from "@angular/http";
import { XHRBackend, BrowserXhr, ResponseOptions, CookieXSRFStrategy, RequestOptions } from '@angular/http';
import { Response } from '@angular/http';
import { __platform_browser_private__ } from "@angular/platform-browser"
export class GithubService {
    private http: Http
    constructor() {
        let browserXhr: BrowserXhr = new BrowserXhr();
        let baseResponseOptions: ResponseOptions = new ResponseOptions();
        let xsrfStrategy: CookieXSRFStrategy = new CookieXSRFStrategy();
        let backend: XHRBackend = new XHRBackend(browserXhr, baseResponseOptions, xsrfStrategy);
        let requestOptions: RequestOptions = new RequestOptions();
        let http: Http = new Http(backend, requestOptions);
        this.http = http;
        __platform_browser_private__.initDomAdapter();
    }

    public getRepos(userName: string): Observable<any> {
        console.log(userName);
        return this.http
            .get(`https://api.github.com/users/${userName}/repos`)
            .map((r: Response) =>
                r.json())
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<any>([]);
            });
    }
}