import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StopwatchService {
  private startTime!: number;
  private timerSubject: Subject<string> = new Subject<string>();
  private myInterval: any;

  start() {
    this.startTime = new Date().getTime();
    // this.timerSubject = new Subject<string>();
    this.updateTimer();
  }

  stop() {
    clearInterval(this.myInterval);
  }

  getTimer(): Subject<string> {
    return this.timerSubject;
  }

  getFinishTime() {
    const currentTime = new Date().getTime();    
    return currentTime - this.startTime
  }

  private updateTimer() {
    this.myInterval  = setInterval(() => {
      if (this.startTime) {
        const currentTime = new Date().getTime();
        const timeElapsed = this.updateTimeDisplay(currentTime);
        this.timerSubject.next(timeElapsed);
      }
    }, 1000);
  }

  private updateTimeDisplay(currentTime: number): string {
    const timeDifference = currentTime - this.startTime;
    const minutes = Math.floor(timeDifference / 60000);
    const seconds = Math.floor((timeDifference % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
}
