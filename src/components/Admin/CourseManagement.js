import React, { useState } from 'react';

function CourseManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeclineModalOpen, setIsDeclineModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      course: 'Mathematics',
      type: "Material",
      description: 'A course on advanced mathematics.',
      objectives: 'To improve problem-solving skills.',
      attachment: 'Algebra_Notes.pdf',
      topic: 'Algebra and Geometry',
      activities: [
        { activity: 'Created an item', date: '2025-01-05' },
        { activity: 'Edited an item', date: '2025-01-06' },
        { activity: 'Renamed an item', date: '2025-01-07' }
      ]
    },
    {
      id: 2,
      name: 'Jane Smith',
      course: 'Science',
      type: "Material",
      description: 'A course on scientific principles.',
      objectives: 'To understand basic physics and chemistry.',
      attachment: 'Science_Lab_Manual.pdf',
      topic: 'Physics and Chemistry',
      activities: [
        { activity: 'Created an item', date: '2025-01-01' },
        { activity: 'Edited an item', date: '2025-01-02' }
      ]
    },
    {
      id: 3,
      name: 'Mark Johnson',
      course: 'History',
      type: "Material",
      description: 'A course on world history.',
      objectives: 'To learn about major historical events and figures.',
      attachment: 'World_History.pdf',
      topic: 'World War II History',
      activities: [
        { activity: 'Created an item', date: '2025-01-03' },
        { activity: 'Added notes', date: '2025-01-04' }
      ]
    },
    {
      id: 4,
      name: 'Emily Davis',
      course: 'Literature',
      type: "Material",
      description: 'A course on classical literature.',
      objectives: 'To read and analyze classic literary works.',
      attachment: 'Literary_Analysis.pdf',
      topic: 'Shakespearean Plays',
      activities: [
        { activity: 'Created an item', date: '2025-01-08' },
        { activity: 'Edited an item', date: '2025-01-09' },
        { activity: 'Renamed an item', date: '2025-01-10' }
      ]
    },
    {
      id: 5,
      name: 'James Brown',
      course: 'Computer Science',
      type: "Material",
      description: 'A course on data structures and algorithms.',
      objectives: 'To learn how to solve problems using algorithms and data structures.',
      attachment: 'Data_Structures.pdf',
      topic: 'Data Structures and Algorithms',
      activities: [
        { activity: 'Created an item', date: '2025-01-02' },
        { activity: 'Edited an item', date: '2025-01-04' },
        { activity: 'Renamed an item', date: '2025-01-06' },
        { activity: 'Added new content', date: '2025-01-07' }
      ]
    }
  ]);
  
  
  

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const openHistoryModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const openApproveModal = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true); 
  };

  const openDeclineModal = (course) => {
    setSelectedCourse(course);
    setIsDeclineModalOpen(true);
  };

  const approveCourse = () => {
    setUsers(users.filter(user => user.id !== selectedCourse.id));
    setIsModalOpen(false); 
    setSuccessMessage('Course Approved!'); 
    setIsSuccessModalOpen(true);
  };

  const declineCourse = () => {
    setUsers(users.filter(user => user.id !== selectedCourse.id));
    setIsDeclineModalOpen(false); 
    setSuccessMessage('Course Declined!'); 
    setIsSuccessModalOpen(true); 
  };

  const cancelModal = () => {
    setIsModalOpen(false);
    setIsDeclineModalOpen(false);
    setIsSuccessModalOpen(false); 
    setSelectedCourse(null);
  };

  const totalPages = Math.ceil(users.length / itemsPerPage);
  const currentData = users.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="course-management">

      <div className="justify-center items-center bg-white rounded-xl">
        <div className="overflow-x-auto">
          <table className="min-w-full table-fixed text-center items-center p-4">
            <thead>
              <tr className="border-b-2 border-black pt-2 pb-2">
                <th className="py-3 px-4 font-semibold text-mid text-gray-700 w-1/4">EDUCATORS</th>
                <th className="py-3 px-4 font-semibold text-mid text-gray-700 w-1/4">COURSE</th>
                <th className="py-3 px-4 font-semibold text-mid text-gray-700 w-1/4">HISTORY</th>
                <th className="py-3 px-4 font-semibold text-mid text-gray-700 w-1/4">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((user) => (
                <tr key={user.id}>
                  <td className="py-3 px-4 text-gray-600 truncate w-1/4 max-w-xs">{user.name}</td>
                  <td className="py-3 px-4 text-gray-600 w-1/4">{user.course}</td>
                  <td className="py-3 px-4 text-gray-600 w-1/4">
                    <button onClick={() => openHistoryModal(user)} className="text-blue-500 hover:underline">
                      View History
                    </button>
                  </td>
                  <td className="py-3 px-4 text-gray-600 w-1/4">

                    {}
                    <button onClick={() => openApproveModal(user)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0e7529"><path d="M268-240 42-466l57-56 170 170 56 56-57 56Zm226 0L268-466l56-57 170 170 368-368 56 57-424 424Zm0-226-57-56 198-198 57 56-198 198Z"/></svg>
                    </button>

                    {}
                    <button className="ml-2" onClick={() => openDeclineModal(user)}>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff2929"><path d="m480-320 56-56-63-64h167v-80H473l63-64-56-56-160 160 160 160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm280-590q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z"/></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {isSuccessModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-lg w-full">
              <h3 className="text-lg font-semibold mb-4">{successMessage}</h3>
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={cancelModal}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {isModalOpen && selectedUser && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-lg w-full">
              <h3 className="text-lg font-semibold mb-4">History for {selectedUser.name}</h3>
              <ul className="text-left mb-4">
                {selectedUser.activities.map((activity, index) => (
                  <li key={index} className="text-gray-600">
                    {activity.activity} - {activity.date}
                  </li>
                ))}
              </ul>
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {isModalOpen && selectedCourse && !isDeclineModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 text-left">
              <h3 className="text-lg font-semibold mb-4">Course Approval for {selectedCourse.course}</h3>
              <div className="mb-4">
                <strong>Course:</strong> {selectedCourse.course}
              </div>
              <div className="mb-4">
                <strong>Topic:</strong> {selectedCourse.topic}
              </div>
              <div className="mb-4">
                <strong>Type:</strong> {selectedCourse.type}
              </div>
              <div className="mb-4">
                <strong>Description:</strong> {selectedCourse.description}
              </div>
              <div className="mb-4">
                <strong>Objectives:</strong> {selectedCourse.objectives}
              </div>
              <div className="mb-4">
                <strong>Attachment:</strong> {selectedCourse.attachment}
              </div>

              <div className="mb-4">
                <strong>History:</strong>
                <ul className="ml-4">
                  {selectedCourse.activities.map((activity, index) => (
                    <li key={index} className="text-gray-600">
                      {activity.activity} - {activity.date}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between">
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                  onClick={approveCourse}
                >
                  Approve
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  onClick={cancelModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {isDeclineModalOpen && selectedCourse && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 text-left">
              <h3 className="text-lg font-semibold mb-4">Course Decline for {selectedCourse.course}</h3>
              <div className="mb-4">
                <strong>Course:</strong> {selectedCourse.course}
              </div>
              <div className="mb-4">
                <strong>Topic:</strong> {selectedCourse.topic}
              </div>
              <div className="mb-4">
                <strong>Type:</strong> {selectedCourse.type}
              </div>
              <div className="mb-4">
                <strong>Description:</strong> {selectedCourse.description}
              </div>
              <div className="mb-4">
                <strong>Objectives:</strong> {selectedCourse.objectives}
              </div>
              <div className="mb-4">
                <strong>Attachment:</strong> {selectedCourse.attachment}
              </div>

              <div className="mb-4">
                <strong>History:</strong>
                <ul className="ml-4">
                  {selectedCourse.activities.map((activity, index) => (
                    <li key={index} className="text-gray-600">
                      {activity.activity} - {activity.date}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between">
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  onClick={declineCourse}
                >
                  Decline
                </button>
                <button
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                  onClick={cancelModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="border-t-2 border-black flex justify-center">
          <div className="flex space-x-2 justify-center items-center pt-4 pb-4">

            <button
              className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000">
                <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/>
              </svg>
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer ${currentPage === index + 1 ? 'bg-green-500' : 'bg-gray-300'}`}
                onClick={() => handlePageChange(index + 1)}
              ></button>
            ))}

            <button
              className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000">
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseManagement;
