import React, { Component } from 'react'
import Classiceditor from '@ckeditor/ckeditor5-build-classic';
import ckeditor, { CKEditor } from '@ckeditor/ckeditor5-react'

export default class AdminGrammar extends Component {

    handleCkeditorState = (event, editor) => {
        const data = editor.getData();
        console.log(data);
    }

    render() {
        return (
            <div>
                <CKEditor 
                    editor={Classiceditor}
                    onReady={ editor => {
                        console.log( 'Editor1 is ready to use!', editor );
                    }}

                    onChange={this.handleCkeditorState}
                />
            </div>
        )
    }
}
