import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private messageSource = new BehaviorSubject(true);
  currentNotification = this.messageSource.asObservable();

  changeMessage(message: boolean) {
    this.messageSource.next(message);
  }
}
