import React, {useState} from 'react'

export default function ImageUploader() {
    const [image, setImage] = useState(null)
    const [uploaded, setUploaded] = useState(false)

const fetchFile = (event) => {
 if (event.target.files && event.target.files[0]) {
   setImage(URL.createObjectURL(event.target.files[0]));
 }
 setUploaded(true)
}

function resetInput() {
    setUploaded(false)
    setImage(null)
}

if(uploaded) {
    return (
    <div>
        <p>Your pictures are not stored.</p>
        <input type="button" onClick={resetInput} value="Remove" />
        <img src={image} alt="preview sundamage" />
  </div>
)
} else {
    return (
    <div>
        <p>Your pictures are not stored.</p>
        <input type="file" onChange={fetchFile} className="filetype" />
    </div>
    )
}
}