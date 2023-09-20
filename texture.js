osc(20,0.01,1).modulateRotate(noise(3,0.1,1),1).mask(shape(4,0.1,0.99).repeat(4,4)).add(o0,0.9).out(o1)
src(o1).modulate(src(o1), 0.1).out(o2)
solid().layer(src(o1).diff(o2)).blend(o0,0.9).out(o0)
