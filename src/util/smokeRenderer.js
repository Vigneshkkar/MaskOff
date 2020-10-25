import SmokeMachine from "@bijection/smoke";

const renderSmoke = (SmokeCanvas, height, width, smokeStrength) => {
    var canvas = SmokeCanvas.current;
    var ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;

    var party = SmokeMachine(ctx, [255, 255, 255]);
    const setHeight = height + 100;
    party.start(); 
    
        setInterval(() => {
            for(var i=0; i<10; i++){            
                party.addSmoke((width/10)*i , setHeight, smokeStrength || Math.random()*10);
            }
        }, 1000);

    return (e) => {
      var x = e.clientX;
      var y = e.clientY;
      var n = 2.5;
      var t = Math.floor(Math.random() * 200) + 3800;
      party.addsmoke(x, y, n, t);
    };
}

export default renderSmoke;