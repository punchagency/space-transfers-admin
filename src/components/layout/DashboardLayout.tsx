import type { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';

export const DashboardLayout = ({ children }: { children: ReactNode }) => (
  <div className="flex h-screen bg-gray-50 overflow-hidden">
    <Sidebar />
    <main className="flex-1 flex flex-col h-full min-w-0">
      <Topbar />
      <div className="flex-1 overflow-y-auto">
        <section className="p-6 space-y-6 min-h-full">{children}</section>
      </div>
    </main>
  </div>
);
