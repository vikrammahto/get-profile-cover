import React from "react";

const XScreenshotGenerator = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col gap-5">
        <div>
          <label htmlFor="your-name" className="block">
            Your name
          </label>
          <input
            type="text"
            name="your-name"
            id="your-name"
            placeholder="Vikram Mahto"
            className="border w-full rounded px-3 py-1"
          />
        </div>
        <div>
          <label htmlFor="x-username" className="block">
            X username
          </label>
          <input
            type="text"
            name="your-name"
            id="x-username"
            placeholder="@here_vikram"
            className="border w-full rounded px-3 py-1"
          />
        </div>
        <div>
          <label htmlFor="content" className="block">
            Content
          </label>
          <textarea
            name="content"
            id="content"
            rows="4"
            placeholder="Write your thoughts here"
            className="border w-full px-3 py-1 rounded"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default XScreenshotGenerator;
