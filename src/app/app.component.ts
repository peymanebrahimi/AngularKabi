import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, viewChild, ViewContainerRef } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule
    ],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name = 'Angular';
  
  // myRef = viewChild("myRef", { read: ElementRef });
  myRef = viewChild("myRef", { read: ViewContainerRef });

  
}


