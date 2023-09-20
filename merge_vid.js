s0.initVideo('https://upload.wikimedia.org/wikipedia/commons/0/0a/Waacking.ogv')
s1.initVideo('https://upload.wikimedia.org/wikipedia/commons/5/5d/Municipal_garden_Funchal%2C_Madeira._%28Small_city_park%29_Nice_Walks.webm')


src(s0)
.contrast(0.5)
.thresh(0.4)
.out(o1)

osc(10,0.3,20)
.contrast(0.5)
  .layer
(
  gradient().mask(noise(5, 0.1))
  )
  .modulate(o0, 0.1)
.blend(o0)
.out(o2)

src(o2)
  .layer(
src(s1)
  .color(0,()=>Math.sin(time),0)
 .mask(src(o1))
)
  .blend(o0)
  .out(o0)
