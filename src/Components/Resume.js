import DocViewer from "react-doc-viewer";
export default function Resume(){
    const docs = [
        { uri: "https://cdn.pixabay.com/photo/2017/03/23/09/34/artificial-intelligence-2167835_1280.jpg" },
       
      ];
     
    
    return(
        <>
        <DocViewer documents={docs} />
        </>
    );

}