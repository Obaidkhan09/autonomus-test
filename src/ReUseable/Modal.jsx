import React from 'react';
import { customComponents } from './SupportingModal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from "../Store/modalSlice"

const Modal = () => {
    const dispatch = useDispatch()
    const modalData = useSelector((state) => state.modalState)
    const { isVisible, content } = modalData;
    const { title, message, onSubmit, onApprove, onProcess, value, onCancel } = content;
    console.log(isVisible);
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-xl w-1/3 p-6">
                {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
                {message && <p className="mb-4">{message}</p>}
                {customComponents(value)}

                <div className="flex justify-end space-x-3 mt-6">
                    {onSubmit && (
                        <button
                            className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-lg"
                            onClick={onSubmit}
                        >
                            Submit
                        </button>
                    )}
                    <button
                        className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-lg"
                        onClick={()=>{
                            if (onCancel) {
                                onCancel();
                            }
                            dispatch(closeModal())
                        }}
                    >
                        Cancel
                    </button>
                    {onApprove && (
                        <button
                            className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-lg"
                            onClick={onApprove}
                        >
                            Approve
                        </button>
                    )}
                    {onProcess && (
                        <button
                            className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-lg"
                            onClick={onProcess}
                        >
                            Process
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;
