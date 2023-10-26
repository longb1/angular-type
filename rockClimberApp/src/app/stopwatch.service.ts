import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StopwatchService {
  private startTime: number | undefined;
  private endTime: number | undefined;

  start() {
    this.startTime = new Date().getTime();
  }

  stop() {
    this.endTime = new Date().getTime();
  }

  getTimeElapsed(): string | undefined {
    if (this.startTime && this.endTime) {
      const timeDifference = this.endTime - this.startTime;
      const minutes = Math.floor(timeDifference / 60000); // 1 minute = 60000 milliseconds
      const seconds = Math.floor((timeDifference % 60000) / 1000); // 1 second = 1000 milliseconds
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    return undefined;
  }
}
