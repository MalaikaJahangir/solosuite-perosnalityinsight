import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { questions } from '../data/questions';
import { calculateMBTI } from '../utils/mbtiCalculator';
import { useEffect } from 'react';

const TestPage: React.FC = () => {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(0));
    const [isSubmitting, setIsSubmitting] = useState(false);

    const progress = ((currentQuestion + 1) / questions.length) * 100;
    const isLastQuestion = currentQuestion === questions.length - 1;
    const canProceed = answers[currentQuestion] !== 0;

    const handleAnswerSelect = (value: number) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = value;
        setAnswers(newAnswers);
    };

    const handleNext = () => {
        if (isLastQuestion) {
            handleSubmit();
        } else {
            setCurrentQuestion(prev => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(prev => prev - 1);
        }
    };
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, []);

    const handleSubmit = async () => {
        setIsSubmitting(true);
        const mbtiResult = calculateMBTI(answers);

        // Simulate processing time for better UX
        setTimeout(() => {
            navigate('/results', { state: { mbtiType: mbtiResult, answers } });
        }, 1500);
    };


    const options = [
        { value: 5, label: 'Very Accurate', color: 'from-green-500 to-emerald-500' },
        { value: 4, label: 'Accurate', color: 'from-blue-500 to-cyan-500' },
        { value: 3, label: 'Somewhat Accurate', color: 'from-yellow-500 to-orange-500' },
        { value: 2, label: 'Least Accurate', color: 'from-orange-500 to-red-500' },
        { value: 1, label: 'Never', color: 'from-red-500 to-pink-500' }
    ];

    if (isSubmitting) {
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
                        Analyzing Your Personality...
                    </h2>
                    <p className="text-gray-600">
                        We're processing your responses to reveal your MBTI type
                    </p>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Progress Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-2xl font-bold text-gray-900">
                            Personality Assessment
                        </h1>
                        <span className="text-sm font-medium text-gray-600">
                            {currentQuestion + 1} of {questions.length}
                        </span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                            className="bg-gradient-to-r from-blue-600 to-cyan-600 h-2 rounded-full progress-bar"
                            style={{ width: `${progress}%` }}
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                {/* Question Card */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentQuestion}
                        className="bg-white/80 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200/50 question-card"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-8 leading-relaxed">
                            {questions[currentQuestion].text}
                        </h2>

                        <div className="space-y-4">
                            {options.map((option) => (
                                <motion.button
                                    key={option.value}
                                    className={`w-full p-4 rounded-xl text-left option-button transition-all duration-200 ${answers[currentQuestion] === option.value
                                            ? `bg-gradient-to-r ${option.color} text-white shadow-lg`
                                            : 'bg-gray-50 hover:bg-gray-100 text-gray-900 border border-gray-200'
                                        }`}
                                    onClick={() => handleAnswerSelect(option.value)}
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="font-medium">{option.label}</span>
                                        <div className={`w-4 h-4 rounded-full border-2 ${answers[currentQuestion] === option.value
                                                ? 'border-white bg-white'
                                                : 'border-gray-300'
                                            }`}>
                                            {answers[currentQuestion] === option.value && (
                                                <motion.div
                                                    className="w-2 h-2 bg-current rounded-full mx-auto mt-0.5"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ duration: 0.2 }}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-8">
                    <button
                        onClick={handlePrevious}
                        disabled={currentQuestion === 0}
                        className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-200 ${currentQuestion === 0
                                ? 'text-gray-400 cursor-not-allowed'
                                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                            }`}
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                    </button>

                    <button
                        onClick={handleNext}
                        disabled={!canProceed}
                        className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-200 ${canProceed
                                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transform hover:scale-105'
                                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            }`}
                    >
                        {isLastQuestion ? 'Get Results' : 'Next'}
                        <ArrowRight className="h-4 w-4 ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TestPage;