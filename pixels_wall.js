//unrooted - pixel_walls
// 2023-08-20


solid(0)
.out(o0)

src(o0)
  .modulateHue(src(o0).scale(1.01),1)
  .layer(osc(3,0.5,20).mask(shape(4,0.5,0.001)))
  .out(o1)

src(o1)
.modulateScale(osc(20))
.modulateRotate(osc(29))
// .modulateKaleid(noise(29))
.out(o2)

src(o2)
.modulatePixelate(osc(()=>a.fft[0]/100^4))
.out(o3)

  render(o3)
