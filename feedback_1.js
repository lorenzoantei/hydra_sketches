src(o0)
	.modulateHue(src(o0)
		.scale(1.01), 2)
	.layer(osc(8, 0.1, 2)
		.mask(shape(5, 0.3, 1e-6)), .1)
	.out()