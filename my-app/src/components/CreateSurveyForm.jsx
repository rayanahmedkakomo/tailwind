import React from 'react';

function CreateSurveyForm() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create Survey</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Survey Title</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Customer Satisfaction Survey"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Questions (one per line)</label>
          <textarea
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            rows="5"
            placeholder="Question 1\nQuestion 2\nQuestion 3"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Create Survey
        </button>
      </form>
    </div>
  );
}

export default CreateSurveyForm;