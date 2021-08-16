import React, { Component } from 'react'
import PDFViewer from 'pdf-viewer-reactjs'

export default class pdfPreview extends Component {
    render() {
        return (
            <div className="register_todo_container center pdf">

                <PDFViewer
                    document={{
                        url:this.props.url,
                    }}
                    showThumbnail={{

                        scale: 2, // Thumbnail scale, ranges from 1 to 5

                        rotationAngle: 0, // Thumbnail rotation angle, values can be -90, 0 or 90. Default is 0

                        onTop: true, // Thumbnail position, if set to true thumbnail will be placed on top

                        backgroundColor: "#fff", // Color(hex or rgb) of the thumbnail container

                        thumbCss:"pdf_bar", // Custom css class for thumbnails

                        selectedThumbCss:"pdf_bar_selected_item", // Custom css class for selected thumbnail
                    }}
                    navigation={{
                        css: {

                            navbarWrapper:  "navigation", // CSS Class for the Navbar Wrapper
                            
                            zoomOutBtn:  "pdf_btn ", // CSS Class for the ZoomOut Button
                            
                            resetZoomBtn:  "pdf_btn", // CSS Class for the Reset Zoom Button
                            
                            zoomInBtn:  "pdf_btn", // CSS Class for the ZoomIn Button
                            
                            previousPageBtn:  "pdf_btn", // CSS Class for the Previous Page button
                            
                            pageIndicator:  "page", // CSS Class for the Page Indicator
                            
                            nextPageBtn:  "pdf_btn", // CSS Class for the Next Page button
                            
                            rotateLeftBtn:  "pdf_btn", // CSS Class for the RotateLeft button
                            
                            resetRotationBtn:  "pdf_btn", // CSS Class for the Reset Rotation button
                            
                            rotateRightBtn:  "pdf_btn"  // CSS Class for the RotateRight button
                            
                        }
                    }}
                    canvasCss="pages"

                />
              
            </div>
        )
    }
}
