import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Shield, Zap, TrendingUp, Brain } from 'lucide-react';

const LandingPage: React.FC = () => {
    const features = [
        {
            icon: <Clock className="h-6 w-6" />,
            title: "Under 3 Minutes",
            description: "Quick, accurate assessment that respects your time"
        },
        {
            icon: <Brain className="h-6 w-6" />,
            title: "AI-Powered Insights",
            description: "Personalized career guidance based on your personality"
        },
        {
            icon: <Shield className="h-6 w-6" />,
            title: "Privacy First",
            description: "No personal data stored. Your privacy is protected."
        },
        {
            icon: <TrendingUp className="h-6 w-6" />,
            title: "Career Growth",
            description: "Actionable insights to accelerate your professional development"
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <motion.h1
                            className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Discover Your{' '}
                            <span className="gradient-text">Personality Type</span>
                            <br />
                            <span className="text-3xl lg:text-5xl">Fuel Your Career Growth</span>
                        </motion.h1>

                        <motion.p
                            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Take our scientifically-backed MBTI personality assessment and receive
                            personalized AI-powered insights to unlock your professional potential.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Link
                                to="/test"
                                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                                Start Your Assessment
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                            </Link>
                        </motion.div>

                        <motion.p
                            className="text-sm text-gray-500 mt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            ⚡ Takes less than 3 minutes • No registration required
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose Our Assessment?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Professional-grade personality insights designed for career advancement
                        </p>

                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                className="bg-white/80 backdrop-blur-md rounded-2xl p-8 text-center border border-gray-200/50 hover:shadow-lg transition-shadow duration-300"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-3 rounded-xl inline-block mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>

                        ))}

                    </div>
                    
                </div>
                
            </section>
            

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            Ready to Unlock Your Career Potential?
                        </h2>
                        
                        <p className="text-xl text-gray-600 mb-8">
                            Join thousands of professionals who've discovered their personality type and accelerated their career growth.
                        </p>
                        <Link
                            to="/test"
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            Begin Assessment Now
                            <Zap className="ml-2 h-5 w-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;