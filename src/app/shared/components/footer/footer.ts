import { Component } from '@angular/core';
import packageJson from '../../../../../package.json';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentVersion = packageJson.version;

  ngOnInit(): void {
    this.checkVersion();
  }

  checkVersion() {
    const storedVersion = localStorage.getItem('app_version');

    if (!storedVersion) {
      localStorage.setItem('app_version', this.currentVersion);
      return;
    }

    if (storedVersion !== this.currentVersion) {
      localStorage.setItem('app_version', this.currentVersion);

      console.log('🔄 New version detected. Reloading...');

      window.location.reload();
    }
  }
}
