// CRASH VOL.2
// UNROODED

// osc(20, 0.03, 5)
//   .kaleid(()=>5+a.fft[0])
//   .mult(osc(20, 0.001, 2)
//   .rotate(1.58,6))
//   .blend(o0, 0.94)
//   .modulateScale(osc(5, 0, 2),-0.03)
//   // .scale(osc(), () => (1.05 + 0.1 * Math.sin(0.0001*time) ))
//   .contrast(20)
//   .kaleid(20)
//   .out()


shape(10)
.modulateScale(osc( ()=>a.fft[0]*20,0,2))
.rotate(.1,.7)
// .repeat(5)
.colorama(20)
// .scale(2)
.out()
