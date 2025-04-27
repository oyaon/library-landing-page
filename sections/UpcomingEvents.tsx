import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import Button from '../components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';

export default function UpcomingEvents() {
  const events = [
    { date: 'May 15', title: 'Author Meet & Greet' },
    { date: 'May 22', title: 'Summer Reading Kickoff' },
    { date: 'June 5', title: 'Children's Storytime' },
  ];

  return (
    <section className="py-16 px-6">
      <SectionHeader title="Upcoming Events" />
      <div className="grid gap-6 mt-8">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="p-4 border rounded-xl shadow-sm flex flex-col sm:flex-row sm:justify-between items-start sm:items-center bg-card"
          >
            <div className="text-primary font-semibold text-lg">{event.date}</div>
            <div className="mt-2 sm:mt-0 text-foreground">{event.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
const events = [
  {
    id: 1,
    title: 'Author Meet & Greet: Sarah J. Maas',
    date: 'November 15, 2023',
    time: '6:00 PM - 8:00 PM',
    location: 'Main Library Hall',
    image: '/events/event1.jpg',
    attendees: 120,
  },
  {
    id: 2,
    title: 'Book Club: Discussing "The Song of Achilles"',
    date: 'November 22, 2023',
    time: '5:30 PM - 7:00 PM',
    location: 'Reading Room 2',
    image: '/events/event2.jpg',
    attendees: 35,
  },
  {
    id: 3,
    title: 'Children\'s Story Time: Adventures in Wonderland',
    date: 'November 25, 2023',
    time: '10:00 AM - 11:30 AM',
    location: 'Children\'s Library',
    image: '/events/event3.jpg',
    attendees: 45,
  },
  {
    id: 4,
    title: 'Workshop: Creative Writing Fundamentals',
    date: 'December 3, 2023',
    time: '2:00 PM - 4:30 PM',
    location: 'Workshop Space',
    image: '/events/event4.jpg',
    attendees: 25,
  }
];

export default function UpcomingEvents() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Upcoming Events</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Join us for exciting events, workshops, and author meetups at our library
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-2/5 h-48 relative overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-0 left-0 bg-primary text-white px-3 py-1 rounded-br-lg font-medium text-sm">
                    Event
                  </div>
                </div>
                <div className="p-6 sm:w-3/5">
                  <h3 className="font-bold text-lg mb-3 text-foreground">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted">
                      <Calendar size={16} className="mr-2 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-muted">
                      <Clock size={16} className="mr-2 text-primary" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-muted">
                      <MapPin size={16} className="mr-2 text-primary" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-muted">
                      <Users size={16} className="mr-2 text-primary" />
                      {event.attendees} attendees
                    </div>
                  </div>
                  <Button size="sm" className="w-full">Register</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">View All Events</Button>
        </div>
      </div>
    </section>
  );
}
