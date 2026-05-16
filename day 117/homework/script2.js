class TimeHelper{
    static started = false;
    static num = 0;
    static get time(){
        return new Date();
    };
    static get normalTime(){
        return TimeHelper.time.toLocaleDateString();
    };
    static get startTimer(){
        if(this.started === false){
            this.num = 0;
            this.started = true;
            setInterval(() => {
                this.num++;
            }, 1000);
        }
        else{
            console.log("timer already started");
        };
    };
    static get stopTimer(){
        this.started = false;
        alert("time stopped at: " + this.num);
    };
};