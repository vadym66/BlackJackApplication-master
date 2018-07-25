function OnSuccess(data) {
    console.log('request passed');
    if (data.result) {
        window.location.href = data.url;
    }
}

$("#takeButton").kendoButton();
$("#enoughButton").kendoButton();
