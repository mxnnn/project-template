async function getFacts() {
  const res = await fetch('https://cat-fact.herokuapp.com/facts/', {
    next: {
      revalidate: 10,
    },
  });
  const facts = await res.json();

  return facts;
}

export default async function Web() {
  const facts = await getFacts();

  return (
    <div>
      <h1>Web</h1>
      <div>{JSON.stringify(facts)}</div>
    </div>
  );
}
