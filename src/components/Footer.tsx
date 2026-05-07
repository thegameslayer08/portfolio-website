export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8" style={{backgroundColor: '#0d1f38', color: '#c8d6e8'}}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4 text-white">UIF</h3>
            <p className="text-sm">Capital partner for independent sponsors. We provide the funding and support you need to acquire and grow businesses.</p>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-white">Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-white transition">About</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-white">Social</h3>
            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:text-white transition">Twitter</a>
              <a href="#" className="hover:text-white transition">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="border-t pt-8 text-center text-sm" style={{borderColor: '#1e3a5f'}}>
          <p>&copy; 2026 UIF. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
