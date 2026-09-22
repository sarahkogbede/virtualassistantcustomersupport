import { 
  Project, 
  ServiceItem, 
  ToolCategory, 
  CaseStudy, 
  CommunicationSample, 
  TestimonialItem, 
  FAQItem 
} from '../types';

export const PERSONAL_INFO = {
  name: 'Sarah Kogbede',
  title: 'Virtual Assistant | Administrative Support | Customer Support Specialist',
  email: 'sarahkogbede@gmail.com',
  phone: '+2348086940402',
  whatsappUrl: 'https://wa.me/2348086940402',
  linkedinUrl: 'https://linkedin.com/in/sarah-kogbede-b34111368',
  calendlyUrl: 'https://calendly.com/sarahkogbede/30min',
  availability: 'Full-time • Part-time • Contract',
  location: 'Lagos, Nigeria',
  heroIntro: 'I help busy professionals and businesses stay organized, manage day-to-day administrative tasks, and deliver reliable customer support through clear communication, efficient systems, and thoughtful follow-up.',
  coreStatement: 'I help businesses stay organized, keep customer communication moving, and handle the administrative details that keep daily operations running smoothly.'
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'va-admin',
    title: 'Virtual Assistance & Administrative Support',
    category: 'primary',
    iconName: 'ClipboardCheck',
    tagline: 'Reliable day-to-day operational assistance to free up executive time',
    items: [
      'Email management and inbox triage',
      'Calendar management & appointment scheduling',
      'Task coordination & priority tracking',
      'File & document organization',
      'Administrative assistance & reminders',
      'Data entry & spreadsheet upkeep',
      'Systematic follow-ups with stakeholders',
      'Online research & documentation'
    ]
  },
  {
    id: 'customer-support',
    title: 'Customer Support',
    category: 'primary',
    iconName: 'Headphones',
    tagline: 'Professional, empathetic customer-facing assistance across channels',
    items: [
      'Email support & response handling',
      'Live chat support & active monitoring',
      'Phone support & voice assistance',
      'Handling customer inquiries with clarity',
      'Customer complaint resolution & de-escalation',
      'Order & delivery status inquiry support',
      'Ticket management & triage',
      'Issue resolution and thoughtful escalation'
    ]
  },
  {
    id: 'crm-management',
    title: 'CRM & Client Management',
    category: 'primary',
    iconName: 'Users',
    tagline: 'Keeping client profiles, interaction histories, and pipelines accurate',
    items: [
      'HubSpot CRM record updates & management',
      'Customer information & contact profile organization',
      'Logging client communications and inquiries',
      'Follow-up tracking & automated task reminders',
      'Lead and customer pipeline stage updates',
      'Internal team notes & handover documentation',
      'Data hygiene & deduplication'
    ]
  },
  {
    id: 'calendar-scheduling',
    title: 'Calendar & Appointment Management',
    category: 'primary',
    iconName: 'Calendar',
    tagline: 'Conflict-free schedule coordination across time zones',
    items: [
      'Executive weekly calendar organization',
      'Meeting scheduling with internal & external parties',
      'Client appointment scheduling & confirmations',
      'Automated reminders & agenda preparation',
      'Recurring appointment coordination',
      'Avoiding and resolving scheduling conflicts',
      'Post-meeting follow-up scheduling'
    ]
  },
  {
    id: 'data-research',
    title: 'Data Entry & Research',
    category: 'supporting',
    iconName: 'FileSpreadsheet',
    tagline: 'Accurate data compilation and structured online intelligence gathering',
    items: [
      'Accurate data entry across platforms',
      'Spreadsheet management & basic formula setup',
      'Online market, competitor & vendor research',
      'Information synthesis & executive summaries',
      'Data accuracy verification & cleansing',
      'Google Forms setup & response collection',
      'Google Sheets organized data reporting'
    ]
  },
  {
    id: 'task-coordination',
    title: 'Task & Project Coordination',
    category: 'supporting',
    iconName: 'Kanban',
    tagline: 'Keeping deliverables on track through structured digital boards',
    items: [
      'Trello board setup, columns & card management',
      'Notion workspace & task tracker organization',
      'Deadline tracking & milestone monitoring',
      'Priority management & daily checklists',
      'Project organization & deliverable visibility',
      'Regular team status updates & progress tracking'
    ]
  },
  {
    id: 'travel-planning',
    title: 'Travel Planning & Itinerary Coordination',
    category: 'supporting',
    iconName: 'Plane',
    tagline: 'Stress-free travel research, reservations, and comprehensive itineraries',
    items: [
      'Comprehensive day-by-day itinerary planning',
      'Flight, hotel & transit option research',
      'Booking options comparison & cost summaries',
      'Meeting schedule alignment with travel times',
      'Travel documentation & confirmation file organization'
    ]
  },
  {
    id: 'social-media-admin',
    title: 'Social Media & LinkedIn Administrative Support',
    category: 'supporting',
    iconName: 'Share2',
    tagline: 'Organizational support for brand visibility and audience engagement',
    items: [
      'Content calendar coordination & scheduling',
      'Basic content formatting & asset organization',
      'LinkedIn profile administration & post scheduling',
      'Audience engagement tracking & comment monitoring',
      'Posting schedule coordination aligned with brand voice',
      'Basic performance metric logging'
    ]
  }
];

