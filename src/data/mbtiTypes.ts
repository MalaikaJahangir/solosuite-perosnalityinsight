export interface MBTIType {
  name: string;
  description: string;
  traits: string[];
}

export const mbtiTypes: Record<string, MBTIType> = {
  INTJ: {
    name: "The Architect",
    description: "Strategic, independent, and driven by their vision for the future. Natural leaders who combine innovation with practical execution.",
    traits: ["Strategic thinking", "Independent work style", "Long-term vision", "Systems thinking", "Innovation-focused", "Results-oriented"]
  },
  INTP: {
    name: "The Thinker", 
    description: "Logical, analytical, and curious about how things work. Excel at theoretical problem-solving and innovative thinking.",
    traits: ["Analytical mindset", "Logical reasoning", "Theoretical thinking", "Problem-solving", "Independent learning", "Creative solutions"]
  },
  ENTJ: {
    name: "The Commander",
    description: "Natural leaders who are strategic, decisive, and focused on achieving goals. Excel at organizing people and resources.",
    traits: ["Natural leadership", "Strategic planning", "Goal-oriented", "Decision-making", "Team organization", "Results-driven"]
  },
  ENTP: {
    name: "The Debater",
    description: "Innovative, enthusiastic, and skilled at seeing possibilities. Thrive on intellectual challenges and generating new ideas.",
    traits: ["Innovation", "Brainstorming", "Adaptability", "Debate skills", "Opportunity recognition", "Creative thinking"]
  },
  INFJ: {
    name: "The Advocate",
    description: "Idealistic, organized, and driven by their values. Excel at understanding people and creating meaningful change.",
    traits: ["Empathy", "Strategic insight", "Value-driven", "Long-term planning", "People development", "Meaningful work"]
  },
  INFP: {
    name: "The Mediator",
    description: "Idealistic, loyal, and driven by their values. Seek harmony and authenticity in their work and relationships.",
    traits: ["Value alignment", "Creative expression", "Authenticity", "Empathetic approach", "Flexible thinking", "Individual contribution"]
  },
  ENFJ: {
    name: "The Protagonist",
    description: "Charismatic, inspiring, and focused on helping others reach their potential. Natural mentors and team builders.",
    traits: ["People development", "Team building", "Inspiring others", "Communication skills", "Collaborative approach", "Organizational skills"]
  },
  ENFP: {
    name: "The Campaigner", 
    description: "Enthusiastic, creative, and skilled at connecting with people. Thrive in dynamic environments with variety and growth opportunities.",
    traits: ["Enthusiasm", "Relationship building", "Adaptability", "Creative thinking", "Opportunity exploration", "Team collaboration"]
  },
  ISTJ: {
    name: "The Logistician",
    description: "Practical, fact-minded, and reliable. Excel at maintaining systems and ensuring consistent, quality results.",
    traits: ["Reliability", "Attention to detail", "Systematic approach", "Quality focus", "Process improvement", "Steady performance"]
  },
  ISFJ: {
    name: "The Protector",
    description: "Warm, responsible, and dedicated to helping others. Excel at supporting teams and maintaining harmony.",
    traits: ["Supportive nature", "Team harmony", "Service orientation", "Reliable execution", "Detail-oriented", "Collaborative spirit"]
  },
  ESTJ: {
    name: "The Executive",
    description: "Organized, decisive, and focused on getting results. Natural managers who excel at implementing systems and processes.",
    traits: ["Management skills", "Process optimization", "Decision-making", "Team coordination", "Results delivery", "Systematic approach"]
  },
  ESFJ: {
    name: "The Consul",
    description: "Caring, social, and focused on harmony. Excel at building relationships and supporting team success.",
    traits: ["Relationship building", "Team support", "Harmony creation", "Service orientation", "Communication skills", "Collaborative leadership"]
  },
  ISTP: {
    name: "The Virtuoso",
    description: "Practical, adaptable, and skilled at troubleshooting. Excel at hands-on problem solving and technical expertise.",
    traits: ["Technical skills", "Problem-solving", "Adaptability", "Independent work", "Practical solutions", "Crisis management"]
  },
  ISFP: {
    name: "The Adventurer", 
    description: "Artistic, flexible, and value-driven. Excel in creative and people-focused roles that align with their values.",
    traits: ["Creative expression", "Value alignment", "Adaptability", "Individual contribution", "Aesthetic sense", "Supportive approach"]
  },
  ESTP: {
    name: "The Entrepreneur",
    description: "Energetic, practical, and skilled at adapting to change. Excel in dynamic environments that require quick thinking.",
    traits: ["Adaptability", "Quick decision-making", "Practical solutions", "Energy and enthusiasm", "Crisis management", "Results orientation"]
  },
  ESFP: {
    name: "The Entertainer",
    description: "Spontaneous, enthusiastic, and people-focused. Excel at inspiring others and creating positive team dynamics.",
    traits: ["People skills", "Enthusiasm", "Team dynamics", "Adaptability", "Positive attitude", "Relationship building"]
  }
};

export const getMBTIDescription = (type: string): MBTIType => {
  return mbtiTypes[type] || mbtiTypes.INTJ;
};