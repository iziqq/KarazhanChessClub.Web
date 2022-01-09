import Events from "@models/shared/Events";
import EventBus from "@models/EventBus";
import SideAlert from "@models/shared/SideAlert";

export function getAutoCompleteItemsFromEnum(e) {
  return Object.keys(e)
    .filter(value => isNaN(Number(value)) === false)
    .map(key => {
      return {
        text: e[key],
        value: parseInt(key)
      };
    });
}

export function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function downloadCsvFromDataTable(
  headers: any[],
  data: any[],
  fileName = "export.csv"
) {
  let csvContent = "data:text/csv;charset=utf-8,\uFEFF";

  csvContent +=
    headers
      .filter(x => !x.ignoreExport)
      .map(x => x.text)
      .join(";") + "\n";

  data.forEach(x => {
    csvContent +=
      headers
        .filter(x => !x.ignoreExport)
        .map(h => x[h.value])
        .join(";") + "\n";
  });

  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", fileName);
  document.body.appendChild(link); // Required for FF

  link.click();
}

export function copyToCliboard(text: string): Boolean {
  var input = document.createElement("input");
  input.value = text;

  document.body.appendChild(input);

  input.select();
  input.setSelectionRange(0, 9999);

  var success = document.execCommand("copy");

  document.body.removeChild(input);

  return success;
}
