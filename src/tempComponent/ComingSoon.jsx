import { useEffect, useState } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

const ConfettiPiece = ({ color, rotation, left, delay }) => (
    <div
        className="absolute animate-float"
        style={{
            left: `${left}%`,
            animationDelay: `${delay}s`,
            transform: `rotate(${rotation}deg)`,
        }}
    >
        <div
            className="w-2 h-6 rounded-full opacity-70"
            style={{ backgroundColor: color }}
        />
    </div>
);

const ComingSoon = () => {
    useDocumentTitle('Coming Soon | Your Store');

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const confettiColors = ['#FF69B4', '#00CED1', '#FFD700', '#FF6B6B', '#98FB98'];

    const confettiPieces = Array.from({ length: 30 }, (_, i) => ({
        color: confettiColors[i % confettiColors.length],
        rotation: Math.random() * 360,
        left: Math.random() * 100,
        delay: Math.random() * 2
    }));

    useEffect(() => {
        const launchDate = new Date('2025-10-21T00:00:00');

        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const distance = launchDate.getTime() - now;

            if (distance < 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-100 relative overflow-hidden font-sans">
            {confettiPieces.map((piece, index) => (
                <ConfettiPiece key={index} {...piece} />
            ))}

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4 animate-fade-in">
                    Something Beautiful is Coming Your Way
                </h1>

                <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-xl animate-fade-in delay-200">
                    We’re crafting an experience unlike any other. Get ready for the big reveal.
                </p>

                <p className="text-xl text-pink-600 font-semibold mb-10 animate-fade-in delay-400">
                    Launching In:
                </p>

                <div className="flex flex-wrap gap-6 justify-center mb-12 animate-fade-in delay-600">
                    {Object.entries(timeLeft).map(([unit, value]) => (
                        <div
                            key={unit}
                            className="bg-white shadow-md rounded-lg p-4 w-24 h-24 flex flex-col justify-center items-center"
                        >
                            <div className="text-3xl font-bold text-gray-800">
                                {String(value).padStart(2, '0')}
                            </div>
                            <div className="text-sm uppercase text-gray-500 mt-1 tracking-wide">
                                {unit}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex space-x-6 text-lg animate-fade-in delay-800">
                    {[
                        { name: 'Twitter', url: 'https://twitter.com/dasthakat' },
                        { name: 'Facebook', url: 'https://facebook.com/dasthakat' },
                        { name: 'Instagram', url: 'https://instagram.com/dasthakat' }
                    ].map(({ name, url }) => (
                        <a
                            key={name}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-pink-600 transition-colors font-medium"
                        >
                            {name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(var(--rotation)); opacity: 1; }
    50% { transform: translateY(-20px) rotate(var(--rotation)); opacity: 0.6; }
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  @keyframes fade-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .animate-fade-in {
    animation: fade-in 1s ease-out forwards;
  }

  .delay-200 {
    animation-delay: 0.2s;
  }

  .delay-400 {
    animation-delay: 0.4s;
  }

  .delay-600 {
    animation-delay: 0.6s;
  }

  .delay-800 {
    animation-delay: 0.8s;
  }
`;
document.head.appendChild(style);

export default ComingSoon;
