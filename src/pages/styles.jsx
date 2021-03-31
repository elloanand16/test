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
            <h1 classname="mt-5" style="float: none; text-align: center; text-decoration: none dotted rgb(205, 91, 91); width: 100%; height: 100%;">Bootstrap 4 start page</h1>
            <p classname="lead" style="text-align: center; text-decoration-line: underline overline; width: 100%; height: 100%; color: rgb(255, 87, 87);">Start by dragging components to page or double click to edit text</p>
          </div>
        </div>
      </div>
    
  
  </body></html>`}}></div>
                <Footer/>
              </>
                )
            