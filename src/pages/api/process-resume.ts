import type { NextApiRequest, NextApiResponse } from 'next';
import groq from 'groq';
import { createClient } from '@sanity/client';

interface Profile {
  name: string;
  title: string;
  summary: string;
  skills: string[];
  experience: { company: string; role: string; duration: string }[];
}

// Initialize the Sanity client
const client = createClient({
  projectId: 'your_project_id', // Replace with your Sanity project ID
  dataset: 'your_dataset', // Replace with your Sanity dataset
  useCdn: true, // `false` if you want to ensure fresh data
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { content } = req.body;

    // Define the GROQ query to extract profile information
    const query = groq`
      *[_type == "profile" && content == $content] {
        name,
        title,
        summary,
        skills,
        experience[] {
          company,
          role,
          duration
        }
      }[0]
    `;

    try {
      // Fetch the profile data from Sanity
      const profile = await client.fetch(query, { content });

      if (profile) {
        res.status(200).json({ profile });
      } else {
        res.status(404).json({ message: 'Profile not found' });
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}