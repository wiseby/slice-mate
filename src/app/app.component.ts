import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { NavLink } from 'src/app/core/interfaces/nav-link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Slice Mate';

  activeLink: NavLink = { label: '', location: '' };
  tabBackground: ThemePalette = 'primary';

  links: NavLink[] = [
    {
      label: 'Slices',
      location: 'slices',
    },
    {
      label: 'Utilities',
      location: 'utils',
    }
  ]
}
