function extractFile(filePathString) {

    let extensionIndex = filePathString.lastIndexOf('.');
    let extension = filePathString.substring(extensionIndex + 1);

    let fileNameIndex = filePathString.lastIndexOf('\\');
    let fileName = filePathString.substring(fileNameIndex + 1, extensionIndex);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');