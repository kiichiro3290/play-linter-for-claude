'use client';

import { useState, useEffect } from 'react';
import { Card, Button } from '../../../shared/ui';
import { Task } from '../../../shared/types';

export const TaskWidget = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('/api/tasks');
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const stats = tasks.reduce((acc, task) => {
    acc[task.status] = (acc[task.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const priorityColors = {
    high: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    low: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
  };
  
  const statusColors = {
    pending: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    in_progress: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    completed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    cancelled: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  };

  if (loading) {
    return (
      <Card title="Task Management">
        <div className="flex items-center justify-center h-48">
          <div className="text-gray-500">Loading tasks...</div>
        </div>
      </Card>
    );
  }

  return (
    <Card title="Task Management">
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {stats.in_progress || 0}
          </div>
          <div className="text-sm text-blue-600 dark:text-blue-400">Active</div>
        </div>
        <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {stats.completed || 0}
          </div>
          <div className="text-sm text-green-600 dark:text-green-400">Completed</div>
        </div>
      </div>
      
      <div className="space-y-3 mb-4">
        <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300">
          Recent Tasks
        </h4>
        {tasks.slice(0, 4).map((task) => (
          <div key={task.id} className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <h5 className="font-medium text-gray-900 dark:text-white truncate flex-1 mr-2">
                {task.title}
              </h5>
              <span className={`text-xs px-2 py-1 rounded ${priorityColors[task.priority]}`}>
                {task.priority}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className={`text-xs px-2 py-1 rounded ${statusColors[task.status]}`}>
                {task.status.replace('_', ' ')}
              </span>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {task.assignee}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Button variant="outline" className="w-full">
        View All Tasks
      </Button>
    </Card>
  );
};