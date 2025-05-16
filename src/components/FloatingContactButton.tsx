import React from 'react';

const FloatingContactButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="dropdown dropdown-top dropdown-end">
        <label tabIndex={0} className="btn btn-circle bg-indigo-600 hover:bg-indigo-700 text-white btn-lg shadow-lg hover:shadow-xl border-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
          </svg>
        </label>
        <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-64 p-2 shadow-xl bg-gray-800 border border-gray-700">
          <div className="card-body">
            <h3 className="card-title text-lg font-bold text-gray-200">Contact Us</h3>
            <p className="text-gray-400 mb-4">Interested in our services? Let's talk!</p>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-300">Email</span>
              </label>
              <input type="email" placeholder="Your email" className="input input-bordered bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400" />
            </div>
            <div className="form-control mt-3">
              <label className="label">
                <span className="label-text text-gray-300">Message</span>
              </label>
              <textarea className="textarea textarea-bordered bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400" placeholder="Your message"></textarea>
            </div>
            <div className="card-actions justify-end mt-4">
              <button className="btn bg-indigo-600 hover:bg-indigo-700 text-white border-none">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingContactButton; 