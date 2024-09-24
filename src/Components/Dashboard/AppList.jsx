import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearSelectedApp, setSelectedApp } from '../../Store/appListSlice';
import { setModalData } from '../../Store/modalSlice';



const AppList = () => {
  const appDataStore = useSelector((state) => state.appData);
  const dispatch = useDispatch();

  const handleAppClicked = (prop) => {
    dispatch(setSelectedApp(prop));
    dispatch((setModalData({
      title: "Update App Data",
      // title: "You can perform Update and DelzZete actions",
      value: "UpdateApp",
      onCancel: () => dispatch(clearSelectedApp())
      
    })))
  }
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {appDataStore.data.map((app, index) => (
        <div key={index} onClick={()=> handleAppClicked(app)} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/6 p-4 bg-white hover:bg-primary-400 rounded-lg shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <img src={app.logo} alt={app.name} className="h-12 w-12" />
          </div>
          <h2 className="text-lg font-bold mb-2">{app.name}</h2>
          <div className="flex items-center justify-center">
            {app.isActive ? (
              <div className="bg-success rounded-full h-4 w-4" />
            ) : (
              <div className="bg-danger rounded-full h-4 w-4" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppList;