import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

  const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

export default function Sample() {
  const [file, setFile] = useState('./cv-antti-english-2021.pdf');
  const [numPages, setNumPages] = useState(null);

  function onFileChange(event) {
    setFile(event.target.files[0]);
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div className="PDF">
      <div className="PDF__container">
        <div className="PDF__container__load">
         
          
        </div>
        <div className="PDF__container__document">
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
          >
            {
              Array.from(
                new Array(numPages),
                (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                  />
                ),
              )
            }
          </Document>
        </div>
      </div>
    </div>
  );
}