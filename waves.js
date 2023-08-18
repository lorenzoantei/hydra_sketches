// waves

shape(1,.3,0)
	.modulateScale(noise(3,0.1).modulateScale(osc(20).rotate(()=>Math.sin(time/2))),0.6)
	.color(1,0.5,0.4).contrast(1.4)
	.add(src(o0).modulate(o0,.02),.6)
	.invert().brightness(0.1).contrast(1.2)
	.modulateScale(osc(2),-0.2)
	.modulateRotate(osc(2),-0.2)
  .out()
