import React, { 
    useState, 
    useContext
} from 'react'

import { useLocation } from "react-router-dom"
import { SpaceContext } from '../UtilityComponents/SpaceContext'
import { ImageContext } from '../UtilityComponents/ImageContext'

import noImg from '../../images/no-image.png'

export default function EditSpace() {

    // the current space to be edit was passed as a prop through useLocation
    const { state } = useLocation()

    // get relevant functions from space context and image context
    const { updateSpace, getSpaceImagePreview } = useContext(SpaceContext)
    const { image, uploadImage, getImagePreview, removeUploadedImage, removeImageFromDatabase, toast } = useContext(ImageContext)

    // this state will hold new image upload from form before user updates space 
    const [formImage, setFormImage] = useState()

    // save current image id to enable manipulation
    const [currentImageId, setCurrentImageId] = useState(state.image_id)
    
    // this will decide if the newly uploaded image should be rendered
    const [showImagePreview, setShowImagePreview] = useState(false)

    const [formData, setFormData] = useState({
        id: state['$id'],
        title: state.title,
        link: state.link === null ? "" : state.link,
        tags: state.tags === null ? "" : state.tags,
        date: state.date === null ? "" : state.date,
        time: state.time === null ? "" : state.time,
        platform: state.platform === null ? "" : state.platform,
        about: state.about === null ? "" : state.about
    })
    
    // update form user input state on change
    function handleChange(event) {
        const { name, value } = event.target
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
          created_at: Date.now()
        }))
    }

    // function to handle image upload  
    const isImageUploaded = () => {

        if(currentImageId !== null) {
            toast.warning("Please remove the current image before uploading new image")
        } else {

            if(formImage === undefined){
                toast.warning("Please add image first")
            } else {
                uploadImage(formImage)
                setShowImagePreview(true)
            }
        }
        
    }

    const isImageRemoved = () => {

        // replace current space image_id with null
        setCurrentImageId(null)

        // remove image from database
        removeImageFromDatabase(state.image_id)

        // remove any image recently uploaded
        removeUploadedImage()

        // don't show any image preview
        setShowImagePreview(false)

        console.log(currentImageId)

    }
    
    const beforeSpaceUpdate = (event) => {
        event.preventDefault()

        const { id, ...data } = formData

        if (currentImageId === null) {
            data.image_id = image['$id'] !== undefined ? image['$id'] : null

        } else {
            data.image_id = currentImageId
        }

        updateSpace( data, id)
        
    }

    return (
    
        <div className="main-content">
            
            <div className="">

                <div className="space-y-6">

                    <div className="shrink-0">
                        {
                            showImagePreview &&
                            <img className="w-full h-48 object-cover" 
                                src={getImagePreview()} 
                                alt="space cover" 
                            />
                        }

                        {
                            !showImagePreview &&
                            <div className="shrink-0">
                                {/* display current space cover image */}
                                {
                                    currentImageId === null ?
                                    <img className="w-full h-48 object-cover" 
                                        src={noImg} 
                                        alt="space cover" 
                                    />
                                    :
                                    <img className="w-full h-48 object-cover" 
                                        src={getSpaceImagePreview(currentImageId)} 
                                        alt="space cover" 
                                    />

                                }
                            </div>
                        }
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="flex justify-center text-sm font-medium text-slate-700 pb-1">Add cover Image</span>
                        <label className="flex mb-4">
                            <span className="sr-only">Choose photo for this space</span>
                            <input type="file" 
                                className="block w-full text-sm text-slate-500
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-full file:border-0
                                    file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                                onChange={(event) => {
                                    setFormImage(event.target.files[0])
                                }}
                            />
                        </label>
                        <div className="flex gap-3">    
                            <button className="btn-red px-3 py-1" onClick={() => isImageRemoved()}>Remove</button>
                            <button className="btn-indigo px-3 py-1" onClick={() => isImageUploaded()}>Upload</button>
                        </div>
                                
                    </div>
                </div>
            
                {/* form */}
                <form onSubmit={(event) => beforeSpaceUpdate(event)}>

                    <div className="p-4">
                        <label className="block py-2">
                            <span className="block text-sm font-medium text-slate-700 pb-1" htmlFor="title">Title</span>
                            <input type="text" name="title" onChange={handleChange} value={formData.title}
                                    className="mt-1 block w-full px-3 py-2 
                                bg-white border border-slate-300 rounded-md 
                                    text-sm shadow-sm placeholder-slate-400 
                                    focus:outline-none focus:border-sky-500 
                                    focus:ring-1 focus:ring-sky-500"
                                    required
                            />
                        </label>
                        <label className="block py-2">
                            <span className="block text-sm font-medium text-slate-700 pb-1" htmlFor="tags">Tags</span>
                            <input type="text" name="tags" onChange={handleChange} value={formData.tags}
                                    className="mt-1 block w-full px-3 py-2 
                                bg-white border border-slate-300 rounded-md 
                                    text-sm shadow-sm placeholder-slate-400 
                                    focus:outline-none focus:border-sky-500 
                                    focus:ring-1 focus:ring-sky-500
                                    "
                            />
                        </label>
                        <label className="block py-2">
                            <span className="block text-sm font-medium text-slate-700 pb-1" htmlFor="link">Link</span>
                            <input type="url" name="link" onChange={handleChange} value={formData.link}
                                    className="mt-1 block w-full px-3 py-2 
                                bg-white border border-slate-300 rounded-md 
                                    text-sm shadow-sm placeholder-slate-400 
                                    focus:outline-none focus:border-sky-500 
                                    focus:ring-1 focus:ring-sky-500"
                            />
                        </label>
                        <label className="block py-2">
                            <span className="block text-sm font-medium text-slate-700 pb-1" htmlFor="date">Date</span>
                            <input type="date" name="date" onChange={handleChange} value={formData.date}
                                    className="mt-1 block w-full px-3 py-2 
                                bg-white border border-slate-300 rounded-md 
                                    text-sm shadow-sm placeholder-slate-400 
                                    focus:outline-none focus:border-sky-500 
                                    focus:ring-1 focus:ring-sky-500"
                            />
                        </label>
                        <label className="block py-2">
                            <span className="block text-sm font-medium text-slate-700 pb-1" htmlFor="time">Time</span>
                            <input type="time" name="time" onChange={handleChange} value={formData.time}
                                    className="mt-1 block w-full px-3 py-2 
                                bg-white border border-slate-300 rounded-md 
                                    text-sm shadow-sm placeholder-slate-400 
                                    focus:outline-none focus:border-sky-500 
                                    focus:ring-1 focus:ring-sky-500"
                            />
                        </label>

                        <label htmlFor="" className="block py-2">
                            <span className="block text-sm font-medium text-slate-700 pb-1" htmlFor="time">Platform</span>
                            <select
                                value={formData.platform}
                                onChange={handleChange}
                                name="platform"
                                className="mt-1 block w-full px-3 py-2 
                                bg-white border border-slate-300 rounded-md 
                                    text-sm shadow-sm placeholder-slate-400 
                                    focus:outline-none focus:border-sky-500 
                                    focus:ring-1 focus:ring-sky-500"
                            >
                                <option value="{formData.role}">{`--${formData.platform}--`}</option>
                                <option value="Google Meet">Google Meet</option>
                                <option value="Zoom">Zoom</option>
                            </select>
                        </label>

                        <label className="block py-2">
                            <span className="block text-sm font-medium text-slate-700 pb-1" htmlFor="title">About this space</span>
                            <textarea 
                                rows="10"
                                placeholder="What exactly will be discoursed during the space?"
                                name="about" 
                                onChange={handleChange} 
                                value={formData.about}
                                className="mt-1 block w-full px-3 py-2 
                                  bg-white border border-slate-300 rounded-md 
                                    text-sm shadow-sm placeholder-slate-400 
                                    focus:outline-none focus:border-sky-500 
                                    focus:ring-1 focus:ring-sky-500"
                            />
                        </label>

                        <div className="">
                            <button className="btn-indigo font-bold mt-6"> Update</button>
                        </div>
                    </div>
                </form>
            
            </div>
        </div>
    )
}
