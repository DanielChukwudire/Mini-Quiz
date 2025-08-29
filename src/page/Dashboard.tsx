import React, { useState, useEffect } from "react";

interface User {
  email: string;
  name: string;
  info: string;
}

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const usersData = localStorage.getItem("users");
    if (usersData) setUsers(JSON.parse(usersData));
  }, []);

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-extrabold mb-6 text-blue-700 text-center">
          Dashboard
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full border mt-2 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-blue-200 text-blue-900">
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Info</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan={3} className="text-center py-4 text-gray-400">
                    No users found.
                  </td>
                </tr>
              ) : (
                users.map((user, idx) => (
                  <tr
                    key={idx}
                    className="even:bg-blue-50 hover:bg-blue-100 transition"
                  >
                    <td className="border px-4 py-2">{user.name}</td>
                    <td className="border px-4 py-2">{user.email}</td>
                    <td className="border px-4 py-2">{user.info}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
