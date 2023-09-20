s0.initScreen();
// s0.initCam();
// s0.clear();
// hush()

src(s0).out(o1)

src(o0).modulatePixelate(osc(2)).out(o1)

src(o0).modulateKaleid(osc(1,.1,2)).out(o2)

solid(2).out(o3)
render()
hush()


// render()
// // use webcam as source buffer

//
// // specify a specific camera to use
// // by passing an integer
// //
// //    e.x. built in front facing camera
// //         or using a USB webcam
// //
// s0.initCam(1);
//
// // take entire current screen view
// // and send to source buffer
// s0.initScreen();
//
// // take third window in array
// // and send to source buffer
// s0.initScreen(2);
//
// // clear source buffer
