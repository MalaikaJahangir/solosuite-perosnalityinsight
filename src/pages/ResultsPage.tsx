import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RefreshCw, Download, ArrowRight, TrendingUp, Users, Lightbulb } from 'lucide-react';
import { getMBTIInsights } from '../utils/aiInsights';
import { getMBTIDescription } from '../data/mbtiTypes';

const ResultsPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [insights, setInsights] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const { mbtiType } = location.state || {};

    useEffect(() => {
        if (!mbtiType) {
            navigate('/');
            return;
        }

        // Simulate AI processing
        setTimeout(() => {
            const aiInsights = getMBTIInsights(mbtiType);
            setInsights(aiInsights);
            setLoading(false);
        }, 1000);
    }, [mbtiType, navigate]);

    if (!mbtiType) {
        return null;
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full p-4 mx-auto mb-6 w-20 h-20 flex items-center justify-center">
                        <motion.div
                            className="w-8 h-8 border-4 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Generating Your Career Insights...
                    </h2>
                    <p className="text-gray-600">
                        Our AI is crafting personalized recommendations for you
                    </p>
                </motion.div>
            </div>
        );
    }

    const mbtiDescription = getMBTIDescription(mbtiType);

    // Handler to generate PDF
    const handleSavePDF = () => {
        const doc = new jsPDF();
        let y = 10;
        doc.setFontSize(22);
        doc.text('Personality Test Results', 10, y);
        y += 12;
        doc.setFontSize(16);
        doc.text(`Type: ${mbtiType} - ${mbtiDescription.name}`, 10, y);
        y += 10;
        doc.setFontSize(12);
        doc.text('Description:', 10, y);
        y += 8;
        doc.text(doc.splitTextToSize(mbtiDescription.description, 180), 10, y);
        y += 18;
        doc.setFontSize(14);
        doc.text('Key Traits:', 10, y);
        y += 8;
        doc.setFontSize(12);
        mbtiDescription.traits.forEach((trait: string) => {
            doc.text(`- ${trait}`, 12, y);
            y += 7;
        });
        y += 5;
        doc.setFontSize(14);
        doc.text('Professional Impact:', 10, y);
        y += 8;
        doc.setFontSize(12);
        doc.text(doc.splitTextToSize(insights.professionalImpact, 180), 10, y);
        y += 18;
        doc.setFontSize(14);
        doc.text('Career Strengths:', 10, y);
        y += 8;
        doc.setFontSize(12);
        insights.strengths.forEach((strength: string) => {
            doc.text(`- ${strength}`, 12, y);
            y += 7;
        });
        y += 5;
        doc.setFontSize(14);
        doc.text('Growth Opportunities:', 10, y);
        y += 8;
        doc.setFontSize(12);
        insights.areasToImprove.forEach((area: string) => {
            doc.text(`- ${area}`, 12, y);
            y += 7;
        });
        y += 5;
        doc.setFontSize(14);
        doc.text('Recommended Career Paths:', 10, y);
        y += 8;
        doc.setFontSize(12);
        insights.careerPaths.forEach((career: string) => {
            doc.text(`- ${career}`, 12, y);
            y += 7;
        });
        doc.save('personality_test_results.pdf');
    };

    return (
        <div className="min-h-screen py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Results Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl p-8 mb-8">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                            Your Personality Type
                        </h1>
                        <div className="text-6xl lg:text-7xl font-bold mb-2 tracking-wider">
                            {mbtiType}
                        </div>
                        <h2 className="text-xl lg:text-2xl font-medium opacity-90">
                            {mbtiDescription.name}
                        </h2>
                    </div>

                    <p className="text-xl text-gray-700 leading-relaxed">
                        {mbtiDescription.description}
                    </p>
                </motion.div>

                {/* Key Traits */}
                <motion.div
                    className="bg-white/80 backdrop-blur-md rounded-2xl p-8 mb-8 border border-gray-200/50"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <Users className="h-6 w-6 mr-3 text-blue-600" />
                        Your Key Traits
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {mbtiDescription.traits.map((trait, index) => (
                            <div key={index} className="flex items-center p-4 bg-blue-50 rounded-xl">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
                                <span className="text-gray-800 font-medium">{trait}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* AI Insights */}
                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    {/* Professional Impact */}
                    <motion.div
                        className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="flex items-center mb-6">
                            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-xl mr-4">
                                <TrendingUp className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">
                                Professional Impact
                            </h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            {insights.professionalImpact}
                        </p>
                    </motion.div>

                    {/* Career Strengths */}
                    <motion.div
                        className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="flex items-center mb-6">
                            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-xl mr-4">
                                <Users className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">
                                Career Strengths
                            </h3>
                        </div>
                        <ul className="space-y-3">
                            {insights.strengths.map((strength: string, index: number) => (
                                <li key={index} className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">{strength}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Growth Areas */}
                    <motion.div
                        className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <div className="flex items-center mb-6">
                            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-xl mr-4">
                                <Lightbulb className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">
                                Growth Opportunities
                            </h3>
                        </div>
                        <ul className="space-y-3">
                            {insights.areasToImprove.map((area: string, index: number) => (
                                <li key={index} className="flex items-start">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">{area}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Career Recommendations */}
                <motion.div
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl p-8 mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <h3 className="text-2xl font-bold mb-4">Recommended Career Paths</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {insights.careerPaths.map((career: string, index: number) => (
                            <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                                <span className="font-medium">{career}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    <Link
                        to="/"
                        className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                        Take Test Again
                        <RefreshCw className="h-4 w-4 ml-2" />
                    </Link>

                    <button
                        onClick={handleSavePDF}
                        className="flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl hover:bg-gray-50 border border-gray-300 transform hover:scale-105 transition-all duration-200"
                    >
                        Save Results
                        <Download className="h-4 w-4 ml-2" />
                    </button>

                    <Link
                        to="/about"
                        className="flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transform hover:scale-105 transition-all duration-200"
                    >
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default ResultsPage;