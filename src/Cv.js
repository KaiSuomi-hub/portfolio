import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import PDF from './cv-antti-english-2021.pdf';
function Cv() {
    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
    return (
            <div className="me">
            <Document
        file="cv-antti-english-2021.pdf"
        onLoadSuccess={onDocumentLoadSuccess}/>
            <a href='./cv-antti-english-2021.pdf' download>My CV</a>
            <div class="pdf"> </div>
            </div>
    );
}
export default Cv;