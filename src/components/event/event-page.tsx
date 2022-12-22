import React from "react";
import Link from "next/link";
import Image from "next/image";
const AllEvent = ({ data }:any) => {
  return (
    <div className="events_page">
      <div>
        {data.map((ev:any) => (
          <Link key={ev.id} href={`/events/${ev.id}`} passHref>
            <div className="card">
              <Image src={ev.image} alt={ev.title} width={500} height={600} />
              <h2>{ev.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllEvent;
