var offset = 0;

$("#grid").kendoGrid({
    dataSource: {
        transport: {
            read: {
                url: "GetGames/History",
                dataType: "json",
                type: "post"
            }
        },
    },
    height: 600,
    columns: [
        { field: "GameId", title: "Id" },
        { field: "HumanName", title: "Name" },
        {
            field: "GameCreation",
            title: "Date",
            type: "date",
            format: "{0:MMMM/dd/yyyy H:mm}"
        },
        { command: { text: "Details", click: showDetails }, title: " ", width: "180px" }
    ]
});

$(".k-grid-content").on("scroll", function () {
    if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
        var grid = $("#grid").data("kendoGrid");
        offset += 10;
        $.ajax(
            {
                type: 'POST',
                url: "GetNextGames/History",
                data: { offset: offset },
                dataType: 'json',
                success: function (result) {
                    for (var i = 0; i < result.length; i++) {
                        var date = new Date(result[i].GameCreation);
                        grid.dataSource.add({ GameId: result[i].GameId, HumanName: result[i].HumanName, GameCreation: date });
                    }
                }
            });
    }
});

function showDetails(e) {
    e.preventDefault();
    var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
    Id = dataItem.GameId;
    window.open(("Details/") + Id);
};