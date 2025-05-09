import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ChatbotProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface Message {
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

const Chatbot = ({ isOpen, setIsOpen }: ChatbotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: 'Welcome to SkillRevelation! How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    // Add user message
    const userMessage: Message = {
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue('');

    // Simulate response (in a real app, this would call the Gemini AI API)
    setTimeout(() => {
      let botResponse: Message;
      
      // Simple pattern matching for demo purposes
      const lowerCaseInput = inputValue.toLowerCase();
      
      if (lowerCaseInput.includes('school') || lowerCaseInput.includes('education')) {
        botResponse = {
          text: 'Our School Management System helps with student management, attendance tracking, grade management, and more. Would you like to learn more about our school management features?',
          sender: 'bot',
          timestamp: new Date(),
        };
      } else if (lowerCaseInput.includes('college') || lowerCaseInput.includes('university')) {
        botResponse = {
          text: 'Our College Management System is designed for higher education institutions with features for course management, faculty information, examination management and more. How can I help you with college management?',
          sender: 'bot',
          timestamp: new Date(),
        };
      } else if (lowerCaseInput.includes('employee') || lowerCaseInput.includes('hr')) {
        botResponse = {
          text: 'Our Employee Management System helps with onboarding, attendance tracking, performance evaluation, and more. Would you like to schedule a demo of our employee management features?',
          sender: 'bot',
          timestamp: new Date(),
        };
      } else if (lowerCaseInput.includes('skill') || lowerCaseInput.includes('training')) {
        botResponse = {
          text: 'Our Skill Development Training System allows you to deliver interactive training programs and track learner progress. Would you like more information about our skill development features?',
          sender: 'bot',
          timestamp: new Date(),
        };
      } else if (lowerCaseInput.includes('price') || lowerCaseInput.includes('cost') || lowerCaseInput.includes('pricing')) {
        botResponse = {
          text: 'Our pricing is based on your specific needs and the size of your organization. Please reach out to our sales team at sales@skillrevelation.com for a customized quote.',
          sender: 'bot',
          timestamp: new Date(),
        };
      } else if (lowerCaseInput.includes('demo') || lowerCaseInput.includes('trial')) {
        botResponse = {
          text: 'We\'d be happy to schedule a demo for you! Please fill out the contact form on our website or send an email to demo@skillrevelation.com with your preferred date and time.',
          sender: 'bot',
          timestamp: new Date(),
        };
      } else {
        botResponse = {
          text: 'Thank you for your message! Our team is here to help with all your ERP needs. Would you like to know more about any of our specific solutions?',
          sender: 'bot',
          timestamp: new Date(),
        };
      }
      
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat button */}
      {!isOpen && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-6 right-6 p-4 rounded-full bg-primary-700 text-white shadow-lg hover:bg-primary-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 z-50"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle size={24} />
        </motion.button>
      )}

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 w-80 md:w-96 h-[30rem] bg-white rounded-xl shadow-xl overflow-hidden flex flex-col z-50 border border-gray-200"
          >
            {/* Chat header */}
            <div className="p-4 bg-primary-700 text-white flex justify-between items-center">
              <div className="flex items-center">
                <div className="p-1 rounded-full bg-white/20 mr-2">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">SkillRevelation Support</h3>
                  <p className="text-xs text-primary-100">Online</p>
                </div>
              </div>
              <button 
                className="p-1 rounded-full hover:bg-primary-800 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat messages */}
            <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === 'user'
                        ? 'bg-primary-700 text-white rounded-br-none'
                        : 'bg-white text-gray-800 shadow-soft rounded-bl-none'
                    }`}
                  >
                    <p>{message.text}</p>
                    <p
                      className={`text-xs mt-1 text-right ${
                        message.sender === 'user' ? 'text-primary-100' : 'text-gray-500'
                      }`}
                    >
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat input */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={inputValue.trim() === ''}
                  className={`p-2 rounded-r-lg ${
                    inputValue.trim() === ''
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-primary-700 text-white hover:bg-primary-800'
                  } transition-colors`}
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;