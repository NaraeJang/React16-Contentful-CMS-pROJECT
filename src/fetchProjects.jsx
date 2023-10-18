import { createClient } from "contentful";

const client = createClient({
  space: "189v7f0dmbk6",
  environment: "master",
  accessToken: "cOT8NEmQr90OP2DRs7HyrBwffTULGtmfkDdiLJEgLAU",
});

client
  .getEntries({ content_type: "projects" })
  .then((response) => console.log(response));
