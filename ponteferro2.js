// CRASH VOL.2
// UNROODED

osc(20, 0.03, 5)
  .kaleid(()=>5+a.fft[0])
  .mult(osc(20, 0.001, 2)
  .rotate(1.58,6))
  .blend(o0, 0.94)
  .modulateScale(osc(5, 0, 2),-0.03)
  // .scale(osc(), () => (1.05 + 0.1 * Math.sin(0.0001*time) ))
  .contrast(20)
  .kaleid(20)
  .out(o0)


shape(4).modulateScale(osc( ()=>a.fft[0]*8,0)).rotate(.1,.4).repeat(20).colorama(2,2).scale(4).out()
