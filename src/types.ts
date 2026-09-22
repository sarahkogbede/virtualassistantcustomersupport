export type ProjectCategory = 
  | 'all'
  | 'va'
  | 'customer_support'
  | 'crm'
  | 'admin'
  | 'data_research'
  | 'project_management'
  | 'social_media'
  | 'travel';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  tool: string;
  tools: string[];
  description: string;
  objective: string;
  approach: string;
  processSteps: string[];
  deliverable: string;
  skillsDemonstrated: string[];
  storageKey: string;
  uploadLabel: string;
  isSampleProject: boolean;
  sampleMockupType?: 'calendar' | 'email' | 'trello' | 'sheets' | 'forms' | 'research' | 'instagram' | 'canva' | 'linkedin' | 'social_strategy' | 'travel' | 'hubspot';
  extraUploads?: {
    id: string;
    label: string;
    storageKey: string;
  }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'primary' | 'supporting';
  iconName: string;
  tagline: string;
  items: string[];
}

export interface ToolCategory {
  categoryName: string;
  tools: {
    name: string;
    iconName?: string;
    description: string;
  }[];
}

export interface CaseStudy {
  id: string;
  title: string;
  scenario: string;
  customerMessage: string;
  sarahResponse: string;
  actionTaken: string[];
  followUp: string;
  skillsDemonstrated: string[];
}

export interface CommunicationSample {
  id: string;
  type: string;
  channel: 'Email' | 'Chat' | 'CRM Ticket' | 'Follow-up';
  context: string;
  response: string;
  keyElements: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  storageKey: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
