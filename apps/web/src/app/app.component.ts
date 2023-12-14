import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiAlertService,
  TuiSvgModule
} from '@taiga-ui/core';
import { Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { TuiInputCountModule, TuiTabsModule } from '@taiga-ui/kit';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, TuiRootModule, TuiDialogModule, TuiAlertModule, TuiTabsModule, TuiSvgModule, TuiInputCountModule, FormsModule],
  selector: 'ssg-example-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
    providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}]
})
export class AppComponent {
  activeItemIndex = 0;

  constructor(
    @Inject(TuiAlertService)
    private readonly alerts: TuiAlertService,
  ) {}

  onClick(item: string): void {
    this.alerts.open(item).subscribe();
  }
}
