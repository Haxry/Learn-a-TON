import React from 'react';
import { BookOpen, Code, ArrowRight, GraduationCap } from 'lucide-react';

const LearnATON = () => {
  const Blob = ({ className }) => (
    <div 
      className={`absolute rounded-full bg-blue-200/30 blur-3xl ${className}`}
    />
  );

  const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
      <Icon className="w-10 h-10 text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
      <Blob className="w-[500px] h-[500px] -top-20 -right-20" />
      <Blob className="w-[600px] h-[600px] top-1/2 -left-32" />
      
      <nav className="relative z-10 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <img src="../assets/logo.jpeg" className="w-8 h-8 bg-blue-600 rounded-lg transform" />
          <span className="text-xl font-medium">Learn-a-TON</span>
        </div>
        
        <div className="flex items-center space-x-6">
          <a href="https://docs.ton.org/v3/documentation/ton-documentation" target="_blank" className="text-gray-700 hover:text-blue-600">Courses</a>
          <a href="https://docs.ton.org/v3/documentation/ton-documentation" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Start Learning
            </button>
          </a>
        </div>
      </nav>

      <main className="relative z-10 px-6 pt-24 pb-20 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <img src="../assets/logo.jpeg" className="w-32 h-32 bg-blue-600 rounded-xl mx-auto mb-8 transform" />
          
          <h1 className="text-6xl font-serif max-w-4xl mx-auto leading-tight mb-8">
          Learn TON Blockchain with Gamified Challenges and AI-Powered Assistance
          </h1>
          
          <p className="text-gray-600 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Embark on an interactive journey into TON development. Solve gamified challenges, earn rewards, and get real-time guidance from AI agents as you master blockchain technology.
          </p>
          
          <div className="flex justify-center space-x-4">
            <a href="https://docs.ton.org/v3/documentation/ton-documentation" target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                Begin Learning
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </a>
            <a href="https://docs.ton.org/v3/documentation/ton-documentation" target="_blank" rel="noopener noreferrer">
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center">
                View Courses
                <BookOpen className="ml-2 h-4 w-4" />
              </button>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <FeatureCard 
            icon={BookOpen}
            title="Interactive Tutorials"
            description="Learn by doing! Complete gamified tutorials with interactive tasks, earn achievements, and level up your skills in TON development."
          />
          <FeatureCard 
            icon={Code}
            title="AI Bot Assistance"
            description="Get personalized guidance from AI-powered agents. Whether you're debugging code, solving challenges, or learning new concepts, our bots are here to assist you every step of the way."
          />
          <FeatureCard 
            icon={GraduationCap}
            title="Certification Path"
            description="Earn Tokens and NFTs by conquering gamified quests and challenges. Let AI agents track your progress and guide your path to becoming a TON expert."
          />
        </div>
      </main>
    </div>
  );
};

export default LearnATON;