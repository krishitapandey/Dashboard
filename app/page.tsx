
'use client';

import { Users, FileText, Plus, LayoutDashboard ,  } from 'lucide-react';

import { CardTitle } from '@/components/ui/card';
import NavigationCard from '@/components/Dashboard/DashboardCard';

export default function HomePage() {
  return (
    <div className=" bg-background  w-full  max-w-7xl mx-auto ">
      <div className=" p-8 space-y-8">
    
        <div className="text-center space-y-4">
          <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto shadow-lg">
            <LayoutDashboard className="w-12 h-12 text-primary-foreground" />
          </div>
          <CardTitle className="text-4xl font-bold text-foreground">Dashboard</CardTitle>
          <p className="text-muted-foreground text-xl max-w-md mx-auto">
            Navigate to your pages
          </p>
        </div>

   
        <div className="grid grid-cols-1 w-full lg:grid-cols-2 gap-8">
          <NavigationCard
            href="/users"
            icon={Users}
            title="Users List"
            subtitle="View all users with instant search"
            buttonText="Go to Users"
          />

      
          <NavigationCard
            href="/journey"
            icon={FileText}
            title="Figma Design 1 "
            subtitle="View journey design "
            buttonText="View Design"
          />

          {/* Add Post Page */}
          <NavigationCard
            href="/stats"
            icon={FileText}
            title="Figma Design 2"
            subtitle="View stats design"
            buttonText="View Design"
            className="lg:col-span-2"
          />

        </div>
      </div>
    </div>
  );
}