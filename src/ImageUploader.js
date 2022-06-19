import React, {useState} from 'react'

export default function ImageUploader() {
    const [selectedFile, setSelectedFile] = useState(null)
    const [uploaded, setUploaded] = useState(false)
    function fetchFile(event) {
        setSelectedFile(event.target.files[0])
        setUploaded(true)
    }

    if(uploaded) {
     return (
         <div>
             {selectedFile}
         </div>
     )   
    } else {
        return (
            <div>
                <input type="file" onChange={fetchFile}/>
            </div>
        )
    }
}