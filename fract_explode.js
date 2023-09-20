gradient([2,3,4]).repeat([2,5,10,50]).kaleid([20].fast(0.3))
  .modulateScale(osc(5,-0.2,0).kaleid([2,5,10]).scale(0.2),2,0)
  .out(o0)
//render(o0)

// hush()
