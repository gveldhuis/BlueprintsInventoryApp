import React from 'react';

function TailwindReference(props){
  return (
    <div className="font-avenir">
      {/* Spacing */}
      <div className="flex bg-gray-200 justify-center border-solid">
        <div class="space_out text-gray-700 text-center bg-gray-400 border-solid border-2 border-gray-600">1</div>
        <div class="space_out text-gray-700 text-center bg-gray-400 border-solid border-2 border-gray-600">2</div>
        <div class="space_out text-gray-700 text-center bg-gray-400 border-solid border-2 border-gray-600">3</div>
      </div>

      {/* Headers */}
      <div>
        <h1 className="page_header">Page Header</h1>
        <div className="bg-dark_blue">
          <h1 className="page_header text-white">Page Header - Light</h1>
        </div>
        <h2 className="section_header">Section Label</h2>
        <div className="bg-dark_blue">
        <h2 className="section_header text-white">Section Label - Light</h2>
        </div>
      </div>

      {/* Paragraphs */}
      <div>
        <p className="paragraph text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Phasellus libero enim, pulvinar ac sem quis, finibus accumsan 
        nisl. Quisque aliquam fringilla quam id pretium. Sed quis mi 
        risus. Donec bibendum a orci et varius. Vivamus vel nisi nec 
        arcu semper fringilla. Duis elementum vitae metus a viverra. 
        Nunc vestibulum id arcu sed vestibulum.
        </p>
        <p className="paragraph text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Phasellus libero enim, pulvinar ac sem quis, finibus accumsan 
        nisl. Quisque aliquam fringilla quam id pretium. Sed quis mi 
        risus. Donec bibendum a orci et varius. Vivamus vel nisi nec 
        arcu semper fringilla. Duis elementum vitae metus a viverra. 
        Nunc vestibulum id arcu sed vestibulum.
        </p>
      </div>

      {/* Buttons */}
      <div>
        <button className="pill_button"> Submit </button>
      </div>

      {/* Bottom-Nav */}
      <div className="flex justify-center">
        <div className="bottom_nav">
          <p className="space_out">icon</p>
          <p className="space_out">icon</p>
          <p className="space_out">icon</p>
        </div>
      </div>

      {/* Images */}
      <div className="flex justify-center">
        <img 
          src={require('assets/images/Blueprints_Logo2.png')}
          className="w-3/4 object-contain space_out"
        />
      </div>

      {/* Form inputs */}
      <div className="flex justify-center">
        <form class="w-3/4">
          <div class="flex items-center my-sm">
            <div class="w-1/3">
              <label class="block text-right mx-md">
                Name
              </label>
            </div>
            <div class="w-2/3">
              <input class="bg-gray-200 border-2 border-gray-200 rounded w-full focus:outline-none focus:bg-white focus:border-light_blue" type="text" placeholder="Jane Doe" />
            </div>
          </div>

          <div class="flex items-center my-sm">
            <div class="w-1/3">
              <label class="block text-right mx-md">
                Email
              </label>
            </div>
            <div class="w-2/3">
              <input class="bg-gray-200 border-2 border-gray-200 rounded w-full focus:outline-none focus:bg-white focus:border-light_blue" type="text" placeholder="Jane Doe" />
            </div>
          </div>

          <div class="flex items-center my-sm">
            <div class="w-1/3">
              <label class="block text-right mx-md">
                Password
              </label>
            </div>
            <div class="w-2/3">
              <input class="bg-gray-200 border-2 border-gray-200 rounded w-full focus:outline-none focus:bg-white focus:border-light_blue" type="text" placeholder="Jane Doe" />
            </div>
          </div>
        </form>  
      </div>

    </div>
  );
}

export default TailwindReference;