import React from "react";
import Image from "next/image";
import Link from "next/link";
import CatEvent from "../../../src/components/event/catEvent";
const EventCategoryPage = ({ data, pageName }) => {
  return <CatEvent data={data} pageName={pageName} />;
};

export async function getStaticPaths() {
  const { events_categories } = await import("../../../data/data.json");
  // console.log(events_categories);
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}
export default EventCategoryPage;
export async function getStaticProps(context: any) {
  const id = context?.params.cat;
  const { allEvents } = await import("../../../data/data.json");
  const data = allEvents.filter((ev) => ev.city === id);

  return {
    props: { data, pageName: id },
  };
}
