import Card from "./shared/Card";

export default function TicketItem({ item }) {
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}
