function getImage() {
		var curPath = document.getElementById("switch").getAttribute("src");
		if (curPath === "switch_images/switch7.JPG") {
			path = "switch_images/switch1.jpeg";
		} else if (curPath === "switch_images/switch1.jpeg") {
			path = "switch_images/switch2.jpeg";
		} else if (curPath === "switch_images/switch2.jpeg") {
			path = "switch_images/switch3.jpeg";
		} else if (curPath === "switch_images/switch3.jpeg") {
			path = "switch_images/switch4.jpeg";
		} else if (curPath === "switch_images/switch4.jpeg") {
			path = "switch_images/switch5.jpeg";
		} else if (curPath === "switch_images/switch5.jpeg") {
			path = "switch_images/switch6.jpeg";
		} else {
			path = "switch_images/switch7.JPG"
		}
		document.getElementById("switch").src = path;
}

function getImageRev() {
		var curPath = document.getElementById("switch").getAttribute("src");
		if (curPath === "switch_images/switch2.jpeg") {
			path = "switch_images/switch1.jpeg";
		} else if (curPath === "switch_images/switch3.jpeg") {
			path = "switch_images/switch2.jpeg";
		} else if (curPath === "switch_images/switch4.jpeg") {
			path = "switch_images/switch3.jpeg";
		} else if (curPath === "switch_images/switch5.jpeg") {
			path = "switch_images/switch4.jpeg";
		} else if (curPath === "switch_images/switch6.jpeg") {
			path = "switch_images/switch5.jpeg";
		} else if (curPath === "switch_images/switch7.JPG") {
			path = "switch_images/switch6.jpeg";
		} else {
			path = "switch_images/switch7.JPG"
		}
		document.getElementById("switch").src = path;
}