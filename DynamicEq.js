// Copyright (c) 2015 The MathJax Consortium 
//
// Davide P. Cervone 19 Jan 2016
// https://groups.google.com/forum/#!topic/mathjax-users/RBWy7xB1c3g
//
<script type="text/javascript">
DynamicEquation = {
  n: {},  // the current step number for each of the equations.

  //
  //  Create the buttons for an equation, and initialize the
  //  counter for it.
  //
  Buttons: function (name) {
    this.n[name] = 1;
    document.write(
      ['<input type="button" onclick="DynamicEquation.ShowStep(',"'",name,"'",')" ',
         'value="Show Next Step" id="step',name,'" disabled="true" /> '].join(""),
      ['<input type="button" onclick="DynamicEquation.ResetSteps(',"'",name,"'",')" ',
         'value="Reset" id="reset',name,'" disabled="true" />'].join("")
    );
  },

  //
  //  Make the current step be visible, and increment the step.
  //  If it is the last step, disable the step button.
  //  Once a step is taken, the reset button is made available.
  //
  ShowStep: function (name) {
    document.getElementById("Step"+this.n[name]+name).style.visibility = "visible";
    this.n[name]++;
    if (!document.getElementById("Step"+this.n[name]+name)) 
      document.getElementById("step"+name).disabled = true;
    document.getElementById("reset"+name).disabled = false;
  },

  //
  //  Enable the step button and disable the reset button.
  //  Hide the steps.
  //
  ResetSteps: function (name) {
    document.getElementById("step"+name).disabled = false;
    document.getElementById("reset"+name).disabled = true;
    var i = 1, step; this.n[name] = 1;
    while (step = document.getElementById("Step"+i+name)) {
      step.style.visibility = "hidden"; i++;
    }
  },

  //
  //  Reveal step buttons when MathJax's initial typesetting
  //  is complete.
  //
  EnableSteps: function () {
    for (var name in this.n) {if (this.n.hasOwnProperty(name)) {
      document.getElementById("step"+name).disabled = false;
    }}
  }
};
</script>
