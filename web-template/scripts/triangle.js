

   function draw() {
     // canvas with id="myCanvas"
     var canvas = document.getElementById('triangles');
     if (canvas.getContext) {
       var ctx = canvas.getContext('2d');
       ctx.beginPath(); // note usage below

       // triangle 1, at left top
       ctx.fillStyle = "#ffffff";
       ctx.moveTo(0, 0); // left top side
       ctx.lineTo(205, 0); // right top side
       ctx.lineTo(0, 410); // letf bottom side
       ctx.fill(); // connect and fill

       // triangle 2, at right, bottom
          ctx.beginPath();
          ctx.strokeStyle = "#ffffff";
          ctx.moveTo(700, 267); // right top side
          ctx.lineTo(628, 410); // left bottom side
          ctx.lineTo(700, 410); // right bottom side
          ctx.fill(); // connect and fill
     }
   }
   draw();
