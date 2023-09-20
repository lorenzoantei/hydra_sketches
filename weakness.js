// weakness
// 2023-06-11
// Officina Ponte di ferro (Carrara)

osc(3, 0.9, 0.001)
    .kaleid([3,40,5,7,8,9,10,24].fast(12))
    .color(0.8, 0.7)
    .colorama([.2,.3,.5,12])
    .rotate(0.0049,()=>Math.sin(time)* -0.031 )
    .modulateRotate(o0,()=>Math.sin(time) * .4)
    .modulate(o0, 0.8)
    .scale(12) //var
    .out(o0)
