osc()
  .kaleid(3,3)
	.rotate(.3,.3)
	.pixelate(2)
	.kaleid(3,3)
	.colorama(10,3)
	.posterize(3)
	.rotate(2,.3)
	.kaleid(3,2)
	.modulate(noise(1,5,0))
	.modulateScale(-noise(1,1,0))
	.kaleid(5,5)
	.modulateRotate(2,2)
	.color(.9,0,.9)
  .out()
