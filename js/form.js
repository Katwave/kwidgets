// input animation

class FormAnimation {
  constructor(inp, label) {
    this.inp = inp;
    this.label = label;
  }

  animate() {
    for (let i = 0; i < this.inp.length; i++) {
      this.inp[i].addEventListener("click", () => {
        this.label[i].style = "top: 0px";
      });
      if (this.inp[i].value) {
        this.label[i].style = "top: 0px";
      }
    }
  }
}
