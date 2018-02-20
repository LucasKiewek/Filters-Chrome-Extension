if (!document.getElementById("filterExtention")) {
  var body_element = document.getElementsByTagName("BODY")[0];

  var filter_div = document.createElement("div");

  filter_div.id = "filterExtention";
  filter_div.style.position = "fixed";
  filter_div.style.top = "0";
  filter_div.style.left = "0";
  filter_div.style.height = "100%";
  filter_div.style.width = "100%";
  filter_div.style.zIndex = "999";
  filter_div.style.backgroundColor = "rgb(255, 0, 0)";
  filter_div.style.opacity = "0.6";
  filter_div.style.pointerEvents = "none";

  body_element.appendChild(filter_div);

  // body_element.style.backgroundColor = "rgb(255, 0, 0)"
} else {
  document.getElementById("filterExtention").remove();
}