export const TOOL_CATEGORIES: ToolCategory[] = [
  {
    categoryName: 'Productivity & Administration',
    tools: [
      { name: 'Google Workspace', description: 'Centralized cloud suite for docs, sheets, drive, and email' },
      { name: 'Google Docs', description: 'Collaborative drafting, templates, and SOP documentation' },
      { name: 'Google Sheets', description: 'Data entry, tracking, formulas, and reporting spreadsheets' },
      { name: 'Google Drive', description: 'Structured file management, permissions, and folder hierarchies' },
      { name: 'Microsoft Office', description: 'Word, Excel, and PowerPoint administrative processing' },
      { name: 'Microsoft Outlook', description: 'Email triage, folder rules, and calendar coordination' }
    ]
  },
  {
    categoryName: 'Customer Support & CRM',
    tools: [
      { name: 'HubSpot', description: 'CRM contact records, pipelines, ticket logging, and follow-up management' },
      { name: 'Zendesk', description: 'Help desk ticket triage, macro responses, and customer issue tracking' },
      { name: 'Freshdesk', description: 'Omnichannel customer support, ticket routing, and resolution' },
      { name: 'Intercom', description: 'Live customer chat, instant messaging, and visitor support' },
      { name: 'Help Scout', description: 'Shared team inboxes and personalized customer email assistance' }
    ]
  },
  {
    categoryName: 'Scheduling',
    tools: [
      { name: 'Google Calendar', description: 'Time-blocking, executive scheduling, and conflict prevention' },
      { name: 'Calendly', description: 'Automated booking link setup, buffer times, and integration' },
      { name: 'Outlook Calendar', description: 'Corporate calendar coordination and meeting invites' }
    ]
  },
  {
    categoryName: 'Communication',
    tools: [
      { name: 'Slack', description: 'Real-time internal team messaging, channels, and async updates' },
      { name: 'Zoom', description: 'Video conferencing setup, invites, and meeting coordination' },
      { name: 'WhatsApp', description: 'Direct client communication, quick updates, and voice notes' },
      { name: 'Microsoft Teams', description: 'Team collaboration, file sharing, and virtual meetings' }
    ]
  },
  {
    categoryName: 'Project & Task Management',
    tools: [
      { name: 'Trello', description: 'Visual Kanban boards, task assignments, and progress tracking' },
      { name: 'Notion', description: 'Connected workspaces, documentation databases, and task lists' }
    ]
  },
  {
    categoryName: 'Social Media / Digital',
    tools: [
      { name: 'LinkedIn', description: 'Profile administration, post scheduling, and engagement monitoring' },
      { name: 'Canva', description: 'Visual presentation layouts, slide decks, and clean graphics' }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'hubspot-crm-support',
    title: 'Customer Support & CRM Management',
    category: 'customer_support',
    categoryLabel: 'Customer Support & CRM',
    tool: 'HubSpot',
    tools: ['HubSpot CRM', 'HubSpot Service Hub', 'Gmail'],
    description: 'A realistic demonstration workflow showing how I manage customer inquiries, update records, track support tickets, and schedule follow-ups using HubSpot CRM.',
    objective: 'Demonstrate end-to-end customer support lifecycle management, ensuring customer records remain accurate, response times stay prompt, and tickets progress systematically toward resolution.',
    approach: 'Built a systematic 8-stage customer support pipeline in HubSpot that links customer email inquiries directly to CRM contact records, documents internal context, and automates follow-up reminders.',
    processSteps: [
      'Customer Inquiry Received: Read and categorize incoming customer message.',
      'Customer Information Verified: Locate or create contact record in HubSpot; verify account details.',
      'Issue / Request Documented: Create support ticket; log request details, urgency, and category.',
      'Customer Responded To: Send a polite, empathetic, and solution-focused reply.',
      'Follow-Up Scheduled: Set task reminder in HubSpot for pending customer replies or vendor checks.',
      'Issue Resolved / Escalated: Confirm resolution with the customer or escalate to specialized team with clear internal notes.',
      'CRM Updated: Update ticket status to "Closed", verify lifecycle stage, and ensure contact log is pristine.',
      'Customer Follow-Up: Check in post-resolution to confirm complete satisfaction.'
    ],
    deliverable: 'Standardized Customer Support SOP, Ticket Stage Workflow Diagram, and HubSpot CRM Contact & Ticket Record Demonstration.',
    skillsDemonstrated: [
      'Contact Record Management',
      'Updating Customer Information',
      'Tracking Customer Interactions',
      'Recording Customer Inquiries',
      'Managing Follow-ups',
      'Ticket & Support Issue Tracking',
      'Customer Status Updates',
      'Internal Notes Documentation',
      'Follow-up Reminders',
      'Organizing Customer Information',
      'Moving Support Cases Through Stages',
      'Maintaining Accurate Records'
    ],
    storageKey: 'project_hubspot_crm',
    uploadLabel: 'Upload HubSpot CRM Screenshot',
    isSampleProject: true,
    sampleMockupType: 'hubspot',
    extraUploads: [
      { id: 'hubspot_contact', label: 'Upload HubSpot Contact Screenshot', storageKey: 'project_hubspot_contact' },
      { id: 'hubspot_ticket', label: 'Upload HubSpot Ticket Screenshot', storageKey: 'project_hubspot_ticket' },
      { id: 'hubspot_workflow', label: 'Upload HubSpot Workflow Screenshot', storageKey: 'project_hubspot_workflow' }
    ]
  },
  {
    id: 'executive-calendar-management',
    title: 'Executive Calendar Management',
    category: 'va',
    categoryLabel: 'Virtual Assistance & Administrative Support',
    tool: 'Google Calendar',
    tools: ['Google Calendar', 'Calendly', 'Google Meet / Zoom'],
    description: 'Demonstrating how I organize a weekly executive calendar to optimize scheduling, time management, reminders, meetings, appointments, and avoid conflicts across time zones.',
    objective: 'Protect executive focus time, streamline appointment bookings, prevent double-bookings, and provide seamless daily agendas.',
    approach: 'Implemented color-coded time-blocking, buffer periods between client calls, recurring team sync setups, and strict confirmation workflows.',
    processSteps: [
      'Audit current commitments and recurring meetings to identify friction points.',
      'Establish categorized color-coding (e.g., Deep Focus, Client Calls, Internal Syncs, Personal).',
      'Configure automated buffer windows (15 min) between external appointments to prevent burnout.',
      'Implement multi-time-zone overlays (e.g., WAT, GMT, EST, PST) for accurate scheduling.',
      'Set automated reminder notifications (24 hrs and 1 hr prior) with agenda links attached.'
    ],
    deliverable: 'Executive weekly schedule template with automated buffers, color-coded time blocks, and meeting confirmation SOP.',
    skillsDemonstrated: [
      'Weekly Calendar Organization',
      'Appointment Scheduling',
      'Meeting Coordination',
      'Automated Reminders',
      'Recurring Events Management',
      'Time-Blocking Strategy',
      'Conflict Prevention Across Time Zones'
    ],
    storageKey: 'project_google_calendar',
    uploadLabel: 'Upload Google Calendar Project Screenshot',
    isSampleProject: true,
    sampleMockupType: 'calendar'
  },
  {
    id: 'email-inbox-management',
    title: 'Professional Email Inbox Management',
    category: 'va',
    categoryLabel: 'Virtual Assistance & Administrative Support',
    tool: 'Gmail / Google Workspace',
    tools: ['Gmail', 'Google Workspace', 'Google Contacts'],
    description: 'Demonstrating how I organize high-volume executive inboxes using structured labels, automated filters, priority folders, and follow-up tagging.',
    objective: 'Transform a cluttered inbox into a zero-distraction workflow where high-priority messages are instantly visible and routine items are neatly categorized.',
    approach: 'Built a 4-tier labeling architecture (@Action Needed, @Awaiting Reply, @Read Later, @Archive/Receipts) paired with targeted keyword filters.',
    processSteps: [
      'Review existing email volume and categorize recurring incoming threads.',
      'Create standard nested labels and clean visual color-tags.',
      'Draft automated filter rules to bypass inbox for receipts, newsletters, and routine notifications.',
      'Create canned response templates for frequent administrative questions.',
      'Perform daily 3-pass inbox triage (Morning, Midday, Evening) ensuring urgent queries are flagged immediately.'
    ],
    deliverable: 'Organized Inbox Workflow System, Label Hierarchy Guide, and Canned Response Templates.',
    skillsDemonstrated: [
      'Inbox Organization',
      'Custom Labels & Filters',
      'Email Categorization',
      'Priority Management',
      'Follow-Up Tracking',
      'Professional Email Handling'
    ],
    storageKey: 'project_email_management',
    uploadLabel: 'Upload Email Management Screenshot',
    extraUploads: [
      { id: 'email_labels', label: '1. Label & Folder Hierarchy Screenshot', storageKey: 'project_email_labels' },
      { id: 'email_filters', label: '2. Automated Gmail Filter Rules Screenshot', storageKey: 'project_email_filters' },
      { id: 'email_templates', label: '3. Canned Responses & Templates Screenshot', storageKey: 'project_email_templates' }
    ],
    isSampleProject: true,
    sampleMockupType: 'email'
  },
  {
    id: 'trello-task-management',
    title: 'Trello Task Management Board',
    category: 'project_management',
    categoryLabel: 'Project & Task Management',
    tool: 'Trello',
    tools: ['Trello', 'Kanban Methodology'],
    description: 'A visual task tracking board demonstrating clear project progression, card checklists, priority tags, and deadline accountability.',
    objective: 'Provide transparent, real-time visibility into project status for executives and team members without micromanagement.',
    approach: 'Organized a streamlined Kanban pipeline: Backlog → Up Next → In Progress → Review/Awaiting Client → Completed.',
    processSteps: [
      'Gather tasks and group them by project stream or deliverable type.',
      'Configure board columns, label palettes (High, Medium, Low priority), and member assignments.',
      'Break down complex tasks into manageable sub-item checklists within each card.',
      'Assign hard deadlines and automate color alerts for approaching due dates.',
      'Conduct weekly backlog grooming to archive completed work and reprioritize upcoming items.'
    ],
    deliverable: 'Configured Trello Board with labeled workflows, checklists, deadlines, and automated status alerts.',
    skillsDemonstrated: [
      'Task Organization',
      'Prioritization Matrix',
      'Deadline Tracking',
      'Progress Tracking',
      'Task Status Updates',
      'Follow-Up Coordination',
      'Project Visibility'
    ],
    storageKey: 'project_trello',
    uploadLabel: 'Upload Trello Screenshot',
    isSampleProject: true,
    sampleMockupType: 'trello'
  },
  {
    id: 'sheets-task-tracker',
    title: 'Task & Deadline Tracker',
    category: 'data_research',
    categoryLabel: 'Data, Research & Organization',
    tool: 'Google Sheets',
    tools: ['Google Sheets', 'Formulas', 'Data Validation'],
    description: 'A structured spreadsheet tracker demonstrating task logging, automated status dropdowns, conditional formatting for urgent deadlines, and assignee tracking.',
    objective: 'Deliver an accessible, lightweight tracking tool that provides instant visual cues on overdue tasks, pending deliverables, and team responsibilities.',
    approach: 'Built a multi-column tracker utilizing data validation dropdowns, date formulas for days remaining, and dynamic color-coded urgency highlights.',
    processSteps: [
      'Define essential columns: Task ID, Category, Task Description, Owner, Priority, Due Date, Status, Notes.',
      'Implement Data Validation for Status (Not Started, In Progress, Blocked, Done) and Priority.',
      'Write conditional formatting rules to highlight overdue items in soft red and approaching deadlines in amber.',
      'Set up summary overview metrics showing total active tasks vs. completed items.',
      'Establish a disciplined daily update habit to verify status accuracy.'
    ],
    deliverable: 'Dynamic Task & Deadline Tracker template with automated formatting and status summaries.',
    skillsDemonstrated: [
      'Task Tracking & Upkeep',
      'Deadline Monitoring',
      'Status Management',
      'Priority Assessment',
      'Systematic Follow-Up',
      'Accountability',
      'Data Organization & Validation'
    ],
    storageKey: 'project_sheets_tracker',
    uploadLabel: 'Upload Google Sheets Screenshot',
    isSampleProject: true,
    sampleMockupType: 'sheets'
  },
  {
    id: 'forms-sheets-workflow',
    title: 'Client Information Collection Workflow',
    category: 'admin',
    categoryLabel: 'Virtual Assistance & Administrative Support',
    tool: 'Google Forms + Google Sheets',
    tools: ['Google Forms', 'Google Sheets', 'Email Notifications'],
    description: 'Demonstrating an automated client intake flow: Google Form → Response Collection → Google Sheet → Organized Data → Systematic Follow-Up.',
    objective: 'Eliminate manual data transcription and ensure new client information is systematically captured and structured for immediate onboarding action.',
    approach: 'Designed an intuitive client intake questionnaire linked directly to a master responses sheet with clean field mapping and automated timestamping.',
    processSteps: [
      'Design Google Form with required fields (Company name, contact person, project scope, deadlines).',
      'Connect Form responses to a dedicated Google Sheet master database.',
      'Configure automatic email notifications upon new submission arrival.',
      'Structure the Sheet with dedicated columns for Onboarding Stage, Assigned VA, and Follow-Up Date.',
      'Execute prompt follow-up within designated business turnaround hours.'
    ],
    deliverable: 'Integrated Client Intake Form, Structured Data Repository Sheet, and Onboarding Checklist.',
    skillsDemonstrated: [
      'Workflow Automation',
      'Client Onboarding Intake',
      'Data Collection & Accuracy',
      'Information Organization',
      'Cross-Tool Linking',
      'Prompt Client Follow-Up'
    ],
    storageKey: 'project_forms_sheets',
    uploadLabel: 'Upload Google Forms & Sheets Screenshot',
    isSampleProject: true,
    sampleMockupType: 'forms',
    extraUploads: [
      { id: 'forms_intake', label: 'Upload Google Form Screenshot', storageKey: 'project_forms_form' },
      { id: 'sheets_responses', label: 'Upload Google Sheets Responses Screenshot', storageKey: 'project_forms_sheet' }
    ]
  },
  {
    id: 'data-research-organization',
    title: 'Data Research & Information Organization',
    category: 'data_research',
    categoryLabel: 'Data, Research & Organization',
    tool: 'Google Sheets & Web Research',
    tools: ['Google Search', 'Google Sheets', 'Google Docs'],
    description: 'Demonstrating structured online research, vendor comparison, data gathering, verification of contact information, and executive summaries.',
    objective: 'Provide business owners with vetted, structured data to make informed purchasing, hiring, or partnership decisions without spending hours browsing.',
    approach: 'Formulated strict research parameters, verified sources across multiple directories, and formatted findings into a scannable comparison matrix.',
    processSteps: [
      'Define search criteria, required data points (Pricing, Features, Reviews, Contact Details).',
      'Conduct methodical web research across official company websites and reputable portals.',
      'Validate accuracy of names, email addresses, and phone numbers.',
      'Compile findings into a standardized spreadsheet with comparative summary columns.',
      'Draft a 1-page executive brief summarizing key findings and recommended options.'
    ],
    deliverable: 'Comprehensive Market/Vendor Research Matrix and 1-Page Decision Summary Brief.',
    skillsDemonstrated: [
      'Online Research Methodology',
      'Information Gathering',
      'Data Cleansing & Validation',
      'Data Organization',
      'Information Synthesis',
      'Spreadsheet Management'
    ],
    storageKey: 'project_data_research',
    uploadLabel: 'Upload Research Project Screenshot',
    isSampleProject: true,
    sampleMockupType: 'research'
  },
  {
    id: 'linkedin-admin-support',
    title: 'LinkedIn Administrative Support',
    category: 'social_media',
    categoryLabel: 'Social Media & LinkedIn Support',
    tool: 'LinkedIn',
    tools: ['LinkedIn', 'Google Sheets Content Calendar'],
    description: 'Demonstrating professional LinkedIn administration: post scheduling, content organization, tracking audience engagement, and maintaining brand tone.',
    objective: 'Support professional brand visibility, maintain consistent posting cadences, and monitor inbound messages and comments for timely administrative responses.',
    approach: 'Organized a weekly content queue in Google Sheets, scheduled posts at peak engagement windows, and monitored incoming connection requests and comments.',
    processSteps: [
      'Maintain an organized content schedule with post copy, hashtags, and visual assets.',
      'Schedule approved posts directly or via scheduling tools adhering to brand voice.',
      'Monitor post comments and flag high-value networking opportunities for the client.',
      'Review inbound connection requests and categorize leads vs. spam.',
      'Log weekly engagement numbers (reactions, comments, profile views) into a tracking sheet.'
    ],
    deliverable: 'LinkedIn Content Schedule, Activity Tracker, and Interaction Guidelines.',
    skillsDemonstrated: [
      'Content Scheduling',
      'Post Organization',
      'Engagement Tracking',
      'Professional Content Preparation',
      'Brand Voice Alignment',
      'Inbound Network Triage'
    ],
    storageKey: 'project_linkedin',
    uploadLabel: 'Upload LinkedIn Project Screenshot',
    isSampleProject: true,
    sampleMockupType: 'linkedin'
  },
  {
    id: 'social-media-strategy',
    title: 'Social Media Content & Engagement Strategy',
    category: 'social_media',
    categoryLabel: 'Social Media & LinkedIn Support',
    tool: 'Google Docs & Notion',
    tools: ['Content Calendars', 'Canva', 'Notion'],
    description: 'Demonstrating content planning, posting schedules, audience engagement tactics, content organization, and maintaining brand visibility.',
    objective: 'Provide structured administrative support for multi-week content planning so creators and small businesses never run out of ideas or miss posting days.',
    approach: 'Created content pillars (Educational, Behind-the-scenes, Value tips, Community) and mapped them onto a monthly calendar with predefined posting times.',
    processSteps: [
      'Define 4 core content themes aligned with the target audience.',
      'Map post concepts across a 4-week calendar schedule.',
      'Organize captions, asset folders, and call-to-actions in a shared repository.',
      'Outline standard engagement tactics (responding to comments within 1 hour of posting).',
      'Track monthly performance trends to highlight which topics resonate most.'
    ],
    deliverable: 'Monthly Content Calendar Blueprint, Asset Tracker, and Audience Engagement Guidelines.',
    skillsDemonstrated: [
      'Content Planning',
      'Posting Schedule Maintenance',
      'Audience Engagement Tactics',
      'Content Organization',
      'Brand Voice Consistency',
      'Visibility Coordination'
    ],
    storageKey: 'project_social_strategy',
    uploadLabel: 'Upload Social Media Strategy Screenshot',
    isSampleProject: true,
    sampleMockupType: 'social_strategy'
  },
  {
    id: 'instagram-analysis',
    title: 'Instagram Engagement Analysis',
    category: 'social_media',
    categoryLabel: 'Social Media & LinkedIn Support',
    tool: 'Instagram Insights & Sheets',
    tools: ['Instagram Insights', 'Google Sheets'],
    description: 'Demonstrating engagement reviews, content observation, audience interaction tracking, and structured reporting on posting performance.',
    objective: 'Provide clear, objective observation of which post formats receive engagement to inform future content decisions.',
    approach: 'Tracked post metrics systematically over a set period, noting format types (Carousels, Reels, Single Images) and audience comment themes.',
    processSteps: [
      'Extract public engagement counts (Likes, Comments, Shares, Saves where available).',
      'Categorize posts by media type and subject matter.',
      'Log data into an organized spreadsheet with percentage comparisons.',
      'Identify top-performing topics based on meaningful comment interactions.',
      'Compile observations into a clear summary report with visual highlights.'
    ],
    deliverable: 'Instagram Performance Review Sheet and Key Observations Summary Report.',
    skillsDemonstrated: [
      'Engagement Review',
      'Content Observation',
      'Audience Interaction Analysis',
      'Data Organization',
      'Basic Reporting'
    ],
    storageKey: 'project_instagram_analysis',
    uploadLabel: 'Upload Instagram Analysis Screenshot',
    isSampleProject: true,
    sampleMockupType: 'instagram'
  },
  {
    id: 'travel-planning-coordination',
    title: 'Travel Planning & Itinerary Coordination',
    category: 'travel',
    categoryLabel: 'Travel Planning',
    tool: 'Google Docs & Sheets',
    tools: ['Google Flights', 'Booking Engines', 'Google Docs', 'Google Maps'],
    description: 'Demonstrating end-to-end travel research, flight and accommodation comparison, schedule coordination, and comprehensive day-by-day itineraries.',
    objective: 'Deliver an executive travel package where all transit, accommodation, meeting locations, and emergency contacts are organized into a single mobile-accessible document.',
    approach: 'Conducted comparative research for flights and hotels adhering to budget constraints, mapped locations to meeting venues, and structured a chronological itinerary.',
    processSteps: [
      'Clarify travel dates, destination, budget, and executive preferences (airline loyalty, room type).',
      'Research multiple flight routes balancing travel duration, layovers, and pricing.',
      'Shortlist hotels located within close proximity to business meeting venues.',
      'Build a day-by-day chronological itinerary with confirmation numbers, check-in times, and transport directions.',
      'Assemble digital copies of boarding passes, receipts, and local emergency information into a shared Google Drive folder.'
    ],
    deliverable: 'Complete Executive Travel Dossier: Master Itinerary, Booking Comparison Matrix, and Emergency Contacts Document.',
    skillsDemonstrated: [
      'Itinerary Creation',
      'Travel Research',
      'Schedule Organization',
      'Booking Options Research',
      'Travel Logistics Coordination'
    ],
    storageKey: 'project_travel_planning',
    uploadLabel: 'Upload Travel Planning Project',
    isSampleProject: true,
    sampleMockupType: 'travel'
  },
  {
    id: 'canva-design-projects',
    title: 'Canva Design & Content Projects',
    category: 'social_media',
    categoryLabel: 'Social Media & Design Support',
    tool: 'Canva',
    tools: ['Canva', 'Presentation Decks', 'Visual Formatting'],
    description: 'A dedicated showcase of visual design and administrative presentation assets: Podcast covers, Social media strategy decks, Podcast strategy presentations, and Brand visual materials.',
    objective: 'Demonstrate the ability to produce clean, on-brand visual materials, slide presentations, and promotional graphics that support marketing and client communications.',
    approach: 'Leveraged Canva to create polished, high-contrast layouts using harmonious palettes, legible typography hierarchies, and clean image placements.',
    processSteps: [
      'Review brand guidelines, color codes, and typography rules.',
      'Select appropriate layout dimensions for specific platforms (e.g., 3000x3000px for podcast covers, 16:9 for presentations).',
      'Structure slide content with generous whitespace and clear visual hierarchies.',
      'Export high-resolution assets in appropriate formats (PNG, PDF Standard, PDF Print).',
      'Organize assets into labeled project folders for quick retrieval.'
    ],
    deliverable: 'Gallery of 4 Visual Assets: Podcast Cover, Social Media Strategy Presentation, Podcast Strategy Presentation, and Brand Materials.',
    skillsDemonstrated: [
      'Canva Asset Creation',
      'Slide Deck Formatting',
      'Brand Asset Organization',
      'Visual Communication',
      'Typography & Layout Formatting'
    ],
    storageKey: 'project_canva_gallery',
    uploadLabel: 'Upload Canva Project',
    isSampleProject: true,
    sampleMockupType: 'canva',
    extraUploads: [
      { id: 'canva_podcast_cover', label: 'Upload Podcast Cover', storageKey: 'canva_podcast_cover' },
      { id: 'canva_social_deck', label: 'Upload Social Media Strategy Deck', storageKey: 'canva_social_deck' },
      { id: 'canva_podcast_strategy', label: 'Upload Podcast Strategy Deck', storageKey: 'canva_podcast_strategy' },
      { id: 'canva_brand_materials', label: 'Upload Brand Visual Materials', storageKey: 'canva_brand_materials' }
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'Case 1: Product Availability & In-Store Hold',
    scenario: 'Customer asks whether a specific item is in stock and requests that it be held for afternoon in-store pickup.',
    customerMessage: '"Hi! Do you have the ergonomic desk organizer in Matte Black currently available in store? If so, can you please hold one for me? I can pick it up around 4:30 PM today. Thank you! - David"',
    sarahResponse: '"Hello David,\n\nThank you for reaching out! Yes, we have 2 units of the Ergonomic Desk Organizer in Matte Black in stock. I have set one aside for you at the front desk under your name, \'David\'.\n\nWe will hold it for you until 6:00 PM today. Our location is open until 7:00 PM. Please feel free to reply here if your arrival time changes or if you need directions.\n\nLooking forward to seeing you!\n\nBest regards,\nSarah | Customer Support"',
    actionTaken: [
      'Checked real-time inventory system to confirm current on-hand count (verified 2 units available).',
      'Physically or digitally placed a hold tag on 1 unit with customer name and pickup window.',
      'Verified customer contact details in the support log.',
      'Sent a clear, courteous confirmation email detailing the hold deadline (6:00 PM).',
      'Updated the internal front-desk handover sheet for smooth customer collection.'
    ],
    followUp: 'If not picked up by 5:30 PM, send a gentle SMS/email reminder checking if the customer needs an extended hold or alternative shipping arrangement.',
    skillsDemonstrated: ['Inventory Checking', 'Prompt Customer Communication', 'Active Listening', 'Reservation Management', 'Internal Team Coordination']
  },
  {
    id: 'case-2',
    title: 'Case 2: Delayed Order & Shipping Status',
    scenario: 'Customer expresses concern that their order has not arrived within the estimated delivery window.',
    customerMessage: '"My order (#4892) was supposed to arrive yesterday and I haven\'t received it yet or seen any tracking updates. What is happening? I need this for an event this weekend."',
    sarahResponse: '"Hello Marcus,\n\nThank you for checking in, and I understand how important it is to receive this ahead of your weekend event.\n\nI just checked order #4892 directly with our courier partner. The shipment experienced a brief 24-hour sorting delay at the central depot, but it has now departed and is scheduled for delivery tomorrow, Thursday, between 11:00 AM and 2:00 PM.\n\nHere is your updated live tracking link: [Tracking #TRK-88291]. I have also placed a high-priority flag on this parcel with the local delivery depot.\n\nI will monitor the tracking myself first thing tomorrow morning and will email you as soon as it is marked out for delivery. Please let me know if you need anything else in the meantime!\n\nWarm regards,\nSarah | Support Specialist"',
    actionTaken: [
      'Verified order ID #4892 against customer profile and courier tracking portal.',
      'Identified exact bottleneck (depot transit delay) and acquired updated estimated delivery time.',
      'Responded with empathy, validating the customer\'s deadline urgency.',
      'Provided active tracking link and transparent next steps.',
      'Logged an internal follow-up task on my personal tracker for Thursday 9:00 AM.'
    ],
    followUp: 'Monitored delivery status on Thursday morning, confirmed package was out for delivery, and sent a brief check-in confirmation to ensure customer received it.',
    skillsDemonstrated: ['De-escalation', 'Carrier Tracking', 'Clear Expectation Setting', 'Proactive Accountability', 'CRM Case Management']
  },
  {
    id: 'case-3',
    title: 'Case 3: Customer Complaint & De-escalation',
    scenario: 'Customer is unhappy because a delivered subscription box was missing a key accessory.',
    customerMessage: '"I just opened my quarterly subscription box and the promised wireless charging pad is missing! This is very disappointing considering how much I pay for this service."',
    sarahResponse: '"Hello Elena,\n\nI am so sorry to hear that the wireless charging pad was missing from your quarterly box. You shouldn\'t have to deal with missing items after eagerly awaiting your delivery, and I completely understand your frustration.\n\nI have already arranged for a replacement wireless charging pad to be dispatched to your address via expedited delivery at no cost to you. Your replacement order number is #REP-3011, and you will receive tracking information within the next 4 business hours.\n\nAdditionally, I have applied a $15 credit to your next subscription cycle as a gesture of our appreciation for your patience.\n\nPlease don\'t hesitate to let me know if you have any questions. I\'ll personally track this replacement until it arrives at your doorstep.\n\nSincerely,\nSarah | Customer Support"',
    actionTaken: [
      'Acknowledged the customer\'s disappointment immediately without defensive or dismissive wording.',
      'Verified customer subscription tier and unboxing checklist.',
      'Immediately initiated an expedited replacement shipment in the order management system.',
      'Issued an authorized store credit to acknowledge the inconvenience.',
      'Documented the packaging omission on the fulfillment team quality log.'
    ],
    followUp: 'Sent tracking details upon dispatch, followed by a check-in message 48 hours later confirming successful delivery and condition of the replacement.',
    skillsDemonstrated: ['Empathetic Listening', 'Conflict Resolution', 'Quick Remediation', 'No-Defensive Tone', 'Customer Retention']
  },
  {
    id: 'case-4',
    title: 'Case 4: General Customer Product Inquiry',
    scenario: 'Prospective customer asks questions about product compatibility and onboarding before purchasing.',
    customerMessage: '"Hi Sarah, does your virtual onboarding software integrate with Microsoft Outlook and Google Workspace simultaneously? We have team members using both. Also, is there a setup fee?"',
    sarahResponse: '"Hello Julian,\n\nThanks for reaching out! Yes, our platform seamlessly supports hybrid environments—team members using Microsoft Outlook and Google Workspace can both connect simultaneously without any conflict.\n\nTo answer your second question: there are zero setup or installation fees. All onboarding guides and integrations are included in our standard monthly plan.\n\nI\'ve attached our quick 2-page integration overview sheet for your reference. If helpful, I\'d be happy to share a 5-minute video walkthrough or arrange a live demo call with our onboarding team whenever convenient for you.\n\nBest regards,\nSarah | Client Support"',
    actionTaken: [
      'Addressed both specific technical questions directly in the opening paragraphs.',
      'Clarified pricing transparency (no hidden setup fees).',
      'Attached relevant documentation for client self-review.',
      'Offered a low-friction next step (walkthrough video or brief demo).',
      'Logged the prospect as a warm lead in the CRM pipeline for scheduled follow-up.'
    ],
    followUp: 'Scheduled an automated reminder to send a friendly check-in 3 days later if no reply is received.',
    skillsDemonstrated: ['Product Knowledge', 'Concise Communication', 'Sales Support', 'Value-Add Responses', 'Lead Tracking']
  }
];

export const COMMUNICATION_SAMPLES: CommunicationSample[] = [
  {
    id: 'comm-1',
    type: 'Email Support — Resolution & Next Steps',
    channel: 'Email',
    context: 'Customer requested an account email update and verification link reissue.',
    response: `Subject: Your Account Email Has Been Updated — Verification Link Inside

Dear Amanda,

Thank you for contacting support. I have successfully updated your registered account email to amanda.w@example.com as requested.

For your security, please click the confirmation link below within 24 hours to finalize your credentials:
[Secure Verification Link]

Once confirmed, your previous login will be deactivated, and your account records and saved preferences will remain completely intact.

If you did not request this update or if you need assistance with any other settings, please reply directly to this email and I will assist you right away.

Best regards,
Sarah Kogbede
Customer Support Specialist`,
    keyElements: ['Security confirmation', 'Clear 24-hr timeframe', 'Actionable link', 'Reassuring tone']
  },
  {
    id: 'comm-2',
    type: 'Live Chat Support — Fast & Friendly Assistance',
    channel: 'Chat',
    context: 'Website visitor asking about shipping options for an urgent order.',
    response: `Sarah: Hi Marcus! Welcome to our live chat. How can I help you today?

Marcus: Hey, if I order right now, can I get it by Friday? I'm in Chicago.

Sarah: Thanks for asking! Yes—if you place your order before 2:00 PM EST today and select "Express 2-Day Shipping" at checkout, your package will arrive on or before Friday afternoon.

Sarah: Would you like me to guide you to the checkout link or check if your item is ready to ship immediately?`,
    keyElements: ['Instant greeting', 'Direct cutoff time guidance', 'Concrete delivery estimate', 'Helpful close']
  },
  {
    id: 'comm-3',
    type: 'Complaint Handling — Sincere De-escalation',
    channel: 'Email',
    context: 'Client upset about a delayed report deliverable.',
    response: `Subject: Regarding Your Monthly Summary Report — Urgent Update

Dear Mr. Sterling,

Thank you for your candid email. I completely understand your frustration regarding the delay of your Monthly Summary Report, and I sincerely apologize for the inconvenience this caused your morning briefing.

The delay occurred during final data validation across our regional spreadsheets. I have personally prioritized the completion of your file, and the final audited report is attached to this email.

To prevent this from recurring, I have adjusted our reporting workflow so that initial data compilation begins 48 hours earlier every month.

I appreciate your patience and partnership, and I am available by phone or email today if you would like to review the figures together.

Warm regards,
Sarah Kogbede | Administrative Support`,
    keyElements: ['Full accountability', 'Transparent reason without excuses', 'Immediate deliverable', 'Preventative action']
  },
  {
    id: 'comm-4',
    type: 'Order Inquiry — Clear Status Breakdown',
    channel: 'Email',
    context: 'Customer asking why a multi-item order arrived in two packages.',
    response: `Subject: Update on Order #6721 — Split Shipment Details

Hello Rachel,

Thank you for checking in on Order #6721! 

I noticed you received package 1 containing the Ceramic Mugs today. To ensure you received your items as quickly as possible, your order was fulfilled from two separate regional warehouses.

Your remaining item (the French Press) is in package 2 and is currently in transit with FedEx (Tracking: #9928104). It is on track for delivery tomorrow, Wednesday, between 1:00 PM and 4:00 PM.

You will not incur any additional shipping charges for this split shipment. Please feel free to reply if you have any questions!

Best regards,
Sarah | Support`,
    keyElements: ['Proactive explanation of split shipment', 'Tracking number provided', 'Clear delivery window', 'Zero extra fees confirmed']
  },
  {
    id: 'comm-5',
    type: 'Client Follow-Up — Closing the Loop',
    channel: 'Follow-up',
    context: 'Checking in on a customer whose technical issue was resolved 3 days ago.',
    response: `Subject: Following Up: Has Everything Been Running Smoothly?

Hi Sophia,

I hope you are having a wonderful week!

I am following up on the calendar synchronization issue we resolved for your team on Monday. I wanted to verify that all your scheduled appointments and time blocks are displaying properly across Google Calendar and Zoom.

Please let me know if you’ve noticed any hiccups or if there is anything else I can organize for your team.

Always happy to help!

Warmly,
Sarah Kogbede
Virtual Assistant & Support Specialist`,
    keyElements: ['Thoughtful check-in', 'Specific reference to past issue', 'Low-pressure closing', 'Demonstrates care']
  },
  {
    id: 'comm-6',
    type: 'Appointment Inquiry — Frictionless Booking',
    channel: 'Email',
    context: 'Prospective client asking to coordinate a strategy call across time zones.',
    response: `Subject: Scheduling Our Discovery Call — Options Inside

Dear Michael,

Thank you for reaching out! I would be delighted to connect for a 30-minute discovery call to discuss your administrative support needs.

To make scheduling seamless across our time zones, you are welcome to pick any slot that suits your calendar using my direct booking link:
👉 https://calendly.com/sarahkogbede/30min

Alternatively, here are two options in your local time (EST) this week if you prefer:
• Thursday, Oct 1st at 11:00 AM EST (4:00 PM WAT)
• Friday, Oct 2nd at 2:00 PM EST (7:00 PM WAT)

Let me know what works best, and I will send the calendar invitation with a video link.

Best regards,
Sarah Kogbede`,
    keyElements: ['Self-serve booking link', 'Explicit time zone conversion', 'Polite, professional tone']
  },
  {
    id: 'comm-7',
    type: 'Customer Escalation — Internal Handover Note',
    channel: 'CRM Ticket',
    context: 'Internal escalation note to senior technical engineer regarding recurring billing API bug.',
    response: `[INTERNAL ESCALATION NOTE — TICKET #4409]
Customer: Apex Studio (Account ID: #8812)
Contact: Priya Patel (Lead Operations)
Priority: High / Escalated to Billing Eng

Summary of Issue:
Customer attempted to update payment method for annual renewal; receiving error code "ERR_STRIPE_METHOD_SYNC". Issue replicated in test environment.

Actions Taken by Sarah:
1. Verified customer account status (Current plan active, 3 days remaining before retry lockout).
2. Collected browser console error logs from customer and attached to ticket attachments.
3. Extended grace period by 7 business days in Stripe dashboard so service is not interrupted.
4. Sent reassuring acknowledgment email to Priya confirming escalation and 24-hr update window.

Assigned to: @Engineering-Billing
Requested SLA: Engineering review within 4 business hours.`,
    keyElements: ['Structured internal format', 'Reproducible steps', 'Grace period protection', 'Clear ownership & SLA']
  }
];

export const WORK_PROCESS = [
  {
    step: '01',
    title: 'Understand',
    summary: 'Understand the client’s needs, priorities, systems and expectations.',
    description: 'Every productive partnership begins with active listening. I learn your preferred communication channels, software stack, deadline sensitivities, and tone of voice so every task aligns with your standards.'
  },
  {
    step: '02',
    title: 'Organize',
    summary: 'Organize tasks, information, communication, schedules and priorities.',
    description: 'I structure chaos into clarity. Whether organizing email labels, building Trello Kanban boards, or setting up calendar buffers, I create logical systems that prevent items from slipping through the cracks.'
  },
  {
    step: '03',
    title: 'Execute',
    summary: 'Complete tasks accurately and efficiently.',
    description: 'With clear priorities established, I focus on meticulous execution. From responding to customer tickets to updating CRM pipelines and compiling spreadsheets, I deliver quality work on schedule.'
  },
  {
    step: '04',
    title: 'Communicate',
    summary: 'Keep communication clear and provide updates when needed.',
    description: 'No guesswork required. I provide structured daily or weekly status summaries, flag blockers early, and maintain transparent, responsive communication across Slack, email, or WhatsApp.'
  },
  {
    step: '05',
    title: 'Follow Up',
    summary: 'Make sure tasks and customer requests are not left unattended.',
    description: 'True dependability lives in the follow-through. I track pending customer responses, check on delayed orders, confirm appointment agendas, and close the loop on every open item.'
  }
];

export const TRANSFERABLE_SKILLS = [
  {
    title: 'Customer Service & De-escalation',
    description: 'Extensive hands-on practice listening to client needs, de-escalating tense customer situations, communicating with patience, and finding actionable solutions that build customer loyalty.'
  },
  {
    title: 'Administrative Support & File Organization',
    description: 'A methodical approach to managing file directories, structuring SOP documentation, coordinating calendars, and handling repetitive administrative details with precision.'
  },
  {
    title: 'Client & Stakeholder Communication',
    description: 'Clear, concise verbal and written communication tailored to executives, colleagues, vendors, and external clients with appropriate professional etiquette.'
  },
  {
    title: 'Sales Support & CRM Hygiene',
    description: 'Experience recording inquiries, updating deal stages, tagging leads, organizing customer contact records, and scheduling timely follow-ups in HubSpot.'
  },
  {
    title: 'Time Management & Prioritization',
    description: 'Proven ability to balance multiple competing tasks, establish realistic timelines, protect deep focus hours, and consistently meet deadlines.'
  },
  {
    title: 'Data Handling & Documentation',
    description: 'Careful data entry, data cleansing, spreadsheet formula usage, and information verification ensuring business records remain dependable and accurate.'
  }
];

export const WHAT_SETS_ME_APART = [
  {
    title: 'DETAIL-ORIENTED',
    highlight: 'Precision in Every Task',
    description: 'I pay attention to the details that keep tasks, records and communication accurate. Whether formatting spreadsheets or checking flight layovers, I verify before delivering.'
  },
  {
    title: 'RELIABLE',
    highlight: 'Consistent Follow-Through',
    description: 'I take responsibility for assigned tasks and follow through. When a task is on my plate, you can trust it will be completed without needing repeated reminders.'
  },
  {
    title: 'CUSTOMER-FOCUSED',
    highlight: 'Empathetic & Solution-Driven',
    description: 'I approach customer communication with professionalism, patience and a solution-oriented mindset, representing your brand voice with genuine warmth and composure.'
  },
  {
    title: 'ORGANIZED',
    highlight: 'Structure Out of Chaos',
    description: 'I enjoy creating structure around tasks, schedules, information and workflows. Messy inboxes and scattered spreadsheets are opportunities to build clean systems.'
  },
  {
    title: 'ADAPTABLE',
    highlight: 'Fast Learner of Tools',
    description: 'I am comfortable learning new tools and adapting to different business processes. I pick up software quickly and integrate smoothly into existing team workflows.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'testimonial-1',
    quote: 'Sarah was reliable when it came to handling client communication and follow-ups. She made sure requests were properly tracked and that nothing was left unattended. I appreciated how she kept communication clear and made things easier for me to manage.',
    author: 'Titilayo',
    role: 'Client',
    storageKey: 'testimonial_titilayo'
  },
  {
    id: 'testimonial-2',
    quote: 'Sarah helped keep our client information and communication organized. She was able to work across different platforms, keep records updated, and follow through on tasks without needing constant supervision. Her support made our day-to-day client management much easier.',
    author: 'Debby',
    role: 'Client',
    storageKey: 'testimonial_debby'
  },
  {
    id: 'testimonial-3',
    quote: 'Sarah understood what needed to be done and took care of it without making things complicated. She communicated clearly, followed up when necessary, and handled client-related tasks professionally. I could trust her to keep things moving.',
    author: 'Tayo',
    role: 'Client',
    storageKey: 'testimonial_tayo'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What services do you offer?',
    answer: 'I provide dual-focused remote support: Virtual Assistance (email management, calendar scheduling, task coordination, file organization, travel planning, data entry, research) and Customer Support (email/chat/phone inquiry handling, complaint resolution, ticket management, follow-ups, and CRM management).'
  },
  {
    question: 'Do you provide customer support?',
    answer: 'Yes, customer support is one of my primary core capabilities. I manage incoming email, live chat, and phone inquiries, handle ticket queues in platforms like HubSpot, Zendesk, and Freshdesk, de-escalate complaints empathetically, and ensure proactive customer follow-ups.'
  },
  {
    question: 'What tools can you work with?',
    answer: 'I work with Google Workspace (Docs, Sheets, Drive, Gmail, Calendar), Microsoft Office & Outlook, HubSpot CRM, Zendesk, Freshdesk, Intercom, Help Scout, Trello, Notion, Slack, Zoom, WhatsApp, Calendly, LinkedIn, and Canva.'
  },
  {
    question: 'Are you available for remote work?',
    answer: 'Yes, I am 100% set up for remote work with reliable high-speed internet, dedicated workspace equipment, and disciplined asynchronous and synchronous communication practices.'
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Yes! I comfortably collaborate with clients across different time zones (including West Africa, UK/Europe GMT, US Eastern EST, and US Pacific PST), scheduling overlaps for meetings and maintaining clear async progress reports.'
  },
  {
    question: 'Can you manage both administrative and customer support tasks?',
    answer: 'Absolutely. That is my key differentiator. I can manage internal operational workflows (calendars, inbox triage, task boards) while simultaneously assisting external customers with questions, order updates, and CRM ticket resolutions.'
  },
  {
    question: 'Are you available full-time, part-time or contract?',
    answer: 'I am available for Full-time, Part-time, and Contract arrangements depending on your business requirements.'
  },
  {
    question: 'How can I book a call?',
    answer: 'You can easily schedule a complimentary 30-minute discovery call directly on my Calendly page at https://calendly.com/sarahkogbede/30min, or email me at sarahkogbede@gmail.com with your preferred dates.'
  },
  {
    question: 'What types of businesses can you support?',
    answer: 'I support busy solo entrepreneurs, executives, consultants, digital agencies, e-commerce stores, creative professionals, and growing startups that need organized operational and customer-facing support.'
  }
];
