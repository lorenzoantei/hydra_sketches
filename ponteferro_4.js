a.show(6)
a.hide()
a.setSmooth(.1)
// hush()

osc(2, -0.0018, 0.927)
	.diff(osc(20, 0.00008)
		.rotate(Math.PI / 0.00003))
	.modulateScale(noise(2.5, 0.18)
		.modulateScale(osc(20.72)
			.rotate(() => Math.sin(time / 33))), 20)
	.color(50, 0.5, 0.4, 0.9, 0.2, 0.011, 5, 22, 0.988, -1)
	.contrast(3.4)
	.add(src(o0)
		.modulate(o0, .10), 0.862, .9)
	// .pixelate(200, [1, 5, 1.098].fast(), 0.1)
	.invert()
	.brightness(2, 1)
	.contrast(0.5, 2, 0.1, 2)
	.color(.9, -.2, -.6)
	.modulateScale(osc(25), -0.2, .5, 2, 0.8)
	.posterize(100)
	.rotate(10, 0.2, 0.01, 0.001)
	.color(2, -3.754, 0.5, 0.5, 2, 0.6, 0.2, 8)
	.contrast(0.18, 0.3, 0.1, 0.2, 0.03, 1)
	.brightness(0.0001, -1, 10)

	.rotate(2,.2) // aumentare entropia
  .kaleid(4,5,9)

	.out();
