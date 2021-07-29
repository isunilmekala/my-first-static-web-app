import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>{{ value }}</div>`,
})
export class AppComponent {
  value = 'World';

  constructor(private http: HttpClient) {
    this.http
      .get('/api/capitalize?name="Sunil"')
      .subscribe((resp: any) => {
        console.log(resp);
        (this.value = resp.text);
      });
  }
}
