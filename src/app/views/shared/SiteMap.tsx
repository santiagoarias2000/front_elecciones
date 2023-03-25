import { useEffect, useState } from "react";
import { xml2js } from "xml-js";

export const SiteMap = () => {
  const [xmlData, setXmlData] = useState("");

  useEffect(() => {
    fetch("../src/assets/sitemap.xml")
      .then((response) => response.text())
      .then((data) => setXmlData(data));
  }, []);
  const xmlObject = xml2js(xmlData, { compact: true });
  return <div>{JSON.stringify(xmlObject, null, 2)}</div>;
};
