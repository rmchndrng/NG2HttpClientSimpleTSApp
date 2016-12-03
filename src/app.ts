declare var window: any;
import { GithubService } from './github.service';
class App {
    private githubService: GithubService;

    constructor() {
        this.githubService = new GithubService();
    }

    public search(username: string): void {
        let resultHtml: string = 'No results found.'
        this.githubService.getRepos(username).subscribe(response => {
            let repos: any[] = response as any[];
            if (repos && repos.length > 0) {
                resultHtml =
                    `<table>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Url</th>
                        </tr>`;
                repos.forEach((repo,index) => {
                    resultHtml +=
                        `<tr>
                            <td>${index}</td>
                            <td>${repo.name}</td>
                            <td>${repo.html_url}</td>
                        </tr>`
                });
                resultHtml += `</table>`
            }
            document.getElementById('results').innerHTML = '';
            document.getElementById('results').innerHTML = resultHtml;
        });
    }

    public buttonClick() {
        let username = (document.getElementById("username") as any).value;
        this.search(username);
    }
}

let app = new App();
window.app = app;