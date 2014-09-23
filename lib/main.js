var self = require("sdk/self");

var button = require("sdk/ui/button/action").ActionButton({
  id: "style-tab",
  label: "Style Tab",
  icon: "./icon-16.png",
  onClick: handleClick

});


function handleClick(state) {

    require("sdk/tabs").activeTab.attach({
      contentScriptFile: [ self.data.url("Event/Event.js"),
                           self.data.url("Dragdrop/Dragdrop.js"),
                           self.data.url("RulersGuides/RulersGuides.js"),
                           self.data.url("application.js") ]
    });


     button.state("tab", {
    disabled: true });

  }