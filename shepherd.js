
let tour = new Shepherd.Tour({
  useModalOverlay: true,
  defaultStepOptions: {
      exitOnEsc: true,
      cancelIcon: {
          enabled: true,
      },
  }, 
});

tour.addStep({
  id: "step1",
  title: " BI Remover",
  text: "Welcome to BI remover which helps you to remove the image background, with just one click",
  buttons: [
      {
        text: "Next",
        action() {
          return this.next();
        },
      },
    ],
  });

tour.addStep({
id: "step2",
title: "Choosing the file",
text: "Choose the file you want to remove the background. Whether it for professional work or personal portraits",
attachTo: {
  element: "#fileInput",
  on: "right",
},
buttons: [
  {
    text: "Back",
    action() {
      return this.back();
    },
  },
  {
    text: "Next",
    action() {
      return this.next();
    },
  },
],
});

tour.addStep({
id: "step3",
title: "Upload the image",
text: "Once you click the UPLOAD button it gives you the preview for the uploaded image.",
attachTo: {
  element: `#uploadBtn`,
  on: "right",
},
buttons: [
  {
    text: "Back",
    action() {
      return this.back();
    },
  },
  {
    text: "Next",
    action() {
      return this.next();
    },
  },
],
});

tour.addStep({
id: "step4",
title: "Download the images ",
text: "Once you click the download button , the download will automatically starts in (.png) format",
attachTo: {
  element: `#downloadBtn`,
  on: "bottom",
},
buttons: [
  {
    text: "Back",
    action() {
      return this.back();
    },
  },
  {
    text: "Finish",
    action() {
      return this.next();
    },
  },
],
});
tour.start();