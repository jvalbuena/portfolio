"use client"; // Add this line at the top

import { useState } from "react";

interface Profile {
  name: string;
  title: string;
  summary: string;
  skills: string[];
  experience: { company: string; role: string; duration: string }[];
}

export default function Page() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [fileContent, setFileContent] = useState<string | null>(null);

  // Handle file upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        setFileContent(text);
        // Send the file content to the backend for processing
        processFileContent(text);
      };
      reader.readAsText(file);
    }
  };

  // Function to send file content to the backend
  const processFileContent = async (content: string) => {
    try {
      const response = await fetch("/api/process-resume", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      });
      const data = await response.json();
      setProfile(data.profile);
    } catch (error) {
      console.error("Error processing file content:", error);
    }
  };

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I'm {profile?.name.split(" ")[0] || "User"} 👋
              </h1>
              <p className="max-w-[600px] md:text-xl">
                {profile?.summary || "Create your professional resume with ease."}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full max-w-5xl mb-12">
        <h2 className="text-2xl font-semibold mb-6">Upload Resume</h2>
        <input type="file" accept=".txt" onChange={handleFileUpload} className="mb-4" />
      </section>

      {profile && (
        <section className="w-full max-w-5xl">
          <h2 className="text-2xl font-semibold mb-6">Profile</h2>
          <div className="border p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">{profile.name}</h3>
            <p className="text-lg">{profile.title}</p>
            <p className="mt-4">{profile.summary}</p>
            <h4 className="text-lg font-semibold mt-6">Skills</h4>
            <ul className="list-disc list-inside">
              {profile.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <h4 className="text-lg font-semibold mt-6">Experience</h4>
            <ul className="list-disc list-inside">
              {profile.experience.map((exp, index) => (
                <li key={index}>
                  {exp.role} at {exp.company} ({exp.duration})
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}
