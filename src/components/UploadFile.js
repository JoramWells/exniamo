import React from "react";

export default function UploadFile() {
  return (
    <div style={{height:"100%"}}>
      <div className="flex">
        <div
          style={{ width: "20%", position:"fixed", height:"100%" }}
          className="bg-blue-800 shadow-lg flex flex-col"
        >
          <div className="bg-black bg-opacity-10">
            <p className="font-extrabold text-3xl text-white  text-center">Vacuum</p>
          </div>
          <div className="bg-white p-1 bg-opacity-10">
            <p className="text-xl font-semibold text-blue-300">Project name</p>
          </div>
          <div className="p-1">
            <p className="font-extrabold text-sm ">Get started</p>
          </div>
        </div>
        <div style={{ width: "80%" }} className=" ml-auto">
          <nav className="flex-row flex bg-white p-4 shadow-xl">A/c</nav>
          <div className=" flex flex-row p-2 justify-between space-x-10">
            <div className="m-auto w-8/12">
              <p className="text-xl font-medium">Get started!!</p>
              <div className="bg-green-900 bg-opacity-50 rounded-md">
                <p className="p-2 text-white">
                  Follow the following steps to complete the process
                </p>
              </div>
              <div>
                <div className="p-4 hover:shadow-md m-4">
                    <div>
                                         <p className="text-lg m-0 text-blue-500 hover:cursor-pointer hover:text-blue-600">
                    1. Create a new index
                  </p> 
                  
                    </div>

                  <p className="text-gray-500 text-sm">
                    An index stores the type of data you want to search
                  </p>
                </div>
              </div>
              <div className="p-4 hover:shadow-md m-4">
                <p className="text-lg m-0 text-blue-500 hover:cursor-pointer hover:text-blue-400">
                  2. Import your database
                </p>
                <p className="text-gray-500 text-sm">
                Records are the information that you want to make searchable: they’re managed directly from the indices section and can be imported manually or through an API.
                </p>
              </div>
              <div className="p-4 hover:shadow-md m-4">
                <p className="text-lg m-0 text-blue-500 hover:cursor-pointer hover:text-blue-600">
                  3. Configure searchable attributes
                </p>
                <p className="text-gray-500 text-sm">
                Select the attributes of your data that you want to make searchable.
                </p>
              </div>
              <div className="p-4 hover:shadow-md m-4">
                <p className="text-lg m-0 text-blue-500  hover:cursor-pointer hover:text-blue-600">
                  4. Configure customizable ranking
                </p>
                <p className="text-gray-500 text-sm">
                Use a custom ranking attribute to order your results by a metric that's important to your business goals.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 p-2 rounded-md font-semibold text-white">Configure attributes</button>
              </div>
            </div>
            <div className="w-4/12">Documentation</div>
          </div>
        </div>
      </div>
    </div>
  );
}
