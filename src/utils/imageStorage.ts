/**
 * Client-side storage utility for portfolio image uploads.
 * Handles compression to keep images within local storage budgets.
 */

import headshotImg from '../assets/images/headshot.jpg';
import dataResearchImg from '../assets/images/data-research.jpg';
import emailMgmtImg from '../assets/images/email-management.jpg';
import formsSheetsImg from '../assets/images/forms-sheets.jpg';
import sheetsTrackerImg from '../assets/images/sheets-tracker.jpg';
import travelPlanningImg from '../assets/images/travel-planning.jpg';
import trelloMgmtImg from '../assets/images/trello-management.jpg';

/**
 * Static image asset registry mapping project keys directly to bundled assets.
 * Vite resolves these imports to exact relative paths for GitHub Pages and Vercel.
 */
export const STATIC_IMAGE_MAP: Record<string, string> = {
  headshot_primary: headshotImg,
  project_data_research: dataResearchImg,
  project_email_management: emailMgmtImg,
  project_forms_sheets: formsSheetsImg,
  project_sheets_tracker: sheetsTrackerImg,
  project_travel_planning: travelPlanningImg,
  project_trello: trelloMgmtImg,
};

export function getStoredImage(key: string): string | null {
  return STATIC_IMAGE_MAP[key] || null;
}

