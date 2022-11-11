import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const client = sanityClient ({
    dataset: "production",
    projectId: "jis5b3wt",
    apiVersion: "2021-10-21",
    useCdn: true,
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;