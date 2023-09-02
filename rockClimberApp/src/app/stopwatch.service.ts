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

  getTimeElapsed(): number | undefined {
    if (this.startTime && this.endTime) {
      return this.endTime - this.startTime;
    }
    return undefined;
  }
}
