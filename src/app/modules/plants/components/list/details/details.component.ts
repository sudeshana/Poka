import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';
import { CardComponent } from '../../../../../shared/components/card/card.component';
import { HeaderComponent } from '../../../../../shared/components/header/header.component';
import { BackButtonComponent } from '../../../../../shared/components/back-button/back-button.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    HeaderComponent,
    CardComponent,
    ButtonComponent,
    BackButtonComponent,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  @Input() title: string = 'Details';
  @Input() description: string = 'Description';

  backText = '< Back to all plants';
}
