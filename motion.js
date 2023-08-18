// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// forked from sketch by Olivia Jack

osc(20, 0.03, 1.7)
  .kaleid()
  .mult(osc(10, 0.001, 0)
        .rotate(1.58, .3))
  .blend(o0, 0.80)
  .modulateScale(osc(10, 0),-0.5)
  .scale(0.8, () => (1.05 + 0.1 * Math.sin(0.05*time)))
  .out(o0)
