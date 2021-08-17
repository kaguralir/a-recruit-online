import React ,{useState} from 'react'
import dynamic from 'next/dynamic'

const Viewer = dynamic(() => import('react-file-viewer'), {
    ssr: false
});

export default function pdfPreview(props) {
   
    console.log(props.url)
    return (
        <div>
            <Viewer
                fileType={'pdf'}
                filePath={props.url}
            />
        </div>
    );
}
