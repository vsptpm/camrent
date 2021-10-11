import React, {useState,useEffect} from 'react'
import { db } from '../Firebase';
import firebase from "firebase/compat/app"
import './ImageUpload.css';
import { useAuth } from '../context/AuthContext'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Header from './Header';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import  {camera} from './camera';


function ImageUpload() {
    const storage = getStorage();
    const { currentUser } = useAuth()
    const [image,setImage] = useState(null);
    const [progress, setProgress] = useState(50);
    const [title, setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        if (e.target.files[0]){
            setImage(e.target.files[0]);
        }
    }

    const handleUpload = () => {
        const storageRef = ref(storage, 'images/' + image.name);    
        const uploadTask = uploadBytesResumable(storageRef, image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                //progress function goeas here..
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100);
                setProgress(progress);
            },
            (error) => {
                //error function...
                console.log(error);
                alert(error.message);
            },
            () => {
                //upload complete function and gets a urls
                getDownloadURL(uploadTask.snapshot.ref)
                    .then(
                        url => {
                    // post image into db
                    db.collection("posts").add({
                        timestamp : firebase.firestore.FieldValue.serverTimestamp(),
                        email: currentUser.email,
                        title: title,
                        price: price,
                        description : description,
                        imageUrl: url,
                        displayName: currentUser.displayName
                    });
                    setProgress(0);
                    setDescription("");
                    setImage(null);
                    setPrice('');
                    setImage(null);
                    setTitle('');
                })
            }
        )
    }

    return (
        <div>
            <Header/>

                <div className="ImageUpload">
                    <div className="upload-container">

                    
                        {/* <h1>Tell us about your gear..!</h1> */}
                        <h3>{title}</h3>
                        <div className="select-product">
                            <Autocomplete
                            id="combo-box"
                            options={camera}
                            getOptionLabel={(option) => option.CameraModel}
                            onChange={(event, value) => {
                                if(value)
                                {setTitle(value.CameraModel)}
                            }}
                            style={{ width: 350 }}
                            renderInput={(params) => <TextField {...params} label="Camera" variant="outlined" />}
                            />
                        </div>
                        
                        <br/>
                        <TextField 
                            className="input-field"  
                            style={{ width: 350 }}
                            label="Description"  
                            onChange={(e) => setDescription(e.target.value)}
                            variant="outlined" 
                        />
                        <br/>
                        <TextField 
                            className="input-field"  
                            label="Rate/Day"  
                            style={{ width: 100 }}
                            onChange={(e) => setPrice(e.target.value)}
                            variant="outlined" 
                        />
                        <input className="imageupload__select" type="file" onChange={handleChange} />
                        <br/> 
                        <progress className="imageUpload__progress" value={progress} max="100" />
                        <br/>
                        <button disabled = {loading} className="imageupload__button" onClick={handleUpload}>
                            Upload
                        </button>
                        
                    </div>
                </div>
        </div>
    )
}

export default ImageUpload