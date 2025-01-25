import React from 'react';
import { Bell, MessageSquare, User } from 'lucide-react';

const RightPanel: React.FC = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Notifications</h3>
      <div className="space-y-4">
        <div className="flex items-start space-x-3 bg-white p-3 rounded-lg shadow-sm">
          <Bell className="h-5 w-5 text-indigo-600" />
          <div>
            <p className="text-sm">New update available</p>
            <span className="text-xs text-gray-500">2 hours ago</span>
          </div>
        </div>
        <div className="flex items-start space-x-3 bg-white p-3 rounded-lg shadow-sm">
          <MessageSquare className="h-5 w-5 text-green-600" />
          <div>
            <p className="text-sm">New message from John</p>
            <span className="text-xs text-gray-500">5 hours ago</span>
          </div>
        </div>
        <div className="flex items-start space-x-3 bg-white p-3 rounded-lg shadow-sm">
          <User className="h-5 w-5 text-blue-600" />
          <div>
            <p className="text-sm">Profile updated</p>
            <span className="text-xs text-gray-500">1 day ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;