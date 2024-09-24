import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../Store/modalSlice";
import { addApp, deleteApp, updateApp } from "../Store/appListSlice";

const { useState, useEffect } = require("react");


const ForgetPassword = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState();
    return (
        <div className="flex justify-center mt-4">
            <div className="flex w-80">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="w-full p-2 text-sm text-gray-700 rounded-lg border border-primary-400 focus:ring-primary-700 focus:border-primary-700 mr-3"
                    required
                />
                <button
                    onClick={() => { dispatch(closeModal()) }}
                    className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-lg"
                >
                    Send
                </button>
            </div>
        </div>
    )
}
const ViewUpdateApps = ({ addnew }) => {
    const dispatch = useDispatch();
    const appDataStore = useSelector((state) => state.appData);

    const appsList = [
        { id: 1, name: 'Netflix', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png' },
        { id: 2, name: 'Amazon', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png' },
        { id: 3, name: 'Spotify', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png' },
        { id: 4, name: 'YouTube', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1280px-YouTube_full-color_icon_%282017%29.svg.png' },
        { id: 5, name: 'Facebook', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png' },
        { id: 6, name: 'Instagram', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/104px-Instagram_logo_2016.svg.png' },
        { id: 7, name: 'Twitter / X', imgUrl: 'https://freepnglogo.com/images/all_img/1691832581twitter-x-icon-png.png' },
        { id: 8, name: 'SoundCloud', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7J3rRkwpAZ1wqSCEgDihZxamjSij2yl91Nitm_j3RBvx5ZxKVWREml-Z5FxTee0Rz1k8&usqp=CAU' },
        { id: 9, name: 'Twitch', imgUrl: 'https://freelogopng.com/images/all_img/1656152266logo-twitch.png' },
    ];
    const [formData, setFormData] = useState({
        name: '',
        logo: '',
        isActive: false,
        cardNo: '',
        cvvNo: '',
        expDate: '',
        subscriptionExpiry: ""
    });
    useEffect(() => {
        if (appDataStore.selectedApp.id) {
            setFormData(appDataStore.selectedApp);
        }
    }, [appDataStore.selectedApp.id])

    const handleAppChange = (e) => {
        let selected = appsList.find((item) => item.name == e.target.value);
        setFormData({ ...formData, name: selected.name, logo: selected.imgUrl });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleRadioChange = (isActive) => {
        setFormData((prevData) => ({
            ...prevData,
            isActive: isActive,
        }));
    };

    const handleAddNew = () => {
        let date = new Date();
        const updatedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`;
        dispatch(addApp({ id: appDataStore.data.length + 1, ...formData, subscriptionExpiry: updatedDate }));
        dispatch(closeModal());
    };

    const handleSubmit = () => {
        dispatch(updateApp(formData));
        dispatch(closeModal());
    };

    const handleDelete = () => {
        dispatch(deleteApp(formData));
        dispatch(closeModal());
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg">
            {/* <div className="flex items-center mb-6">
              <img src={formData.logo} alt="Logo" className="w-16 h-16 mr-4" />
              <h2 className="text-2xl font-semibold">{formData.name}</h2>
            </div> */}
            <div className="max-w-sm mx-auto p-4">
                <label className="block text-gray-700 font-semibold mb-2">Select an App</label>
                <select
                    value={formData.name}
                    onChange={handleAppChange}
                    className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="" disabled>
                        -- Choose an App --
                    </option>
                    {appsList.map((app) => (
                        <option key={app.id} value={app.name}>
                            {app.name}
                        </option>
                    ))}
                </select>

                {formData.name && (
                    <div className="mt-6 flex items-center">
                        <img
                            src={formData.logo}
                            alt={formData.name}
                            className="w-10 h-10 mr-4"
                        />
                        <span className="text-xl font-semibold">{formData.name}</span>
                    </div>
                )}
            </div>

            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2 text-start">Card Number</label>
                    <input
                        type="text"
                        name="cardNo"
                        value={formData.cardNo}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter card number"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2 text-start">CVV Number</label>
                    <input
                        type="text"
                        name="cvvNo"
                        value={formData.cvvNo}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter CVV number"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2 text-start">Card Expiration Date</label>
                    <input
                        type="date"
                        name="expDate"
                        value={formData.expDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2  text-secondary-700">Subscription Expiration Date</label>
                    {/* <input
                        type="date"
                        name="expDate"
                        value={formData.expDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    /> */}
                    <h3 className="font-semibold text-secondary-700">{formData.subscriptionExpiry}</h3>
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2  text-start">Auto Subscribe</label>
                    <div className="flex items-center">
                        <label className="mr-4">
                            <input
                                type="radio"
                                name="status"
                                checked={formData.isActive === true}
                                onChange={() => handleRadioChange(true)}
                                className="mr-2"
                            />
                            Active
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="status"
                                checked={formData.isActive === false}
                                onChange={() => handleRadioChange(false)}
                                className="mr-2"
                            />
                            Inactive
                        </label>
                    </div>
                </div>

                <div className="flex justify-end">
                    {addnew ?
                        <button
                            type="button"
                            onClick={handleAddNew}
                            className="bg-success text-white px-4 py-2 rounded-lg hover:bg-yellow-600 mr-3 border border-transparent hover:border-success hover:text-success hover:bg-white"
                        >
                            Add New
                        </button> :
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="bg-success text-white px-4 py-2 rounded-lg hover:bg-blue-600 mr-3 border border-transparent hover:border-success hover:text-success hover:bg-white"
                        >
                            Update
                        </button>
                    }
                    <button
                        type="button"
                        onClick={handleDelete}
                        className="bg-danger text-white px-4 py-2 rounded-lg hover:bg-red-600 border border-transparent hover:border-danger hover:text-danger hover:bg-white"
                    >
                        Delete
                    </button>
                </div>
            </form>
        </div>
    );
};

export const customComponents = (value) => {
    let Component = <></>
    switch (value) {
        case "ForgetPassword":
            Component = <ForgetPassword />;
            break;

        case "AddNewApp":
            Component = <ViewUpdateApps addnew={true} />;
            break;

        case "UpdateApp":
            Component = <ViewUpdateApps addnew={false} />;
            break;

        default:
            break;
    }
    return Component;
}