import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StopwatchService {
  private startTime: number | undefined;
  private timerSubject: Subject<string> = new Subject<string>();

  start() {
    this.startTime = new Date().getTime();
    this.updateTimer();
  }

  stop() {
    const endTime = new Date().getTime();
    const timeElapsed = this.calculateTimeElapsed(endTime);
    this.timerSubject.next(timeElapsed);
  }

  getTimer(): Subject<string> {
    return this.timerSubject;
  }

  private updateTimer() {
    setInterval(() => {
      if (this.startTime) {
        const currentTime = new Date().getTime();
        const timeElapsed = this.calculateTimeElapsed(currentTime);
        this.timerSubject.next(timeElapsed);
      }
    }, 1000);
  }

  private calculateTimeElapsed(currentTime: number): string {
    const timeDifference = currentTime - this.startTime!;
    const minutes = Math.floor(timeDifference / 60000);
    const seconds = Math.floor((timeDifference % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
}
