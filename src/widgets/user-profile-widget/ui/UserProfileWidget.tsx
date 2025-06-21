'use client';

import { useState, useEffect } from 'react';
import { Card, Button } from '../../../shared/ui';
import { User } from '../../../shared/types';

export const UserProfileWidget = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const [currentResponse, usersResponse] = await Promise.all([
          fetch('/api/users?current=true'),
          fetch('/api/users')
        ]);
        
        const current = await currentResponse.json();
        const allUsers = await usersResponse.json();
        
        setCurrentUser(current);
        setUsers(allUsers);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);
  
  const roleColors = {
    admin: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    manager: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    user: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
  };

  if (loading || !currentUser) {
    return (
      <Card title="User Profile">
        <div className="flex items-center justify-center h-48">
          <div className="text-gray-500">Loading profile...</div>
        </div>
      </Card>
    );
  }

  return (
    <Card title="User Profile">
      <div className="flex items-center space-x-4 mb-6">
        <div className="text-4xl">
          {currentUser.avatar || '👤'}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {currentUser.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {currentUser.email}
          </p>
          <span className={`inline-block text-xs px-2 py-1 rounded mt-1 ${roleColors[currentUser.role]}`}>
            {currentUser.role}
          </span>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
          Last Active
        </div>
        <div className="text-sm font-medium text-gray-900 dark:text-white">
          {new Date(currentUser.lastActive).toLocaleDateString()} at {new Date(currentUser.lastActive).toLocaleTimeString()}
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-3">
          Team Members ({users.length})
        </h4>
        <div className="space-y-2">
          {users.slice(0, 3).map((user) => (
            <div key={user.id} className="flex items-center space-x-2">
              <div className="text-lg">{user.avatar || '👤'}</div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {user.name}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {user.role}
                </div>
              </div>
              <div className={`w-2 h-2 rounded-full ${
                new Date().getTime() - new Date(user.lastActive).getTime() < 24 * 60 * 60 * 1000 
                  ? 'bg-green-400' 
                  : 'bg-gray-300'
              }`} />
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-2">
        <Button variant="primary" size="sm" className="w-full">
          Edit Profile
        </Button>
        <Button variant="outline" size="sm" className="w-full">
          Settings
        </Button>
      </div>
    </Card>
  );
};