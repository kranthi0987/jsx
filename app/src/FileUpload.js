import Dropzone from 'react-dropzone';
import ReactDom from 'react-dom'
import React from 'react';

class FileUpload extends ReactDom.Component {
    render() {
        return (
            <div className="App">
                <Dropzone onDrop={(files) => this.onDrop(files)}>
                    <div>Try dropping some files here, or click to select files to upload.</div>
                </Dropzone>
            </div>
        )
    }
}

export default FileUpload;