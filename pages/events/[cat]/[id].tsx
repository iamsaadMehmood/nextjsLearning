import SingleEvent from "../../../src/components/event/single-event";

const EventPage = ({ data }) => <SingleEvent data={data} />;

export default EventPage;
export async function getStaticPaths() {
  const { allEvents } = await import("../../../data/data.json");

  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const { allEvents } = await import("../../../data/data.json");
  const id = context.params.id;
  const eventData = allEvents.find((ev) => ev.id === id);
  return {
    props: { data: eventData },
  };
}
