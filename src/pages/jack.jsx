import React from "react";
              import Header from '../components/Header/index';
              import Footer from '../components/Footer/index';
              export default ()=>(
              <>
               <Header/>
                <div style={{
                  marginTop: 86,
                  minHeight: "calc(100vh - 467px)",
                }} dangerouslySetInnerHTML={{__html: `<html><head><link data-vvveb-helpers="" href="http://localhost:3000/assets/vvvebjs-libs/libs/builder/../../css/vvvebjs-editor-helpers.css" rel="stylesheet"><link data-vvveb-helpers="" href="http://localhost:3000/assets/vvvebjs-libs/libs/builder/../../css/vvvebjs-editor-helpers.css" rel="stylesheet"><link data-vvveb-helpers="" href="http://localhost:3000/assets/vvvebjs-libs/libs/builder/../../css/vvvebjs-editor-helpers.css" rel="stylesheet"></head><body>
      <div classname="container">
        <div classname="row">
          <div classname="col-lg-12 text-center">
            <h1 classname="mt-5" contenteditable="true" spellcheckker="false">QWERTYUIO</h1>
            <p classname="lead">Start by dragging components to page or double click to edit text</p>
          </div>
        </div>
      </div>
    
  
  </body></html>`}}></div>
                <Footer/>
              </>
                )
            