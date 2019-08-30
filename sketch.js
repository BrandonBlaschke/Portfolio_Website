//Name of current icon.
var resizeName;

//If we are going to rezise icon or not
var resizeIcon = false;

//place holders for orginal icon widths
var ogMailWidth;
var ogGitHeight;

//Current velocity for the animation
var iconVel = 0;

//Set up variables
function setup() {
  ogMailWidth = $("#icon").width();
  ogGitWidth = $("#giticon").width();
}

//Animation loop
function draw() {

  //Draw icons changing
  animateIcon("#icon", ogMailWidth);
  animateIcon("#giticon", ogGitWidth);
}

//Animates an icon given its html id and orginal starting width
function animateIcon(iconName, orginalWidth) {

  //Apply the functions to control mouseout and mouseover for aniamtion
  $(iconName).mouseover(function() {
    resizeIcon = true;
    resizeName = iconName;
  });
  $(iconName).mouseout(function() {
    resizeIcon = false;
    resizeName = iconName;
  });

  //Only apply changes if were are on the right icon
  if (resizeName == iconName) {

    //Create variables for calculation
    var icon = $(iconName)
    var ogWidth = orginalWidth;
    var iconWidth = icon.width();
    var iconHeight = icon.height();
    var iconTarget = iconWidth + 10;
    var iconDrag = .82;
    var iconStrength = 0.2;

    //If we can resize then the target size will change
    if (resizeIcon) {
      iconTarget = ogWidth + 10;
    } else {
      iconTarget = ogWidth;
    }

    //Create the force for effect
    var forceWidth = iconTarget - iconWidth;
    forceWidth *= iconStrength;

    var forceHeight = iconTarget - iconHeight;
    forceHeight *= iconStrength;

    //Mul by drag and add by force to get new Velocity
    iconVel *= iconDrag;
    iconVel += forceWidth;

    //Add velocity to new radius
    iconWidth += iconVel;
    iconHeight += iconVel;

    //Apply new width and height
    $(icon).css("width", iconWidth + "px");
    $(icon).css("height", iconHeight + "px");
  }
}
