import React from "react";
import Image from "next/image";
import Link from "next/link";
const CatEvent = ({ data, pageName }) => {
  return (
    <div className="cat_events">
      <h1>Event in {pageName}</h1>
      <div className="content">
        {data.map((item) => (
          <Link href={`/events/${item.city}/${item.id}`} key={item.id} passHref>
            <div className="card">
              <Image height={300} width={300} src={item.image} alt={""} />
              <h2> {item.title}</h2>
              <p>{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CatEvent;
