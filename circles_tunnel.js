noise()
.contrast(10)
.modulateKaleid(osc(5,.5,0), 50)
.mult(solid(20,2,1))
.out()
render(o0)

noise(10)
.contrast(10)
.modulateKaleid(osc(5,.5,0), 50) // default 50
.mult(solid(()=>a.fft[0]*1,()=>a.fft[0],()=>a.fft[0]*.8))
.out()
