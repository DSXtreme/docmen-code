/**
 * Triggers the download of a Markdown file containing the specified content.
 * 
 * This function creates a Blob object from the `markdownContent`, generates a 
 * temporary URL for that Blob, creates an anchor element to facilitate the 
 * download, and then simulates a click on the anchor element to initiate the 
 * download process. Finally, it cleans up by removing the anchor element and 
 * revoking the Blob URL to free up memory.
 */

type Param = {
  markdownContent: string
}

const downloadMarkdown = ({markdownContent}:Param) => {
    // Create a Blob object containing the Markdown content.
    // Blob is used to represent the file-like object of the content.
    const blob = new Blob([markdownContent], { type: 'text/markdown' });
  
    // Generate a temporary URL for the Blob object.
    // This URL is used to reference the Blob data.
    const url = window.URL.createObjectURL(blob);
  
    // Create a new anchor (a) element.
    // This element will be used to trigger the file download.
    const a = document.createElement('a');
  
    // Set the href attribute of the anchor to the Blob URL.
    // This makes the Blob accessible for download.
    a.href = url;
  
    // Set the download attribute of the anchor.
    // This specifies the name of the file to be downloaded.
    a.download = 'file.md';
  
    // Append the anchor element to the document body.
    // This is necessary for the browser to recognize the anchor element for download.
    document.body.appendChild(a);
  
    // Programmatically click the anchor element to trigger the download.
    a.click();
  
    // Remove the anchor element from the document body.
    // This cleans up the DOM by removing the temporary anchor element.
    document.body.removeChild(a);
  
    // Revoke the Blob URL to free up memory.
    // This is done after the download is initiated to release resources.
    window.URL.revokeObjectURL(url);
  };