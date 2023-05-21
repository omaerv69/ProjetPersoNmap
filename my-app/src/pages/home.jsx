import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Home() {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleInsert = () => {
    // Insert logic to save the inputText to the database here
    console.log('Inserting:', inputText);
  };

  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-cover bg-center" style={{ backgroundImage: "url('https://serwerweb.pl/wp-content/uploads/2020/05/nmap.png')" }}>
        <div className="flex flex-col items-center welcome-container">
          <h1 className="text-3xl mb-8 text-blue-200 font-serif">Welcome</h1>
          <Link href="/requete">
            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg">Start</button>
          </Link>
        </div>
      </main>
      <p className="text-gray-600 mt-2 text-right mr-5">
        <i>Created By: @Omaer.v</i>
      </p>
      <style jsx>{`
        .welcome-container {
          margin-top: 750px; 
        }
      `}</style>
    </div>
  );
}
