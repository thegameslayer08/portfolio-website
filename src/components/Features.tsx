'use client';

export default function Features() {
  const features = [
    {
      icon: '💰',
      title: '$5M Check Size',
      description: 'Meaningful capital deployment to support your acquisition and growth strategy'
    },
    {
      icon: '🔍',
      title: 'Thorough Vetting',
      description: 'We carefully evaluate sponsor track record, deal quality, and management team'
    },
    {
      icon: '🤝',
      title: 'True Partnership',
      description: 'Access to our deal flow, operational expertise, and professional network'
    },
    {
      icon: '⚡',
      title: 'Fast Decisions',
      description: 'Efficient evaluation process so you can move quickly on quality deals'
    },
    {
      icon: '📊',
      title: 'Sponsor-Focused',
      description: 'We understand independent sponsor dynamics and what it takes to succeed'
    },
    {
      icon: '🎯',
      title: 'Value Creation',
      description: 'We partner with operators who have a clear plan to build and exit successfully'
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12" style={{color: '#13294B'}}>
          Why Choose UIF
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl hover:shadow-lg transition transform hover:scale-105 border"
              style={{backgroundColor: '#f0f4f9', borderColor: '#d0dcea'}}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2" style={{color: '#13294B'}}>{feature.title}</h3>
              <p style={{color: '#374151'}}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
