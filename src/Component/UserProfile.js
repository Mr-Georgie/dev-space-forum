import React, { useContext} from 'react'
import { UserContext } from './UtilityComponents/UserContext'

export default function UserProfile() {

    const { user, toast } = useContext(UserContext)

    const editUser = (id) => {
        toast.info("Please we are working on this feature")
    }

    const deleteUser = (id) => {
        toast.warning("Please don't delete your account yet")
    }

    return (
        <div className="main-content">
            <div className="shrink-0">
                <div className="bg-white relative overflow-hidden mb-6">
                    <div className="w-full h-48 bg-slate-500"></div>
                    <div className="flex flex-col justify-center items-center absolute top-0 right-0 left-0 h-full bg-trans-black">
                        <div className="p-8">
                            <h3 className="flex justify-center text-white text-3xl font-extrabold ">
                                { user.name }
                            </h3>
                            <h6 className="flex justify-center text-white text-md font-medium ">
                                { user.email }
                            </h6>
                        </div>
                    </div>

                </div>
            </div>

            <div className="px-4">
                    <div className="flex justify-center pb-4">
                        <label className="block">
                            <span className="sr-only">Choose photo for this space</span>
                            <span className="flex justify-center text-sm font-medium text-slate-300 pb-1">Add/Change a display picture</span>
                            <input type="file" className="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100
                            "/>
                        </label>
                    </div>

                <label className="block py-2">
                    <span className="block text-lg font-medium text-slate-500 pb-1" htmlFor="title">Account Info</span>
                </label>

                <label className="block py-2">
                    <span className="block text-sm font-medium text-slate-500 pb-1" htmlFor="title">Email Verification</span>
                    <span className="block text-sm text-slate-700 pb-1" htmlFor="title">
                        { user.emailVerification === true ? "Verified" : "Not Verified"}
                    </span>
                </label>

                <label className="block py-2">
                    <span className="block text-sm font-medium text-slate-500 pb-1" htmlFor="title">Date Joined</span>
                    <span className="block text-sm text-slate-700 pb-1" htmlFor="title">
                        { new Date(user.registration * 1000).toDateString() }
                    </span>
                </label>
            </div>

            <div className="flex px-4 gap-4">
                <div className="mt-3" onClick={() => editUser(user['$id'])}>
                    <button className="btn-indigo font-bold"> Edit My Account</button>
                </div>

                <div className="mt-3" onClick={() => deleteUser(user['$id'])}>
                    <button className="btn-red font-bold"> Delete My Account</button>
                </div>
            </div>
        </div>
    )
}
