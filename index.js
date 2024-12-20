import React, { useState } from 'react';
import { Search, Book, Scale, Users, Briefcase, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LegalAssistant = () => {
  const [query, setQuery] = useState('');
  const [activeSection, setActiveSection] = useState('search');

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gray-800 p-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold mb-4">AI-Powered Legal Assistant</h1>
          <p className="text-xl text-gray-300 mb-8">Your intelligent companion for legal guidance and education</p>
          
          {/* Main Search */}
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Describe your legal question or issue..."
              className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-4 top-4 text-blue-500">
              <Search size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 max-w-7xl mx-auto">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="text-blue-500" />
              Legal Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">Advanced AI analysis of legal issues with relevant sections and precedents</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Book className="text-green-500" />
              Educational Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">Comprehensive LLB/LLM courses and constitutional study materials</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="text-purple-500" />
              Lawyer Connect
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">AI-powered lawyer recommendations based on your specific case</p>
          </CardContent>
        </Card>
      </div>

      {/* Navigation */}
      <nav className="fixed bottom-0 w-full bg-gray-800 border-t border-gray-700">
        <div className="flex justify-around p-4 max-w-7xl mx-auto">
          <button
            onClick={() => setActiveSection('search')}
            className={`flex flex-col items-center ${activeSection === 'search' ? 'text-blue-500' : 'text-gray-400'}`}
          >
            <Search size={24} />
            <span className="text-sm">Search</span>
          </button>
          <button
            onClick={() => setActiveSection('learn')}
            className={`flex flex-col items-center ${activeSection === 'learn' ? 'text-blue-500' : 'text-gray-400'}`}
          >
            <GraduationCap size={24} />
            <span className="text-sm">Learn</span>
          </button>
          <button
            onClick={() => setActiveSection('lawyers')}
            className={`flex flex-col items-center ${activeSection === 'lawyers' ? 'text-blue-500' : 'text-gray-400'}`}
          >
            <Briefcase size={24} />
            <span className="text-sm">Lawyers</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default LegalAssistant;
