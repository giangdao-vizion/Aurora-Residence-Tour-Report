
import { KpiData, ChartDataItem, TableRow, Tour } from './types';

export const OVERVIEW_KPIS: KpiData[] = [
  { label: 'Total Visits', value: '12,840', trend: 12.5, icon: 'fa-eye', color: 'bg-blue-500', tooltip: 'Total number of times the 3D tour has been accessed across all platforms.' },
  { label: 'Avg Time Spent', value: '4m 32s', trend: -2.4, icon: 'fa-clock', color: 'bg-[#ba8c44]', tooltip: 'The average duration a user spends exploring the virtual tour in a single session.' },
  { label: 'Completion Rate', value: '64%', trend: 5.1, icon: 'fa-flag-checkered', color: 'bg-green-500', tooltip: 'Percentage of users who visited all key areas of the tour (Overview, Showhouses, Amenities).' },
  { label: 'Lead Clicks', value: '412', trend: 15.8, icon: 'fa-mouse-pointer', color: 'bg-orange-500', tooltip: 'Total number of clicks on "Contact Us" or "Book a Viewing" buttons within the tour.' },
];

export const SMART_ASSISTANT_KPIS: KpiData[] = [
  { label: 'Total Chat Sessions', value: '2,450', trend: 18.2, icon: 'fa-comments', color: 'bg-[#ba8c44]', tooltip: 'Total number of unique conversation sessions started with the Smart Assistant.' },
  { label: 'Activation Rate', value: '19.1%', trend: 4.3, icon: 'fa-bolt', color: 'bg-purple-500', tooltip: 'Percentage of 3D tour visitors who actively opened and interacted with the chatbot.' },
  { label: 'Leads Generated', value: '156', trend: 22.1, icon: 'fa-user-plus', color: 'bg-green-500', tooltip: 'Number of users who provided contact information through the chat interface.' },
  { label: 'Avg Msg/Session', value: '5.4', trend: 8.7, icon: 'fa-message', color: 'bg-orange-500', tooltip: 'The average number of messages exchanged between the user and the assistant per session.' },
];

export const TRAFFIC_TREND: ChartDataItem[] = [
  { name: 'Mon', visits: 1200 },
  { name: 'Tue', visits: 1500 },
  { name: 'Wed', visits: 1100 },
  { name: 'Thu', visits: 1800 },
  { name: 'Fri', visits: 2200 },
  { name: 'Sat', visits: 2800 },
  { name: 'Sun', visits: 2400 },
];

export const CHAT_SESSIONS_TREND: ChartDataItem[] = [
  { name: 'Mar 01', sessions: 120 },
  { name: 'Mar 02', sessions: 145 },
  { name: 'Mar 03', sessions: 130 },
  { name: 'Mar 04', sessions: 170 },
  { name: 'Mar 05', sessions: 210 },
  { name: 'Mar 06', sessions: 250 },
  { name: 'Mar 07', sessions: 230 },
];

export const MESSAGES_PER_SESSION: ChartDataItem[] = [
  { name: '1-2', count: 450 },
  { name: '3-5', count: 820 },
  { name: '6-10', count: 680 },
  { name: '11-15', count: 320 },
  { name: '15+', count: 180 },
];

export const CHAT_DURATION_TREND: ChartDataItem[] = [
  { name: 'Mar 01', duration: 145 },
  { name: 'Mar 02', duration: 160 },
  { name: 'Mar 03', duration: 155 },
  { name: 'Mar 04', duration: 180 },
  { name: 'Mar 05', duration: 210 },
  { name: 'Mar 06', duration: 195 },
  { name: 'Mar 07', duration: 205 },
];

export const CONVERSATION_FUNNEL: ChartDataItem[] = [
  { name: 'Chat Opened', value: 2450 },
  { name: 'First Question', value: 1980 },
  { name: 'Continued', value: 1420 },
  { name: 'Contact Info', value: 310 },
  { name: 'Scheduled', value: 156 },
];

export const QUESTION_CATEGORIES: ChartDataItem[] = [
  { name: 'Price', value: 850 },
  { name: 'Floor Plan', value: 620 },
  { name: 'Location', value: 480 },
  { name: 'Amenities', value: 390 },
  { name: 'Payment Plan', value: 310 },
  { name: 'Availability', value: 280 },
];

export const INTENT_DISTRIBUTION: ChartDataItem[] = [
  { name: 'Inquiry', value: 45 },
  { name: 'Support', value: 25 },
  { name: 'Booking', value: 20 },
  { name: 'Feedback', value: 10 },
];

export const UNANSWERED_QUESTIONS = [
  { question: "What is the exact distance to the nearest metro?", frequency: 12, confidence: 0.42 },
  { question: "Do you allow pets in the duplex units?", frequency: 8, confidence: 0.35 },
  { question: "Is there a discount for full upfront payment?", frequency: 7, confidence: 0.48 },
  { question: "Can I customize the kitchen cabinets?", frequency: 5, confidence: 0.29 },
];

export const LEAD_CONVERSION_FUNNEL: ChartDataItem[] = [
  { name: 'Chat Started', value: 2450 },
  { name: 'Interested', value: 820 },
  { name: 'Contact Info', value: 310 },
  { name: 'Booked', value: 156 },
];

export const CTA_PERFORMANCE: ChartDataItem[] = [
  { name: 'Schedule Viewing', value: 156 },
  { name: 'Download Brochure', value: 412 },
  { name: 'Talk to Agent', value: 84 },
];

