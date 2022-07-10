import React from 'react';
import teamImg from '../../assets/team.png';
import teamImg1 from '../../assets/team-1.png';
import TeamCard from '../cards/TeamCard';
import maleImg from '../../assets/male-avatar.png';
import femaleImg from '../../assets/female-avatar.png';
const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Keziah Odoi',
      role: 'Frontend Developer',
      img: femaleImg,
    },
    {
      name: 'Albert Lawer',
      role: 'Backend Developer',
      img: maleImg,
    },
    {
      name: 'Chukwudi Uwakwe',
      role: 'Backend Developer',
      img: maleImg,
    },
    {
      name: 'Abdul Razak Adams',
      role: 'Frontend Developer',
      img: maleImg,
    },
    {
      name: 'Perry Tintin',
      role: 'UI/UX , Digital Marketing',
      img: maleImg,
    },
    {
      name: 'Samuel  Amedi ',
      role: 'System Analyst',
      img: maleImg,
    },
    {
      name: 'Musah Arimiyaw',
      role: 'Mobile App Developer',
      img: maleImg,
    },
    {
      name: 'Agbelorbu Courage',
      role: 'Frontend Developer',
      img: maleImg,
    },
  ];
  return (
    <div className="container w-full mt-10 flex items-center justify-between gap-3 py-8">
      <div className="w-full h-full text-black flex flex-col items-center gap-5 justify-center">
        <div className="w-full flex flex-col items-center object-contain justify-center">
          <img className="object-contain w-[40%]  " src={teamImg} alt="team" />
          <h2 className="font-bold text-[24px] text-center mt-5">OUR TEAM</h2>
          <img
            className="object-contain max-w-[10%]   lg:object-cover"
            src={teamImg1}
            alt="team1"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {teamMembers?.map((member, index) => (
            <TeamCard
              key={index}
              memberImg={member.img}
              memberName={member.name}
              memberRole={member.role}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
