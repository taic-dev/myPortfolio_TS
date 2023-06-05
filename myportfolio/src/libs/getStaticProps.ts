import { client } from "./microcms";

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "skills" });
  return data;
};
