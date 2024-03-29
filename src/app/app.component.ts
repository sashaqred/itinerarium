import { Component } from '@angular/core';
import { NavigationLink } from '@shared/navigation/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'itinerarium';
  public readonly links: NavigationLink[] = [
    {
      route: '/none-routing-data',
      label: 'none-routing-data',
    },
    {
      route: '/resolved-routing-data',
      label: 'resolved-routing-data',
    },
    {
      route: '/resolved-routing-data/base',
      label: 'resolved-routing-data/base',
    },
    {
      route: '/resolved-routing-data/snapshot',
      label: 'resolved-routing-data/snapshot',
    },
    {
      route: '/query-resolve',
      label: 'query-resolve',
    },
    {
      route: '/query-resolve/base',
      label: 'query-resolve/base',
    },
    {
      route: '/query-resolve/rerun-guards',
      label: 'query-resolve/rerun-guards',
    },
    {
      route: '/query-resolve/rerun-guards-custom',
      label: 'query-resolve/rerun-guards-custom',
    },
    {
      route: '/query-resolve/reload',
      label: 'query-resolve/reload',
    },
    {
      route: '/lazy',
      label: 'lazy',
    },
  ];
}
