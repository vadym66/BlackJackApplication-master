function OnSuccess(data) {
    debugger;
    if (data.result) {
        window.location.href = data.url;
    }
}

$("#takeButton").kendoButton();
$("#enoughButton").kendoButton();
