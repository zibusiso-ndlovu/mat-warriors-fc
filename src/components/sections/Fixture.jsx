import React from "react";
import slide6 from '/images/hero/logo.png';
import slide5 from '/images/hero/mat-warriors5.jpg';

const fixture = {
  date: "2025-05-18",
  time: "09:00",
  venue: "Amakhosi Stadium",
  homeTeam: "Mat Warriors FC",
  awayTeam: "The Opponents",
  homeLogo: slide6,
  awayLogo: slide6,
  result: null, // or "2 - 1"
};

const Fixture = () => {
  const isUpcoming = fixture.result === null;

  return (
 <section
      className="relative w-full h-[90vh] bg-cover bg-center flex flex-col items-center justify-center text-white px-4"
      style={{
        backgroundImage: `url(${slide5})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Title (on top of fixture card) */}
      <h2 className="relative z-10 text-3xl sm:text-5xl font-extrabold uppercase tracking-wider text-yellow-400 mb-8 text-center">
        Upcoming Fixture
      </h2>

      {/* Fixture card */}
      <div className="relative z-10 bg-white bg-opacity-10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-10 w-[90%] max-w-3xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center">
            <img
              src={fixture.homeLogo}
              alt={fixture.homeTeam}
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-2"
            />
            <p className="text-xl font-bold">{fixture.homeTeam}</p>
          </div>

          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-semibold mb-2">
              {isUpcoming ? "VS" : fixture.result}
            </p>
            <p className="text-sm text-gray-200">
              {fixture.date} • {fixture.time}
            </p>
            <p className="text-sm text-gray-400">{fixture.venue}</p>
          </div>

          <div className="text-center">
            <img
              src={fixture.awayLogo}
              alt={fixture.awayTeam}
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-2"
            />
            <p className="text-xl font-bold">{fixture.awayTeam}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fixture;
