a.setSmooth(.1)

noise( 2 ,2,10)
.color(.8,.8,.2)
.kaleid(5)
.modulatePixelate(osc(5,2,2))
.out(o0)

src(o0).blend(o0).out(o1)
render(o0)
//hush()
