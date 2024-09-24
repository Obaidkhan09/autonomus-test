import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [
        {
            id: 1,
            name: 'Netflix',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png',
            isActive: true,
            cardNo: '1234567812345678',
            cvvNo: '123',
            expDate: '"2025-10-17"',
            subscriptionExpiry: '10-12-2024',
        },
        {
            id: 2,
            name: 'Amazon',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png',
            isActive: false,
            cardNo: '2345678923456789',
            cvvNo: '234',
            expDate: '"2024-09-27"',
            subscriptionExpiry: '11-05-2024',
        },
        {
            id: 3,
            name: 'Spotify',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png',
            isActive: true,
            cardNo: '3456789034567890',
            cvvNo: '345',
            expDate: "2024-09-27",
            subscriptionExpiry: '08-15-2024',
        },
        {
            id: 4,
            name: 'SoundCloud',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7J3rRkwpAZ1wqSCEgDihZxamjSij2yl91Nitm_j3RBvx5ZxKVWREml-Z5FxTee0Rz1k8&usqp=CAU',
            isActive: false,
            cardNo: '4567890145678901',
            cvvNo: '456',
            expDate: "2024-11-07",
            subscriptionExpiry: '01-25-2025',
        },
        {
            id: 5,
            name: 'YouTube',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1280px-YouTube_full-color_icon_%282017%29.svg.png',
            isActive: true,
            cardNo: '5678901256789012',
            cvvNo: '567',
            expDate: "2024-09-27",
            subscriptionExpiry: '03-30-2024',
        },
        {
            id: 6,
            name: 'Twitch',
            logo: 'https://freelogopng.com/images/all_img/1656152266logo-twitch.png',
            isActive: false,
            cardNo: '6789012367890123',
            cvvNo: '678',
            expDate: "2025-04-07",
            subscriptionExpiry: '07-17-2025',
        },
        {
            id: 7,
            name: 'Facebook',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png',
            isActive: true,
            cardNo: '7890123478901234',
            cvvNo: '789',
            expDate: "2024-09-27",
            subscriptionExpiry: '12-15-2023',
        },
        {
            id: 8,
            name: 'Instagram',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/104px-Instagram_logo_2016.svg.png',
            isActive: false,
            cardNo: '8901234589012345',
            cvvNo: '890',
            expDate: "2024-10-15",
            subscriptionExpiry: '09-25-2025',
        },
        {
            id: 9,
            name: 'Twitter / X',
            logo: 'https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727049600&semt=ais_hybrid',
            isActive: true,
            cardNo: '9012345690123456',
            cvvNo: '901',
            expDate: "2024-09-27",
            subscriptionExpiry: '11-20-2024',
        },
    ],
    selectedApp: {
        id: 0,
        name: '',
        logo: '',
        isActive: false,
        cardNo: '',
        cvvNo: '',
        expDate: '',
        subscriptionExpiry: '',
    },
}


const appListSLice = createSlice({
    name: "appListSlice",
    initialState,
    reducers: {
        addApp: (state, action) => {
            state.data.push(action.payload);
        },

        // Update an existing app
        updateApp: (state, action) => {
            const index = state.data.findIndex(app => app.id === action.payload.id);
            if (index !== -1) {
                state.data[index] = action.payload;
            }
            state.selectedApp = initialState.selectedApp;
        },

        // Delete an app by id
        deleteApp: (state, action) => {
            const index = state.data.findIndex(app => app.id === action.payload.id);
            if (index !== -1) {
                state.data.splice(index, 1);
            }
            state.selectedApp = initialState.selectedApp;
        },
        setSelectedApp: (state, action) => {
            state.selectedApp = action.payload;
        },
        clearSelectedApp: (state) => {
            state.selectedApp = initialState.selectedApp;
        }
    }
})

export const { addApp, updateApp, deleteApp, setSelectedApp, clearSelectedApp } = appListSLice.actions;
export default appListSLice.reducer;