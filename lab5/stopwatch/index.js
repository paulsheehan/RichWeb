import {Observable} from 'rxjs/Rx';


const display = document.getElementById("display");

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const splitButton = document.getElementById("split");
const resetButton = document.getElementById("reset");

const countSeconds = start => {
  //counter$ = .subscribe(x => display.innerHTML = x);
};

const start$ = Observable.fromEvent(startButton, 'click');
const stop$ = Observable.fromEvent(stopButton, 'click');
const tick$ = Observable.interval(1000).takeUntil(stop$);

start$.switchMapTo(tick$).subscribe(x=> display.innerHTML = x);

// let rx = Rx.Observable.interval(2000)
// .merge(Rx.Observable.interval(500))
// .take(25)
// .subscribe(x => console.log(x));