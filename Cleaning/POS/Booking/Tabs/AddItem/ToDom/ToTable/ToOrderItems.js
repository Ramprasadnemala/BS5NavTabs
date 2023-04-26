let StartFunc = () => {
    let jVarLocalItemsTableBodyId = "ItemsTableBodyId";
    var jVarLocalHtmlTableBody = document.getElementById(jVarLocalItemsTableBodyId);


    jVarLocalHtmlTableBody.innerHTML = "";

    let jVarLocalItemsInOrder = localStorage.getItem("ItemsInOrder");
    let jVarLocaljVarLocalItemsInOrderJson = JSON.parse(jVarLocalItemsInOrder);

    jVarLocaljVarLocalItemsInOrderJson.forEach(element => {
        jFLocalItemsInsertRow({
            inTableBodyId: jVarLocalHtmlTableBody,
            inCategory: element.Category,
            inItemName: element.ItemName,
            inWashType: element.WashType,
            inPcs: element.Pcs,
            inItemRate: element.Rate,
            inAddOn: element.AddOn,
            inTotal: element.Total
        });
    });

    jFLocalShowTotals({ inJsonData: jVarLocaljVarLocalItemsInOrderJson });
};

let jFLocalShowTotals = ({ inJsonData }) => {
    let jVarLocalItemsTableFootPcs = document.getElementById("ItemsTableFootPcs");

    let jVarLocalPcsArray = inJsonData.map(element => element.Pcs);
    let sum = jVarLocalPcsArray.reduce((a, b) => a + b, 0);

    jVarLocalItemsTableFootPcs.innerHTML = sum;
};

let jFLocalItemsInsertRow = ({ inTableBodyId, inCategory, inItemName, inWashType, inPcs, inItemRate, inAddOn, inTotal }) => {
    // var table = document.getElementById(inTableBodyId);

    var table = inTableBodyId;
    let jVarLocalTableRowLength = table.rows.length

    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(0);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);

    cell5.className = "text-end";
    cell6.className = "text-end";
    cell7.className = "text-end";
    cell8.className = "text-end";

    let jVarLocalSerialButton = document.createElement("input");
    jVarLocalSerialButton.type = "button";
    jVarLocalSerialButton.value = jVarLocalTableRowLength + 1;

    cell1.appendChild(jVarLocalSerialButton);

    // cell1.innerHTML = jVarLocalTableRowLength + 1;
    cell2.innerHTML = inCategory;
    cell3.innerHTML = inItemName;
    cell4.innerHTML = inWashType;
    cell5.innerHTML = inPcs;
    cell6.innerHTML = `₹ ${inItemRate}`;
    cell7.innerHTML = `₹ ${inAddOn}`;
    cell8.innerHTML = `₹ ${inTotal}`;
};


export { StartFunc };