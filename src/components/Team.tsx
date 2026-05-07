const team = [
  {
    name: 'Jack Lindblad',
    role: 'Partner',
    linkedin: 'https://www.linkedin.com/in/jacklindblad',
  },
  {
    name: 'Matt McGanity',
    role: 'Partner',
    linkedin: 'https://www.linkedin.com/in/mattmcganity',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: '#f0f4f9'}}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12" style={{color: '#13294B'}}>
          Our Team
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition transform hover:scale-105 w-64"
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4" style={{backgroundColor: '#13294B'}}>
                {member.name.charAt(0)}
              </div>
              <h3 className="text-lg font-semibold mb-1" style={{color: '#13294B'}}>{member.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition text-sm font-medium hover:opacity-70"
                style={{color: '#E84A27'}}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
