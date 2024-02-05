'use client' // 👈 use it here

import React from 'react';
import dynamic from 'next/dynamic';
import ApartmentToggleProvider from "@/app/providers/ApartmentToggleProvider";

// Dynamically import the FloorPlan component with SSR disabled
const FloorPlan = dynamic(() => import('./pages/FloorPlan.client'), {
    ssr: false,
});

const Home: React.FC = () => {
    return (
        <div>
          <ApartmentToggleProvider>
            <FloorPlan />
          </ApartmentToggleProvider>
        </div>
    );
};

export default Home;