export const CHAT_TRIGGER_LOCATIONS: ChartDataItem[] = [
  { name: 'Aurora Overview', value: 950 },
  { name: 'Studio', value: 720 },
  { name: '1 Bedroom', value: 680 },
  { name: '2 Bedroom', value: 450 },
  { name: 'Duplex', value: 590 },
  { name: 'BBQ', value: 310 },
  { name: 'Children Playgrounds', value: 280 },
  { name: 'Gate', value: 150 },
  { name: 'Square', value: 120 },
];

export const QUESTIONS_BY_LOCATION = [
  { location: 'Aurora Overview', topQuestion: 'What is the total area of the project?', frequency: 245 },
  { location: 'Studio', topQuestion: 'Is the furniture included?', frequency: 182 },
  { location: '1 Bedroom', topQuestion: 'What is the monthly management fee?', frequency: 156 },
  { location: '2 Bedroom', topQuestion: 'Are there any units with river views?', frequency: 124 },
  { location: 'Duplex', topQuestion: 'Can I see the upper floor plan?', frequency: 98 },
  { location: 'BBQ', topQuestion: 'Do I need to book the BBQ area in advance?', frequency: 76 },
  { location: 'Children Playgrounds', topQuestion: 'Is the playground area rubberized?', frequency: 54 },
  { location: 'Gate', topQuestion: 'How many security guards are on duty?', frequency: 32 },
  { location: 'Square', topQuestion: 'What events are held in the square?', frequency: 28 },
];

export const PAGE_VIEWS: ChartDataItem[] = [
  { name: 'Aurora Overview', value: 4500 },
  { name: 'Location', value: 3200 },
  { name: 'Master Plan', value: 2800 },
  { name: 'Floor Plan', value: 3900 },
  { name: 'Apartment', value: 5100 },
  { name: 'Amenities', value: 3400 },
  { name: 'Library', value: 1200 },
];

export const ENGAGEMENT_FUNNEL: ChartDataItem[] = [
  { name: 'Enter Tour', value: 100 },
  { name: 'Amenities', value: 82 },
  { name: 'Floorplans', value: 65 },
  { name: 'Show Houses', value: 48 },
  { name: 'Contact', value: 15 },
];

export const MOST_VIEWED_SECTIONS: ChartDataItem[] = [
  { name: 'Pool', value: 4500 },
  { name: 'Studio', value: 3800 },
  { name: 'Duplex', value: 5200 },
  { name: 'BBQ Garden', value: 2900 },
];

export const AMENITY_POPULARITY: ChartDataItem[] = [
  { name: 'Pool', views: 8400, active: 4200 },
  { name: 'BBQ Garden', views: 6200, active: 1800 },
];

export const AMENITY_TIME_SPENT: ChartDataItem[] = [
  { name: 'Pool', time: 125 },
  { name: 'BBQ Garden', time: 78 },
];

export const FLOORPLAN_VIEWS: ChartDataItem[] = [
  { name: 'Studio', views: 3200 },
  { name: '1BR', views: 4100 },
  { name: 'Duplex', views: 2800 },
];

export const SHOWHOUSE_STATS: ChartDataItem[] = [
  { name: 'Studio', views: 4200, leads: 124, time: 180 },
  { name: '1BR', views: 5600, leads: 210, time: 210 },
  { name: '2BR', views: 3800, leads: 95, time: 145 },
  { name: 'Duplex', views: 6800, leads: 312, time: 320 },
];

export const CONVERSION_TABLE: TableRow[] = [
  { type: 'Studio', views: 4200, leads: 124, cvr: '2.95%' },
  { type: '1 Bedroom', views: 5600, leads: 210, cvr: '3.75%' },
  { type: '2 Bedroom', views: 3800, leads: 95, cvr: '2.50%' },
  { type: 'Duplex', views: 6800, leads: 312, cvr: '4.58%' },
];

// Added mock data for virtual tours used in DashboardHome and TourList
export const MOCK_TOURS: Tour[] = [
  {
    id: '1',
    title: 'Aurora Residence Studio',
    location: 'District 7, HCM City',
    description: 'Modern studio apartment with optimized space and premium finishes. Experience urban living at its finest.',
    coverImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800',
    panoramaImage: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=4000',
    views: 4200,
    hotspots: [
      { id: 'h1', x: 20, y: 50, label: 'Kitchenette', description: 'Fully equipped with modern appliances and stone countertops.' },
      { id: 'h2', x: 60, y: 40, label: 'Living Area', description: 'Spacious area with large windows providing natural light.' }
    ]
  },
  {
    id: '2',
    title: 'Luxury 1BR Suite',
    location: 'District 2, HCM City',
    description: 'Spacious one-bedroom suite featuring a private balcony and luxury amenities. Perfect for young professionals.',
    coverImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800',
    panoramaImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=4000',
    views: 5600,
    hotspots: [
      { id: 'h3', x: 45, y: 55, label: 'Balcony View', description: 'Enjoy the stunning city skyline from your private terrace.' }
    ]
  },
  {
    id: '3',
    title: 'Skyline Duplex Loft',
    location: 'District 1, HCM City',
    description: 'Double-height ceilings and panoramic city views. The pinnacle of luxury living in the heart of the city.',
    coverImage: 'https://images.unsplash.com/photo-1600607687940-c52fb042695c?auto=format&fit=crop&q=80&w=800',
    panoramaImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=4000',
    views: 6800,
    hotspots: [
      { id: 'h4', x: 30, y: 70, label: 'Mezzanine', description: 'Flexible loft space ideal for a home office or second bedroom.' }
    ]
  }
];
