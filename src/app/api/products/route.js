import coffeedata from "../../../../data/coffeedata";
export async function GET(request) {
  return new Response(JSON.stringify(coffeedata), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
