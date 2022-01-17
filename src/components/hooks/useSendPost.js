export default async function useSendPost(inputs, submitted) {
  if (submitted) {
    let status = await fetch(
      "https://frontend-take-home.fetchrewards.com/form",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      }
    );

    return status;
  }
}
