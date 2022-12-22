import React from "react";
import AllEvent from "../../src/components/event/event-page";
const EventsPage = ({ data }) => {
  return <AllEvent data={data} />;
};
export default EventsPage;
export async function getStaticProps() {
  const { events_categories } = await import("../../data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}
