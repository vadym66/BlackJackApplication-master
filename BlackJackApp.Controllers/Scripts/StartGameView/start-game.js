var dataN = [0, 1, 2, 3, 4, 5]

$("#dropElementId").kendoDropDownList({
    dataSource: dataN
});

$("#startbutton").kendoButton();

$("#startbutton").click(function () {
    $("#form").submit()
});
