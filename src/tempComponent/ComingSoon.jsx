import { useEffect, useState } from 'react';
import logo from '../assets/logo1.png'

const ConfettiPiece = ({ color, rotation, left, delay }) => (
    <div
        className="absolute animate-float"
        style={{
            left: `${left}%`,
            animation: `float 3s ease-in-out infinite`,
            animationDelay: `${delay}s`,
            transform: `rotate(${rotation}deg)`,
        }}
    >
        <div
            className="w-6 h-1 rounded-full"
            style={{ backgroundColor: color }}
        />
    </div>
);

const ComingSoon = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const confettiColors = [
        '#FF69B4', // Pink
        '#00CED1', // Turquoise
        '#FFD700', // Gold
        '#FF6B6B', // Coral
        '#98FB98', // Pale Green
    ];

    const confettiPieces = Array.from({ length: 20 }, (_, i) => ({
        color: confettiColors[i % confettiColors.length],
        rotation: Math.random() * 360,
        left: Math.random() * 100,
        delay: Math.random() * 2
    }));

    useEffect(() => {
        // Set launch date to 30 days from when the component is first mounted
        const launchDate = new Date();
        launchDate.setDate(launchDate.getDate() + 30); // Add 30 days

        // Save the launch date to localStorage so it persists across refreshes
        if (!localStorage.getItem('launchDate')) {
            localStorage.setItem('launchDate', launchDate.getTime().toString());
        }

        const savedLaunchDate = parseInt(localStorage.getItem('launchDate'));

        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const distance = savedLaunchDate - now;

            if (distance < 0) {
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                });
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        };

        // Calculate immediately
        calculateTimeLeft();

        // Update every second
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-white relative overflow-hidden">
            {confettiPieces.map((piece, index) => (
                <ConfettiPiece key={index} {...piece} />
            ))}

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
                {/* Logo with stretch animation */}
                <img
                    src={logo}
                    alt="Logo"
                    className="mb-6 w-96 h-auto animate-stretch"
                />

                <h1 className="text-6xl md:text-7xl font-bold mb-4 text-gray-800">
                    COMING SOON
                </h1>

                <p className="text-xl text-gray-600 mb-6">
                    We'll be celebrating the launch of our new site very soon!
                </p>

                <p className="text-2xl font-semibold text-blue-500 mb-12">
                    Stay Tuned for Something Mind-Blowing
                </p>

                {/* Timer */}
                <div className="flex space-x-6 mb-12">
                    {Object.entries(timeLeft).map(([unit, value]) => (
                        <div key={unit} className="flex flex-col items-center">
                            <div className="text-4xl font-bold text-gray-800 mb-2">
                                {String(value).padStart(2, '0')}
                            </div>
                            <div className="text-sm text-gray-500 uppercase">
                                {unit}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex space-x-6">
                    {[{ name: 'twitter', url: 'https://twitter.com/dasthakat' }, { name: 'facebook', url: 'https://facebook.com/dasthakat' }, { name: 'instagram', url: 'https://instagram.com/dasthakat' }].map(social => (
                        <a
                            key={social.name}
                            href={social.url}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <span className="capitalize">{social.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Add the float animation to your CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(var(--rotation)); }
    50% { transform: translateY(-20px) rotate(var(--rotation)); }
  }
  
  @keyframes stretch {
    0%, 100% { transform: scaleX(1); }
    50% { transform: scaleX(1.2); }
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .animate-stretch {
    animation: stretch 2s ease-in-out infinite;
  }
`;
document.head.appendChild(style);

export default ComingSoon;
