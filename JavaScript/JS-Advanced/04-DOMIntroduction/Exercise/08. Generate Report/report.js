function generateReport() {

    let headerList = Array.from(document.querySelectorAll('input'));
    let rowInfoList = document.querySelectorAll('tbody tr');

    let checkedHeadersObject = {};
    let resultArray = [];

    for (let i = 0; i < headerList.length; i++) {

        if (headerList[i].checked) {

            checkedHeadersObject[i] = ((headerList[i].parentElement.textContent)).trimEnd().toLowerCase();
        }
    }

    for (let row of rowInfoList) {

        let currentObject = {};

        for (let j = 0; j < row.children.length; j++) {

            if (checkedHeadersObject.hasOwnProperty(j)) {

                let key = checkedHeadersObject[j];
                currentObject[key] = row.children[j].textContent;
            }
        }
        
        resultArray.push(currentObject);
    }

    document.getElementById('output').textContent = JSON.stringify(resultArray);
}