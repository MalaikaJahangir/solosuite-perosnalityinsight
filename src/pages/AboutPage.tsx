import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Zap, Users, Award, ArrowRight } from 'lucide-react';

const AboutPage: React.FC = () => {

     useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, []);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Our <span className="gradient-text">MBTI Assessment</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Discover how our scientifically-backed personality assessment can transform 
            your career trajectory with AI-powered insights.
          </p>
        </motion.div>

        {/* What is MBTI */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Brain className="h-8 w-8 mr-4 text-blue-600" />
              What is MBTI?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="leading-relaxed mb-4">
                The Myers-Briggs Type Indicator (MBTI) is one of the world's most widely used 
                personality assessments. Based on Carl Jung's psychological types, it measures 
                your preferences across four key dimensions:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Extraversion (E) vs Introversion (I)</h3>
                  <p className="text-gray-700">Where you direct your energy and attention</p>
                </div>
                <div className="bg-cyan-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Sensing (S) vs Intuition (N)</h3>
                  <p className="text-gray-700">How you take in information</p>
                </div>
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Thinking (T) vs Feeling (F)</h3>
                  <p className="text-gray-700">How you make decisions</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Judging (J) vs Perceiving (P)</h3>
                  <p className="text-gray-700">How you approach the outside world</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Why It Matters */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Personality Matters for Your Career
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 rounded-xl inline-block mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Better Team Dynamics</h3>
              <p className="text-gray-600">
                Understand your work style and how to collaborate effectively with different personality types.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-xl inline-block mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Career Optimization</h3>
              <p className="text-gray-600">
                Find roles and environments where your natural strengths can shine and drive success.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-xl inline-block mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personal Growth</h3>
              <p className="text-gray-600">
                Identify areas for development and create targeted strategies for professional advancement.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Our Approach */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Shield className="h-8 w-8 mr-4" />
              Our Privacy-First Approach
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3">No Data Storage</h3>
                <p className="text-blue-100 leading-relaxed">
                  We don't store your personal information or test results. Your privacy is completely protected.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">AI-Powered Insights</h3>
                <p className="text-blue-100 leading-relaxed">
                  Our advanced AI provides personalized career guidance based on your unique personality profile.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Scientifically Validated</h3>
                <p className="text-blue-100 leading-relaxed">
                  Our questions are based on established MBTI research and validated assessment methods.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Quick & Accurate</h3>
                <p className="text-blue-100 leading-relaxed">
                  Get comprehensive results in under 3 minutes with our streamlined assessment process.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Discover Your Personality Type?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Take our assessment and unlock personalized career insights tailored to your unique personality.
          </p>
          <Link
            to="/test"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Start Your Assessment
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;