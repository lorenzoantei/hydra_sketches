// weakness
// 2023-06-11
// Officina Ponte di ferro (Carrara)

osc(6, 0.9, 0.001)
    .kaleid([3,4,5,7,8,9,10].fast(10))
    .color(0.5, 0.3)
    .colorama([.2,.3,.5,.4])
    .rotate(0.009,()=>Math.sin(time)* -0.001 )
    .modulateRotate(o0,()=>Math.sin(time) * 2)
    .modulate(o0, 0.2)
    .scale(.8) //var
    .out(o0)
