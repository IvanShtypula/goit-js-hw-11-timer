
// const refs = {
//   days: document.querySelector('span[data-value="days"]'),
//   hours: document.querySelector('span[data-value="hours"]'),
//   mins: document.querySelector('span[data-value="mins"]'),
//   secs: document.querySelector('span[data-value="secs"]'),
// }

// const targetDate = new Date('Jun 22, 2020');

// function addSymbol(value){
//   return String(value).padStart(2, '0');
// }

// function refreshClock(time){
//   const days = addSymbol(Math.floor(time / (1000 * 60 * 60 * 24)));
//   const hours = addSymbol(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//   const mins = addSymbol(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = addSymbol(Math.floor((time % (1000 * 60)) / 1000));
  
//   refs.days.textContent = `${days}`;
//   refs.hours.textContent = `${hours}`;
//   refs.mins.textContent = `${mins}`;
//   refs.secs.textContent = `${secs}`;
// }

// reverseTimer = setInterval(() => {
//   const startTime = Date.now();
//   const timeToWait = targetDate - startTime;
//   refreshClock(timeToWait);
// }, refs.sec);
  
// ========================================



class CountdownTimer{
  constructor(selector, targetDate){
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;

    this.refs = {
      days: document.querySelector('span[data-value="days"]'),
      hours: document.querySelector('span[data-value="hours"]'),
      mins: document.querySelector('span[data-value="mins"]'),
      secs: document.querySelector('span[data-value="secs"]'),
    }
    this.reverseTimer();
  }

  addSymbol(value){
    return String(value).padStart(2, '0');
  }
  
  refreshClock(time){
    const days = this.addSymbol(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.addSymbol(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.addSymbol(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.addSymbol(Math.floor((time % (1000 * 60)) / 1000));
    
    this.refs.days.textContent = `${days}`;
    this.refs.hours.textContent = `${hours}`;
    this.refs.mins.textContent = `${mins}`;
    this.refs.secs.textContent = `${secs}`;
  }
  
  reverseTimer = setInterval(() => {
    this.updateTimer();
    const startTime = Date.now();
    const timeToWait = this.targetDate - startTime;
    this.refreshClock(timeToWait);
  }, 1000);



  updateTimer(){
    if((this.targetDate - Date.now()) < 1){
      this.selector.innerText = '!Day!'; 
    }
  
  } 
}

new CountdownTimer(...Object.values({
  selector: '#timer-1',
  targetDate: new Date('Jun 17, 2020'),
}));
