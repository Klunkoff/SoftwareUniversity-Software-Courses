function browserHistory(object, array) {

    for (let action of array) {

        if (action === 'Clear History and Cache') {

            object['Open Tabs'] = [];
            object['Recently Closed'] = [];
            object['Browser Logs'] = [];

            continue;
        }

        let actionSplit = action.split(' ');
        let website = actionSplit[1];
        let index = object['Open Tabs'].indexOf(website);

        if (action.startsWith('Open') && index === -1) {

            object['Open Tabs'].push(website);
            object['Browser Logs'].push(action);

        } else if (action.startsWith('Close') && index !== -1) {

            object['Open Tabs'].splice(index, 1);
            object['Recently Closed'].push(website);
            object['Browser Logs'].push(action);
        }
    }

    let result = `${object['Browser Name']}\n`;

    result += `Open Tabs: ${object['Open Tabs'].join(', ')}\n`;
    result += `Recently Closed: ${object['Recently Closed'].join(', ')}\n`;
    result += `Browser Logs: ${object['Browser Logs'].join(', ')}`;

    console.log(result);
}

browserHistory({
    "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
}, ["Close Facebook", "Open StackOverFlow", "Open Google"]);

  browserHistory({"Browser Name":"Mozilla Firefox",
  "Open Tabs":["YouTube"],
  "Recently Closed":["Gmail", "Dropbox"],
  "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
  ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]);