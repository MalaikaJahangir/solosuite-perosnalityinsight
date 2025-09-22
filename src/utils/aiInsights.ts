interface CareerInsights {
  professionalImpact: string;
  strengths: string[];
  areasToImprove: string[];
  careerPaths: string[];
}

const insightsDatabase: Record<string, CareerInsights> = {
  INTJ: {
    professionalImpact: "As an INTJ, you bring strategic vision and analytical thinking to your work. You excel at seeing the big picture while maintaining attention to quality and efficiency. Your independent work style and long-term perspective make you valuable in roles requiring strategic planning and innovative solutions.",
    strengths: [
      "Strategic planning and long-term vision",
      "Independent problem-solving abilities",
      "Systems thinking and process optimization", 
      "Quality-focused execution",
      "Innovation and creative solutions"
    ],
    areasToImprove: [
      "Collaborative communication and team engagement",
      "Patience with less structured or detailed colleagues",
      "Delegation and trusting others' methods",
      "Adapting to frequent changes in direction"
    ],
    careerPaths: ["Strategy Consultant", "Project Manager", "Research Scientist", "Systems Architect", "Entrepreneur", "Data Analyst"]
  },
  INTP: {
    professionalImpact: "Your INTP personality brings analytical depth and innovative thinking to complex problems. You excel at understanding underlying principles and creating elegant solutions. Your curiosity and logical approach make you valuable in roles requiring theoretical thinking and creative problem-solving.",
    strengths: [
      "Analytical and logical problem-solving",
      "Theoretical and conceptual thinking",
      "Independent research and learning",
      "Creative and innovative solutions",
      "Objective analysis and evaluation"
    ],
    areasToImprove: [
      "Completing projects and meeting deadlines",
      "Communicating ideas to non-technical audiences",
      "Working within established processes",
      "Taking decisive action without extensive analysis"
    ],
    careerPaths: ["Software Developer", "Research Scientist", "Data Scientist", "Systems Analyst", "Academic Researcher", "Technical Writer"]
  },
  ENTJ: {
    professionalImpact: "As an ENTJ, you naturally take charge and drive results through strategic leadership. You excel at organizing people and resources to achieve ambitious goals. Your decisive nature and long-term vision make you effective in leadership roles and complex project management.",
    strengths: [
      "Natural leadership and team organization",
      "Strategic thinking and planning",
      "Goal-oriented execution",
      "Decision-making under pressure",
      "Driving results and accountability"
    ],
    areasToImprove: [
      "Patience with slower decision-makers",
      "Considering emotional impact of decisions",
      "Micromanagement tendencies",
      "Listening to alternative perspectives"
    ],
    careerPaths: ["Executive Leadership", "Management Consultant", "Business Development", "Operations Manager", "Entrepreneur", "Investment Banking"]
  },
  ENTP: {
    professionalImpact: "Your ENTP personality brings innovative energy and adaptability to any team. You excel at generating ideas, seeing opportunities, and inspiring others with your enthusiasm. Your quick thinking and persuasive communication make you valuable in dynamic, fast-paced environments.",
    strengths: [
      "Innovation and creative problem-solving",
      "Adaptability and flexibility",
      "Persuasive communication",
      "Opportunity recognition",
      "Energizing team dynamics"
    ],
    areasToImprove: [
      "Following through on routine tasks",
      "Maintaining focus on single projects",
      "Working within rigid structures",
      "Attention to operational details"
    ],
    careerPaths: ["Sales Executive", "Marketing Manager", "Innovation Consultant", "Entrepreneur", "Business Analyst", "Creative Director"]
  },
  INFJ: {
    professionalImpact: "As an INFJ, you bring deep insight and value-driven perspective to your work. You excel at understanding people's motivations and creating meaningful solutions. Your combination of strategic thinking and empathy makes you effective in roles focused on positive impact and organizational development.",
    strengths: [
      "Deep insight into people and situations",
      "Value-driven decision making",
      "Strategic long-term planning",
      "Empathetic communication",
      "Meaningful work orientation"
    ],
    areasToImprove: [
      "Setting boundaries and avoiding burnout",
      "Making decisions in ambiguous situations", 
      "Dealing with conflict and criticism",
      "Working in highly competitive environments"
    ],
    careerPaths: ["Human Resources", "Organizational Development", "Counseling/Coaching", "Non-profit Leadership", "User Experience Design", "Training & Development"]
  },
  INFP: {
    professionalImpact: "Your INFP personality brings authenticity and creative thinking to your work. You excel when your role aligns with your values and allows for individual contribution. Your empathetic approach and flexible thinking make you valuable in roles requiring creativity and people-focused solutions.",
    strengths: [
      "Value alignment and authentic work",
      "Creative and innovative thinking",
      "Empathetic understanding of others",
      "Flexible and adaptable approach",
      "Individual contribution and expertise"
    ],
    areasToImprove: [
      "Working in highly structured environments",
      "Making tough decisions that may upset others",
      "Self-promotion and visibility",
      "Managing competing priorities and deadlines"
    ],
    careerPaths: ["Creative Writing", "Graphic Design", "Human Resources", "Social Work", "Marketing Creative", "User Experience Research"]
  },
  ENFJ: {
    professionalImpact: "As an ENFJ, you naturally inspire and develop others while building strong team relationships. You excel at understanding people's potential and creating environments for growth. Your combination of people skills and organizational ability makes you effective in leadership and development roles.",
    strengths: [
      "People development and mentoring",
      "Team building and collaboration",
      "Inspiring and motivating others",
      "Strong communication skills",
      "Organizational and planning abilities"
    ],
    areasToImprove: [
      "Setting boundaries and saying no",
      "Making unpopular but necessary decisions",
      "Focusing on task completion over relationships",
      "Managing personal stress and expectations"
    ],
    careerPaths: ["Team Leadership", "Training & Development", "Human Resources", "Sales Management", "Education", "Corporate Communications"]
  },
  ENFP: {
    professionalImpact: "Your ENFP personality brings enthusiasm and creative energy to any team. You excel at connecting with people and exploring new possibilities. Your adaptability and relationship-building skills make you valuable in roles requiring innovation, collaboration, and people engagement.",
    strengths: [
      "Enthusiasm and positive energy",
      "Strong relationship building",
      "Adaptability and flexibility",
      "Creative thinking and brainstorming",
      "Team collaboration and engagement"
    ],
    areasToImprove: [
      "Following detailed processes and procedures",
      "Maintaining focus on routine tasks",
      "Working independently for extended periods",
      "Managing time and project deadlines"
    ],
    careerPaths: ["Marketing", "Sales", "Public Relations", "Human Resources", "Event Planning", "Business Development"]
  },
  ISTJ: {
    professionalImpact: "As an ISTJ, you bring reliability and systematic thinking to your work. You excel at maintaining quality standards and ensuring consistent execution. Your attention to detail and process-oriented approach make you valuable in roles requiring accuracy and dependability.",
    strengths: [
      "Reliability and consistent performance",
      "Attention to detail and accuracy",
      "Systematic and organized approach",
      "Quality focus and standards",
      "Process improvement and efficiency"
    ],
    areasToImprove: [
      "Adapting to frequent changes",
      "Working with ambiguous or incomplete information",
      "Embracing new and untested methods",
      "Flexible thinking and creative solutions"
    ],
    careerPaths: ["Project Management", "Operations", "Accounting", "Quality Assurance", "Administration", "Compliance"]
  },
  ISFJ: {
    professionalImpact: "Your ISFJ personality brings supportive energy and reliable execution to any team. You excel at maintaining harmony while ensuring quality results. Your combination of people focus and attention to detail makes you valuable in roles requiring both technical competence and interpersonal skills.",
    strengths: [
      "Supportive and helpful team approach",
      "Reliable execution and follow-through",
      "Attention to detail and quality",
      "Maintaining team harmony",
      "Service-oriented mindset"
    ],
    areasToImprove: [
      "Self-advocacy and promoting achievements",
      "Making decisions that may create conflict",
      "Working in highly competitive environments",
      "Adapting to frequent organizational changes"
    ],
    careerPaths: ["Human Resources", "Customer Service", "Healthcare Administration", "Education", "Project Coordination", "Operations Support"]
  },
  ESTJ: {
    professionalImpact: "As an ESTJ, you bring strong organizational skills and results-driven leadership to your work. You excel at implementing systems and managing teams to achieve goals. Your practical approach and decisive nature make you effective in management and operational roles.",
    strengths: [
      "Strong management and organizational skills",
      "Results-driven execution",
      "Systematic approach to problems",
      "Team coordination and delegation",
      "Process optimization and efficiency"
    ],
    areasToImprove: [
      "Flexibility with changing priorities",
      "Considering creative or unconventional solutions",
      "Patience with slower decision-makers",
      "Balancing task focus with relationship building"
    ],
    careerPaths: ["General Management", "Operations Manager", "Sales Management", "Project Management", "Finance Management", "Business Operations"]
  },
  ESFJ: {
    professionalImpact: "Your ESFJ personality brings harmony and collaboration to any team environment. You excel at building relationships and supporting team success. Your combination of people skills and organizational ability makes you valuable in roles requiring both team coordination and customer focus.",
    strengths: [
      "Strong relationship building and networking",
      "Team support and collaboration",
      "Service-oriented approach",
      "Communication and interpersonal skills",
      "Maintaining team harmony and morale"
    ],
    areasToImprove: [
      "Making decisions that may disappoint others",
      "Working independently for extended periods",
      "Handling conflict and difficult conversations",
      "Focusing on long-term strategy over immediate needs"
    ],
    careerPaths: ["Customer Success", "Human Resources", "Sales", "Event Management", "Public Relations", "Team Leadership"]
  },
  ISTP: {
    professionalImpact: "As an ISTP, you bring practical problem-solving and technical expertise to your work. You excel at troubleshooting and finding efficient solutions. Your adaptable nature and hands-on approach make you valuable in roles requiring technical skills and crisis management.",
    strengths: [
      "Technical problem-solving abilities",
      "Practical and hands-on approach",
      "Adaptability and crisis management",
      "Independent work style",
      "Efficient and logical solutions"
    ],
    areasToImprove: [
      "Long-term planning and strategic thinking",
      "Working within rigid processes and procedures",
      "Communicating technical concepts to others",
      "Engaging in team meetings and group discussions"
    ],
    careerPaths: ["Technical Specialist", "Engineering", "IT Support", "Operations", "Quality Control", "Field Service"]
  },
  ISFP: {
    professionalImpact: "Your ISFP personality brings creativity and value-driven perspective to your work. You excel when your role aligns with your personal values and allows for individual contribution. Your aesthetic sense and supportive approach make you valuable in creative and people-focused roles.",
    strengths: [
      "Creative expression and aesthetic sense",
      "Value alignment and authentic work",
      "Supportive and empathetic approach",
      "Adaptability and flexibility",
      "Individual contribution and craftsmanship"
    ],
    areasToImprove: [
      "Self-promotion and visibility",
      "Working under tight deadlines and pressure",
      "Making decisions that may create conflict",
      "Engaging in competitive environments"
    ],
    careerPaths: ["Graphic Design", "Content Creation", "User Experience", "Social Work", "Art Direction", "Customer Experience"]
  },
  ESTP: {
    professionalImpact: "As an ESTP, you bring energy and adaptability to fast-paced work environments. You excel at quick decision-making and practical solutions. Your people skills and results orientation make you valuable in roles requiring rapid response and customer interaction.",
    strengths: [
      "Adaptability and quick thinking",
      "Practical problem-solving",
      "Strong people skills and networking",
      "Results-oriented approach",
      "Energy and enthusiasm for challenges"
    ],
    areasToImprove: [
      "Long-term planning and strategy",
      "Working with theoretical or abstract concepts",
      "Patience with detailed analysis",
      "Following established processes and procedures"
    ],
    careerPaths: ["Sales", "Customer Success", "Operations", "Event Management", "Business Development", "Field Management"]
  },
  ESFP: {
    professionalImpact: "Your ESFP personality brings enthusiasm and positive energy to any team. You excel at inspiring others and creating engaging experiences. Your people skills and adaptability make you valuable in roles requiring customer interaction and team dynamics.",
    strengths: [
      "Strong people skills and relationship building",
      "Enthusiasm and positive team dynamics",
      "Adaptability and flexibility",
      "Customer focus and service orientation",
      "Creating engaging and memorable experiences"
    ],
    areasToImprove: [
      "Long-term planning and strategic thinking",
      "Working independently for extended periods",
      "Following detailed processes and procedures",
      "Making difficult decisions that may upset others"
    ],
    careerPaths: ["Sales", "Marketing", "Customer Experience", "Event Planning", "Public Relations", "Training & Development"]
  }
};

export const getMBTIInsights = (mbtiType: string): CareerInsights => {
  return insightsDatabase[mbtiType] || insightsDatabase.INTJ;
};